import 'tailwindcss/tailwind.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
