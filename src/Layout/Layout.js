import React from 'react'
import Letshop from '../Pages/ProductCart/Letshop/Letshop'
import LetshopHandpick from '../Pages/ProductCart/LetshopHandpick/LetshopHandpick'
import Footer from './Footer/Footer'
import Header from './Header/Header'


const Layout = () => {
    return (
        <>
      <Header />
      <Letshop />
      <LetshopHandpick />
      <Footer />

        </>
    )
}

export default Layout