import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

import Socials from '../components/Socials'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${poppins.variable} font-poppins relative`}>
      <TopLeftImg />
      <Socials />
      <Header />
      {children}
    </div>
  );
};

export default Layout;