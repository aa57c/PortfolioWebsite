// components/Layout.jsx

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout;