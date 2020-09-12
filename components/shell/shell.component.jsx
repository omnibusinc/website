import Head from 'next/head';
import { AppWrapper } from '../../global.styles';
import Footer from '../footer/footer.component';
import GlobalStyle from '../../styles/global';
import { useState } from 'react';
import Navbar from '../navbar/navbar';
import { ShellWrapper } from './shell.styles';

const Shell = ({ children }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <ShellWrapper>
          <Head>
            <title>Omnibus Interactive</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
          <AppWrapper>
                {children}
          </AppWrapper>
          <Footer />
          <GlobalStyle />
        </ShellWrapper>
      );
};

export default Shell;