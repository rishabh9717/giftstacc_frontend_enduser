import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import RouteConfiq from '../Routing/routes'

const Layout = () => {

    return (
        <>
            <Header />
            <div className="content-body">
                <RouteConfiq />
            </div>
            <Footer />
        </>
    )
}

export default Layout