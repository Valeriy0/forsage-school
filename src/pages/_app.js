import '@/styles/globals.css'
import react from 'react'

export default function App({ Component, pageProps }) {
  return (
    <div className='w-screen h-screen'>
      <Component {...pageProps} />
    </div>
  )
}
