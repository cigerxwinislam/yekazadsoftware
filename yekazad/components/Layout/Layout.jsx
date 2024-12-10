//Bismillahirahmanirahim



import Head from 'next/head';
import Footer from './Footer';
import styles from './Layout.module.css';
import Nav from './Nav';
import MmExample from '../mmenu';
import MmBasicExample from '../mmnavbar';
import { Tegihistin } from '../mmtegihistin';



import 'bootstrap/dist/css/bootstrap.css'
import { Alert } from 'react-bootstrap';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Karel Ağrı Fiber Elektronik</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Karel Ağrı Fiber Elektronik"
        />
        <meta property="og:title" content="Karel Ağrı Fiber Elektronik" />
        <meta
          property="og:description"
          content="Karel Ağrı Fiber Elektronik"
        />
        <meta
          property="og:image"
          content="https://3.bp.blogspot.com/-GKnSpUd0yc8/VpHb0wjxBJI/AAAAAAAAA6M/C_dCx0Htyns/s1600/ahmede-xane-%25C5%259Fiirleri.jpg"
        />
      </Head>

<Alert>Supports Palastina and Rojava !</Alert>


      <MmBasicExample/>
      <Nav />




      <main className={styles.main}>{children}</main>

      <Tegihistin/>
      <Footer />
    </>
  );
};

export default Layout;
