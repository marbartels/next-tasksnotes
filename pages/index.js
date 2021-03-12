import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>MariekeDev's site | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ducimus assumenda itaque possimus, sed esse. Voluptatem velit pariatur eos harum eligendi. Delectus, enim nemo ut consequuntur vitae suscipit molestias fugiat?</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ducimus assumenda itaque possimus, sed esse. Voluptatem velit pariatur eos harum eligendi. Delectus, enim nemo ut consequuntur vitae suscipit molestias fugiat?</p>
        <Link href="/members">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}