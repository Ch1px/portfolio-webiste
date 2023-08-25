import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

import Socials from '../components/Socials'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Socials />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
