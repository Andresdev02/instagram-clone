import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto bg-gray-50 scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
      </Head>
      <Header />
      <Feed />
      <Modal />
    </div>
  )
}
