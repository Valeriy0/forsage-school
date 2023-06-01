import '@/styles/globals.css'
import react from 'react'
import { DefaultLayout } from '@/Layouts';

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
