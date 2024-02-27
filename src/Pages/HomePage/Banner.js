import React from 'react'

const Banner = () => {
    return (
        <>
            <section className="section-hero">
                <div className="container">
                    <div className="row hero justify-content-center">
                        <div className="hero-img-box col-lg-6">
                            <img className="maxx" src="img/hban.png" alt="Hero Image" />
                        </div>
                        <div className="col-lg-6 hero-text-box">
                            <h1 className="heading-primary">
                                Buy and Send
                                <br />
                                Gift Cards Instantly
                            </h1>
                            <p className="hero-description">
                                Buy premium gift cards.
                                <br />
                                Send by email, text, or hand deliver.
                            </p>
                            <a href="#" className="btn-hover color-9">Get Offers &nbsp; <i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner