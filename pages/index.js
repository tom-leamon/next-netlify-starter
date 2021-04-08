import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home({ dynamic }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          { dynamic }
        </p>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      dynamic: "test"
    }, // will be passed to the page component as props
  }
}