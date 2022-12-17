import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contabilidade Tributária</title>
      </Head>
      <Header />
    </>
  );
};

export default Home;
