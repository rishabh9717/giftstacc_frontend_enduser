import React from 'react'
import '../../scss/Components/Footer.css'

const Footer = () => {
    return (
        <>
            <footer class="footer new-ft">
                <div class="top-footer">
                    <div class="container-fluid">
                        <div class="row justify-content-between">
                            <div class="col-12 col-md-6 col-lg-3 col-xl-3">
                                <div class="footlist">
                                    <div class="footsocial">
                                        <img class="kok" src="img/footer-logo.png" />
                                        <ul>
                                            <li class="d-none"><a target="_blank" href="javascript:void(0)"><i class="lab la-facebook-f"></i></a></li>
                                            <li class="d-none"><a target="_blank" href="javascript:void(0)"><i class="lab la-instagram"></i></a></li>
                                        </ul>
                                        <div class="footlist">
                                            <a href="tel:+91 9999999999" class="clr-white fnt-13"><i class="las la-phone-alt" style={{transform:'rotate(-85deg)'}}
                                            // style="transform: rotate(-85deg);"
                                            ></i>&nbsp;+91 9999999999</a>
                                            <br />
                                            <a href="mailto:support@cc.giftstacc.com" class="clr-white fnt-13"><i class="las la-envelope"></i>&nbsp;support@cc.giftstacc.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3 col-xl-3">
                                <div class="footlist">
                                    <h4>About</h4>
                                    <ul class="footul">
                                        <li><a href="#">Our Story</a></li>
                                        <li><a href="#">Vendor Panel</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3 col-xl-3">
                                <div class="footlist">
                                    <h4>Help</h4>
                                    <ul class="footul">
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Terms and Conditions</a></li>
                                        <li><a href="#">Cancellation &amp; Returns Policy</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3 col-xl-3">
                                <div class="footlist">
                                    <h4>My Account</h4>
                                    <ul class="footul">
                                        <li><a href="#">My Orders</a></li>
                                        <li><a href="#">My Addresses</a></li>
                                        <li><a href="#">Signup</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="footlogos d-none">
                            <div class="row justify-content-center">
                                <div class="col-xl-12 col-md-12 col-12">
                                    <div class="copytextbox text-center">
                                        <p>Copyright © 2024 Customer Capital. All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer