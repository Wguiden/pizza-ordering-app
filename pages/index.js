import Head from 'next/head'
import Image from 'next/image'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Happy Joes Pizza</title>
        <meta name="description" content="Happy Joes Pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PizzaList/>

    </div>
  )
}
