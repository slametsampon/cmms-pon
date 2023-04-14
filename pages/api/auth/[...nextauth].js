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
      return token
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin
      return session
    },
  },
  providers: [
    process.env.VERCEL_ENV === 'preview'
      ? CredentialsProvider({
          name: 'credentials',
          credentials: {
            username: {
              label: 'Username',
              type: 'text',
              placeholder: 'jsmith',
            },
            password: { label: 'Password', type: 'password' },
          },
          async authorize() {
            return {
              id: 1,
              name: 'J Smith',
              email: 'jsmith@example.com',
              image: 'https://i.pravatar.cc/150?u=jsmith@example.com',
            }
          },
        })
      : CredentialsProvider({
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
                name: user.name,
                email: user.email,
                image: 'f',
                isAdmin: user.isAdmin,
              }
            }
            throw new Error('Invalid email or password')
          },
        }),
  ],
})
