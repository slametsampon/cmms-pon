import LayoutWrapper from '@/components/LayoutWrapper';
import '@/css/tailwind.css';
import siteMetadata from '@/data/siteMetadata';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

export default function App({ Component, pageProps}) {
  return (
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
            <Component {...pageProps} />
      </ThemeProvider>
  )
}