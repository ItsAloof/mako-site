import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeBody from '../components/homepage/body'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeBody />
    </Layout>
  )
}

export default Home
