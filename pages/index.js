import Head from 'next/head'
import Main from './circle';
import { AppWrapper } from '../global.styles';
import Footer from '../components/footer/footer.component';
import Nav from '../components/nav/nav.component';
import GlobalStyle from '../styles/global';
import { useState } from 'react';
import Navbar from '../components/navbar/navbar';

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <>
      <Head>
        <title>Omnibus Interactive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
      <AppWrapper>
        <Main />
        <Footer />
      </AppWrapper>
      <GlobalStyle />
    </>
  );
}
