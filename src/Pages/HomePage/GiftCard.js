import React from 'react'

const GiftCard = () => {
    return (
        <>
            <section className="letshop new-bg">
                <div className="container mb-2">
                    <div className="row">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="first w-70 mb-2">
                                <h5 className="clc">You Choose the gift card They choose where to spend it!</h5>
                                <p className="the-para-magic2 mobile-hide clr-white">Just your kind of shopping – your go-to brands, your wish-list products, all with irresistible offers.</p>
                            </div>
                            <div className="second">
                                <a className="avail2  mt-4" href="#">View All &nbsp;<i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <a href="productcart.html">
                                <div className="offer-box1">
                                    <img className="w-100" src="img/c1.png" alt="Offer Image" />
                                    <div className="coupendis mt-4">
                                        <div className="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                        <div className="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <div className="offer-box1">
                                <img className="w-100" src="img/c2.png" alt="Offer Image" />
                                <div className="coupendis mt-4">
                                    <div className="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div className="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-3 text-center mobile-hide">
                            <div className="offer-box1">
                                <img className="w-100" src="img/c3.png" alt="Offer Image" />
                                <div className="coupendis mt-4">
                                    <div className="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div className="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-3 text-center mobile-hide">
                            <div className="offer-box1">
                                <img className="w-100" src="img/c4.png" alt="Offer Image" />
                                <div className="coupendis mt-4">
                                    <div className="fnt-12px text-dark ">Upto 15% Discount&nbsp;</div>
                                    <div className="fnt-12px text-muted mb-1 ">Domino's Shopping Voucher</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GiftCard