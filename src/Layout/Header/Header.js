import React from 'react'

const Header = () => {
    return (
        <>
            {/* -----------Desktop Header Starts From Here - ------------------------------------------------------ */}
            <header className="header mobile-hide">
                <div className="fixheader">
                    <div className="botheader top-hh">
                        <div className="top-menu oaoa1">
                            <img alt="FREE SHIPPING ON ALL ORDERS" className="mpromotion" src="https://cc.shopstacc.com/resources/banner/698236552712202310998.webp" />
                            <p className="promo">
                                &nbsp;FREE SHIPPING ON ALL ORDERS
                            </p>
                            <p className="mt-2"><a href="#" className="exp">Explore Now</a></p>
                        </div>
                    </div>
                    <div className="main-header fitted ">
                        <div className="container-fluid">
                            <div className="row align-items-lg-center">
                                <div className="col-xl-3 col-lg-4 col-7 order-0 order-lg-0">
                                </div>
                                <div className="col-xl-3 col-lg-2 col-5 order-1 order-lg-2">
                                </div>
                                <div className="col-xl-6 col-lg-6 col-12 order-2 order-lg-1">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="botheader pad">
                        <div className="container-fluid">
                            <div className="d-flex justify-content-between top-menu">
                                <div className="d-block d-xl-none p-3">
                                    <div className="mobilemenulogo text-center">
                                        <a href='#'>
                                            <img src='https://cc.shopstacc.com/images/logo.png' onError={(e) => { e.target.onerror = null; e.target.src = "imgg/logo-shop.png" }} />
                                        </a>
                                    </div>
                                    <div className="menuclosebtn">
                                        <a href="javascript:void(0)"><i className="las la-times"></i></a>
                                    </div>
                                </div>
                                <div className="thelogo">
                                    <div className="button"></div>
                                    <div className="logo">
                                        <a href='#'>
                                            <img src="https://cc.shopstacc.com/images/logo.png" />
                                        </a>
                                    </div>
                                </div>
                                <div className="thecate">
                                    <nav id="cssmenu" className="mt-2">
                                        <ul>
                                            <li className="d-none"><a href='index.html'>Home</a></li>
                                            <li><a href='#'>Electronics</a>
                                                <ul className='submenulist'>
                                                    <li><a href='#'>Audio</a></li>
                                                    <li><a href='#'>BT Speaker</a></li>
                                                    <li><a href='#'>CAR ACCESSORIES</a></li>
                                                    <li><a href='#'>Charging Cable</a></li>
                                                    <li><a href='#'>KETTLE</a></li>
                                                    <li><a href='#'>Lights</a></li>
                                                    <li><a href='#'>Mobile</a></li>
                                                    <li><a href='#'>POWER BANK</a></li>
                                                    <li><a href='#'>Smart Watches</a></li>
                                                    <li><a href='#'>Watches</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href='#'>HouseHold</a>
                                                <ul className='submenulist'>
                                                    <li><a href='#'>Bags</a></li>
                                                    <li><a href='#'>Cooker</a></li>
                                                    <li><a href='#'>Food Processor</a></li>
                                                    <li><a href='#'>LED TV</a></li>
                                                    <li><a href='#'>Refrigerator</a></li>
                                                    <li><a href='#'>RO</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href='#'>Kitchen ware</a>
                                                <ul className='submenulist'>
                                                    <li><a href='#'>Cookware</a></li>
                                                    <li><a href='#'>Induction</a></li>
                                                    <li><a href='#'>Mixer</a></li>
                                                </ul>
                                            </li>
                                            <li><a href='#'>Samsung Store</a></li>
                                            <li>
                                                <a href='#'>Health & Wellness</a>
                                                <ul className='submenulist'>
                                                    <li><a href='#'>Perfume</a></li>
                                                </ul>
                                            </li>
                                            <li className="d-none"><a href='#'>Shop by Concern</a>
                                                <ul className="submenulist">
                                                    <li><a href="#">Diabetes</a></li>
                                                    <li><a href="#">Arthritis</a></li>
                                                    <li><a href="#">Digestion</a></li>
                                                    <li><a href="#">Aches and Pains</a></li>
                                                    <li><a href="#">Blood Pressure</a></li>
                                                    <li><a href="#">Fever</a></li>
                                                    <li><a href="#">Migraine</a></li>
                                                    <li><a href="#">Sinus</a></li>
                                                    <li><a href="#">Liver Care</a></li>
                                                    <li><a href="#">Cold & Cough</a></li>
                                                    <li><a href="#">Mental Wellness</a></li>
                                                    <li><a href="#">Kidney Care</a></li>
                                                    <li><a href="#">Respiratory Care</a></li>
                                                    <li><a href="#">PCOS</a></li>
                                                    <li><a href="#">Cholesterol</a></li>
                                                    <li><a href="#">Piles</a></li>
                                                    <li><a href="#">Immunity Care</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Brands</a>
                                                <ul className="submenulist">
                                                    <li><a href="#">American Tourister</a></li>
                                                    <li><a href="#">Apple</a></li>
                                                    <li><a href="#">Bajaj</a></li>
                                                    <li><a href="#">Boat</a></li>
                                                    <li><a href="#">CALVIN KLEIN</a></li>
                                                    <li><a href="#">Casio</a></li>
                                                    <li><a href="#">Crompton</a></li>
                                                    <li><a href="#">DAVIDOFF</a></li>
                                                    <li><a href="#">Dr.Morepean</a></li>
                                                    <li><a href="#">Dubblin</a></li>
                                                    <li><a href="#">ELIZABETH ARDEN</a></li>
                                                    <li><a href="#">GUESS</a></li>
                                                    <li><a href="#">Havells</a></li>
                                                    <li><a href="#">Infinity</a></li>
                                                    <li><a href="#">Instaplay</a></li>
                                                </ul>
                                            </li>
                                            <li className="d-none"><a href='#'>Sale</a></li>
                                            <li id="ctl00_mywishlist" className="d-none">
                                                <a href='#'><i className="las la-heart"></i>My Wishlist</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="thesearch">
                                    <div className="searchboxmaindiv mt-2">
                                        <div id="ctl00_Panel1" onKeyPress={(e) => { return (e, 'btnsearch') }}>
                                            <div className="searchbox">
                                                <input name="ctl00$txtsearch" type="text" id="txtsearch" className="autosuggest" autoComplete="off" placeholder="Search any product" />
                                                <a id="btnsearch" href="javascript:__doPostBack('ctl00$btnsearch','')"><i className="las la-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theprofile">
                                    <div className="top-right clearfix mt-2">
                                        <ul>
                                            <li id="ctl00_pointdesk" className="prodiscounter44">
                                                <i className="fi fi-ss-star"></i> 0
                                            </li>
                                            <li className="meiconbtn">
                                                <a href="javascript:void(0)" id="ctl00_whenusernotlogin" className="">
                                                    <i className="las la-user"></i>
                                                </a>
                                                <div className="logindropbox">
                                                    <div className="logindrop1">
                                                        <h5></h5>
                                                        <p>Instant access to your orders and account</p>
                                                        <ul>
                                                            <li id="ctl00_lnklogin" className="loginbtnmenu"><a href='#'>login</a></li>
                                                            <li id="ctl00_lnksignup"><a href='#'>sign up</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-none">
                                                <a id="ctl00_btnwishlist" href="javascript:__doPostBack('ctl00$btnwishlist','')">
                                                    <i className="lar la-heart"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a id="mybaglinkmenu1" href="#">
                                                    <i className="las la-shopping-bag"></i>
                                                    <span className="cartcounter">
                                                        <div id="ctl00_UpdatePanel1">0</div>
                                                    </span>
                                                </a>
                                                <div id="ctl00_upd">
                                                    <div id="floatingcart" className="popcartmain">
                                                        <div className="popcartinn">
                                                            <div className="popcarthead">
                                                                <h3>ITEMS IN BAG (0)</h3>
                                                            </div>
                                                            <div className="popcartlistmain">
                                                                <div className="popcartlistmainscroll">
                                                                </div>
                                                            </div>
                                                            <div className="popcartbot">
                                                                <div className="poptotmain">
                                                                    <div className="row m-n1">
                                                                        <div className="col-md-6 col-6 p-1">
                                                                            <span className="poptoquhead">Total (0 items)</span>
                                                                            <p className="mbs5 mr-4 mt-0"></p>
                                                                        </div>
                                                                        <div className="col-md-6 col-6 p-1 ">
                                                                            <div className="text-center">
                                                                                <a className="popviewbagbtn" href='#'><i className="las la-shopping-bag"></i>Checkout</a>
                                                                            </div>
                                                                            <div className="float-right text-right d-none">
                                                                                <span className="poptotarup">Pts 0</span>
                                                                                <p className="incltaxtext m-0"><small>(incl. GST)</small></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                </div>
                                                                <div id="ctl00_divshipingcharge" className="popcarteligb">Add Rs.500 for free shipping</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* -----------Desktop Header Ends From Here - ------------------------------------------------------ */}


            <header class="header desktop-hide">
                <div class="fixheader top-hh">
                    <div class="oaoa top-hh">
                        <img alt="FREE SHIPPING ON ALL ORDERS" class="mpromotion" src="https://cc.shopstacc.com/resources/banner/698236552712202310998.webp" />
                        <p class="promo">
                            FREE SHIPPING ON ALL ORDERS
                        </p>
                        <p class="mt-2"><a href="#" class="exp">Explore Now</a></p>
                    </div>
                    <div class="main-header fitted ">
                        <div class="container">
                            <div class="row align-items-lg-center">
                                <div class="col-xl-3 col-md-6 col-6 ">
                                    <div class="button"></div>
                                    <div class="logo">
                                        <a href='#'>
                                            <img src="https://cc.shopstacc.com/images/logo.png" onerror='this.onerror=null; this.src="https://cc.shopstacc.com/images/logo.png"' />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-md-6 col-6">
                                    <div class="top-right clearfix">
                                        <ul>

                                            <li class="meiconbtn">

                                                <a href="javascript:void(0)" id="initialmob" class="">
                                                    <i class="las la-user"></i></a>
                                                <div class="logindropbox">
                                                    <div class="logindrop1">
                                                        <h5>
                                                        </h5>
                                                        <p>Instant access to your orders and account</p>
                                                        <ul>
                                                            <li id="ctl00_lnkloginmob" class="loginbtnmenu"><a href='#'>login</a></li>
                                                            <li id="ctl00_lnksignupmob"><a href='#'>sign up</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="d-none">
                                                <a id="ctl00_btnwishlist" href="javascript:__doPostBack(&#39;ctl00$btnwishlist&#39;,&#39;&#39;)">
                                                    <i class="lar la-heart"></i></a></li>
                                            <li><a id="toggle-btn" href="#">
                                                <i class="las la-shopping-bag"></i><span class="cartcounter">
                                                    <div id="ctl00_UpdatePanel2">
                                                        0
                                                    </div>
                                                </span>
                                            </a>
                                                <div id="main-wrapper">
                                                    <div id="floatingcartmob" class="popcartmainmob">
                                                        <div class="popcartinn">
                                                            <div class="popcarthead">
                                                                <h3>ITEMS IN BAG (0)</h3>
                                                            </div>
                                                            <div class="popcartlistmain">
                                                                <div class="popcartlistmainscroll">
                                                                </div>
                                                            </div>
                                                            <div class="popcartbot">
                                                                <div class="poptotmain">
                                                                    <div class="row m-n1">
                                                                        <div class="col-md-6 col-6 p-1">
                                                                            <span class="poptoquhead">Total (0 items)</span>
                                                                            <p class="mbs5 mr-4 mt-0">
                                                                            </p>
                                                                        </div>
                                                                        <div class="col-md-6 col-6 p-1 ">
                                                                            <div class="mr-2">
                                                                                <a class="popviewbagbtn" href='#'><i class="las la-shopping-bag"></i>Checkout</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                </div>
                                                                <div id="ctl00_div4" class="popcarteligb">
                                                                    <h5>Free Shipping</h5>
                                                                    <p>Congrats, <strong>your order ships for free!</strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="container">
                            <div class="top-menu">
                                <div class="d-block d-xl-none p-3">
                                    <div class="mobilemenulogo text-center">
                                        <a href='#'>
                                            <img src="https://cc.shopstacc.com/images/logo.png" onerror='this.onerror=null; this.src="https://cc.shopstacc.com/images/logo.png"' />
                                        </a>
                                    </div>
                                    <div class="menuclosebtn">
                                        <a href="javascript:void(0)"><i class="las la-times"></i></a>
                                    </div>
                                </div>
                                <nav id="cssmenu">
                                    <ul>
                                        <li><a href='#'>Home</a>
                                        </li>
                                        <li><a href='#'>Electronics</a>
                                            <ul class='submenulist'>
                                                <li><a href='#'>Audio</a></li>
                                                <li><a href='#'>BT Speaker</a></li>
                                                <li><a href='#'>CAR ACCESSORIES</a></li>
                                                <li><a href='#'>Charging Cable</a></li>
                                                <li><a href='#'>KETTLE</a></li>
                                                <li><a href='#'>Lights</a></li>
                                                <li><a href='#'>Mobile</a></li>
                                                <li><a href='#'>POWER BANK</a></li>
                                                <li><a href='#'>Smart Watches</a></li>
                                                <li><a href='#'>Watches</a></li></ul></li>
                                        <li><a href='#'>HouseHold</a>
                                            <ul class='submenulist'>
                                                <li><a href='#'>Bags</a></li>
                                                <li><a href='#'>Cooker</a></li>
                                                <li><a href='#'>Food Processor</a></li>
                                                <li><a href='#'>LED TV</a></li>
                                                <li><a href='#'>Refrigerator</a></li>
                                                <li><a href='#'>RO</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href='#'>Kitchen ware</a>
                                            <ul class='submenulist'>
                                                <li><a href='#'>Cookware</a></li>
                                                <li><a href='#'>Induction</a></li>
                                                <li><a href='#'>Mixer</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href='#'>Samsung Store</a></li>
                                        <li><a href='#'>Health & Wellness</a>
                                            <ul class='submenulist'>
                                                <li><a href='#'>Perfume</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Brands</a>
                                            <ul class="submenulist">
                                                <li><a href="#">American Tourister</a></li>
                                                <li><a href="#">Apple</a></li>
                                                <li><a href="#">Bajaj</a></li>
                                                <li><a href="#">Boat</a></li>
                                                <li><a href="#">CALVIN KLEIN</a></li>
                                                <li><a href="#">Casio</a></li>
                                                <li><a href="#">Crompton</a></li>
                                                <li><a href="#">DAVIDOFF</a></li>
                                                <li><a href="#">Dr.Morepean</a></li>

                                                <li><a href="#">Dubblin</a></li>

                                                <li><a href="#">ELIZABETH ARDEN</a></li>

                                                <li><a href="#">GUESS</a></li>

                                                <li><a href="#">Havells</a></li>

                                                <li><a href="#">Infinity</a></li>

                                                <li><a href="#">Instaplay</a></li>

                                            </ul>
                                        </li>

                                        <li><a href="#">Sale</a></li>

                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header