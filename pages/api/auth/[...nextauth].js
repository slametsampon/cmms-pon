import bcryptjs from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from 'models/User'
import db from 'utils/db'

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id
      if (user?.isAdmin) token.isAdmin = user.isAdmin
      if (user?.id) token.id = user.id
      if (user?.isActive) token.isActive = user.isActive
      return token
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin
      if (token?.id) session.user.id = token.id
      if (token?.isActive) session.user.isActive = token.isActive
      return session
    },
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials) {
        await db.connect()
        const user = await User.findOne({
          name: credentials?.name,
        })
        await db.disconnect()
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            id: user.id,
            name: user.name,
            email: user.email,
            image: 'f',
            isAdmin: user.isAdmin,
            isActive: user.isActive,
          }
        }
        throw new Error('Invalid email or password')
      },
    }),
  ],
})
