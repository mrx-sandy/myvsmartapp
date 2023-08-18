import React from 'react'
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSearch, faWallet, faRandom, faHeart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
  
  <div className="backdrop" />
  <a className="backtop fas fa-arrow-up" href="#" />
  <div className="header-top">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-5">
          <div className="header-top-welcome">
            <p>Welcome to VS Mart in Your Dream Online Store!</p>
          </div>
        </div>
        <div className="col-md-5 col-lg-3">
        </div>
        <div className="col-md-7 col-lg-4">
          <ul className="header-top-list">
            <li><a href="/contact-us">contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>








    <header className="header-part">
  <div className="container">
    <div className="header-content">
      <div className="header-media-group">
        <button className="header-user">
          <FontAwesomeIcon icon={faList} />
        </button>
        <a href="/">
          <img style={{ width: 90, height: 55 }} src="https://vsmart.ajspire.com/images/logo1.png" alt="logo" />
        </a>
        <p className="text-success">
          <b>You Order, We Deliver !</b>
        </p>
        <button className="header-src">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <a href="/" className="header-logo">
        <img style={{ width: 150, height: 90 }} src="https://vsmart.ajspire.com/images/logo1.png" alt="logo" />
      </a>
      <form action="/search" className="header-form">
        <input type="text" name="search" placeholder="Search anything..." list="ecomlist" id="search_product" />
        <datalist id="ecomlist">
          {/* Add your datalist options here */}
        </datalist>
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="header-widget-group">
        <a href="/customer/wallet" className="header-widget" title="Wallet List">
          <FontAwesomeIcon icon={faWallet} />
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/compare" className="header-widget" title="Compare List">
          <FontAwesomeIcon icon={faRandom} />
          <sup>0</sup>
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/wishlist" className="header-widget" title="Wishlist">
          <FontAwesomeIcon icon={faHeart} />
          <sup>0</sup>
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="header-widget header-cart" title="Cartlist">
          <FontAwesomeIcon icon={faShoppingBasket} />
          <sup id="cart_total_products">0</sup>
          <span>total price<small id="carts_total">0</small></span>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button>Login</button>

      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ul className="Header-list">
        {/* Add your list items here */}
      </ul>
    </div>
  </div>








  <div className="col-lg-12">
  <div className="Header-content">
    <ul className="Header-list">
      <div className="Header-item dropdown"> <a className="Header-link " href="/">Home</a></div>
      <li className="Header-item dropdown-megamenu"><a className="Header-link dropdown-arrow" href="#">category</a>
        <div className="megamenu">
          <div className="container megamenu-scroll">
            <div className="row row-cols-5">
              <div className="col">
                <div className="megamenu-wrap">
                  <h5 className="megamenu-title"><a href="/product-shop/2/0">Packaged Food</a>
                  </h5>
                  <ul className="megamenu-list sub">
                    <li><a href="/product-shop/2/146">
                        Iceream</a>
                    </li>
                    <li><a href="/product-shop/2/145">
                        sweets</a>
                    </li>
                    <li><a href="/product-shop/2/112">
                        Chocolate</a>
                    </li>
                    <li><a href="/product-shop/2/17">
                        Biscuits</a>
                    </li>
                    <li><a href="/product-shop/2/73">
                        pasta  &amp; Noodles</a>
                    </li>
                    <li><a href="/product-shop/2/67">
                        Snack Food</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="megamenu-wrap">
                  <h5 className="megamenu-title"><a href="/product-shop/4/0">Grocery</a>
                  </h5>
                  <ul className="megamenu-list sub">
                    <li><a href="/product-shop/4/132">
                        Dry Fruits</a>
                    </li>
                    <li><a href="/product-shop/4/75">
                        Talan</a>
                    </li>
                    <li><a href="/product-shop/4/6">
                        Masala</a>
                    </li>
                    <li><a href="/product-shop/4/64">
                        Grocery</a>
                    </li>
                    <li><a href="/product-shop/4/57">
                        Rice</a>
                    </li>
                    <li><a href="/product-shop/4/48">
                        Oil</a>
                    </li>
                    <li><a href="/product-shop/4/39">
                        Pulses</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="megamenu-wrap">
                  <h5 className="megamenu-title"><a href="/product-shop/5/0">Beverages</a>
                  </h5>
                  <ul className="megamenu-list sub">
                    <li><a href="/product-shop/5/105">
                        Tea  &amp;  Coffee</a>
                    </li>
                    <li><a href="/product-shop/5/119">
                        Soft Drinks</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="megamenu-wrap">
                  <h5 className="megamenu-title"><a href="/product-shop/10/0">Personal care</a>
                  </h5>
                  <ul className="megamenu-list sub">
                    <li><a href="/product-shop/10/79">
                        feminine Hygiene</a>
                    </li>
                    <li><a href="/product-shop/10/81">
                        Oral Care</a>
                    </li>
                    <li><a href="/product-shop/10/107">
                        Hair care</a>
                    </li>
                    <li><a href="/product-shop/10/109">
                        Men's Grooming</a>
                    </li>
                    <li><a href="/product-shop/10/117">
                        Skin Care</a>
                    </li>
                    <li><a href="/product-shop/10/118">
                        Skin Care Bar</a>
                    </li>
                    <li><a href="/product-shop/10/53">
                        Deo</a>
                    </li>
                    <li><a href="/product-shop/10/47">
                        Face Care</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="megamenu-wrap">
                  <h5 className="megamenu-title"><a href="/product-shop/13/0">Home care</a>
                  </h5>
                  <ul className="megamenu-list sub">
                    <li><a href="/product-shop/13/144">
                        Kitchen Equipment</a>
                    </li>
                    <li><a href="/product-shop/13/142">
                        Mat</a>
                    </li>
                    <li><a href="/product-shop/13/141">
                        Plastic Article</a>
                    </li>
                    <li><a href="/product-shop/13/140">
                        Fevi Kwik</a>
                    </li>
                    <li><a href="/product-shop/13/138">
                        Rangoli</a>
                    </li>
                    <li><a href="/product-shop/13/137">
                        Brush</a>
                    </li>
                    <li><a href="/product-shop/13/136">
                        Wiper</a>
                    </li>
                    <li><a href="/product-shop/13/134">
                        Scrubber</a>
                    </li>
                    <li><a href="/product-shop/13/133">
                        Mop</a>
                    </li>
                    <li><a href="/product-shop/13/128">
                        Detergent Soap</a>
                    </li>
                    <li><a href="/product-shop/13/97">
                        Detergent Powder &amp;  Liquid</a>
                    </li>
                    <li><a href="/product-shop/13/99">
                        Dishwash Soap &amp; Liquid</a>
                    </li>
                    <li><a href="/product-shop/13/23">
                        Pooja Articles</a>
                    </li>
                    <li><a href="/product-shop/13/59">
                        Toilet cleaner</a>
                    </li>
                    <li><a href="/product-shop/13/54">
                        freshners &amp; repellents</a>
                    </li>
                    <li><a href="/product-shop/13/40">
                        Broom</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="megamenu-wrap">
                  <h5 className="megamenu-title"><a href="/product-shop/14/0">Stationary</a>
                  </h5>
                  <ul className="megamenu-list sub">
                    <li><a href="/product-shop/14/120">
                        Stationary</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="megamenu-wrap">
                  <h5 className="megamenu-title"><a href="/product-shop/20/0">Grains</a>
                  </h5>
                  <ul className="megamenu-list sub">
                    <li><a href="/product-shop/20/61">
                        Cerelac</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="megamenu-wrap">
                  <h5 className="megamenu-title"><a href="/product-shop/21/0">Baby care</a>
                  </h5>
                  <ul className="megamenu-list sub">
                    <li><a href="/product-shop/21/89">
                        Baby care</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="megamenu-wrap">
                  <h5 className="megamenu-title"><a href="/product-shop/22/0">Health Care</a>
                  </h5>
                  <ul className="megamenu-list sub">
                    <li><a href="/product-shop/22/139">
                        Handwash</a>
                    </li>
                    <li><a href="/product-shop/22/131">
                        Syrup</a>
                    </li>
                    <li><a href="/product-shop/22/111">
                        Pain Relief</a>
                    </li>
                    <li><a href="/product-shop/22/116">
                        Sanitizer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="megamenu-wrap">
                  <h5 className="megamenu-title"><a href="/product-shop/28/0">Electronics</a>
                  </h5>
                  <ul className="megamenu-list sub">
                    <li><a href="/product-shop/28/101">
                        Electronics</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="section-btn-25"><a href="/all-category" className="btn btn-outline"><i className="fas fa-eye" /><span>view all
                    Categories</span></a></div>
            </div>
          </div>
        </div>
      </li>
      <li className="Header-item dropdown-megamenu"><a className="Header-link dropdown-arrow" href="#">Brands</a>
        <div className="megamenu">
          <div className="container megamenu-scroll">
            <div className="row">
              <div className="megamenu-wrap">
                <ul className="megamenu-list">
                  <div className="row">
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/208">Halani Foods Pvt Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/207">HETAL MAHILA GRUH UDYOAG</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/206">PEPSICO INDIA HOLDINGS PVT LTD</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/205">Ashwamedh Foods</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/204">Ashwamedh Foods</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/203">Kimberly-Clark India Pvt. Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/202">ESME Consumer Pvt. Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/201">Cadbury</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/200">Cookwell Foods</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/199">Pushparaj  Enterprises</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/198">Shree producion</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/197">Karnataka Soaps &amp; Detergents Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/196">Bajaj Consumer Care Limiited</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/195">Pravin Products</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/194">national Agro Industries</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/193">Universal Trading Co</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/192">Shri Mahila Griha Udyog Lijjat Papad</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/191">M/s Swaroopa Nand Ajmera</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/190">Vibhava Marketing Corporation</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/189">Govindram Shobharam &amp; Co.</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/188">Lunkad Vegoils</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/187">Taj International</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/186">Vithoba Indutries Pvt Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/185">Bora Foods Pvt Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/184">RMW Enterprises</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/183">Hindustan Foods Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/182">Paramount Polish Processors Pvt Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/181">Elegant Weavers</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/180">TPAC Packaging Pvt Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/179">Shreeji Perfumery Works</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/178">Huhtamaki PPL Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/177">Green Leaf</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/176">Shri Jairaj Farsan &amp; Wafers</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/175">Parag Milk Food Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/174">Amcor Palej</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/173">Supermax Personal Care Pvt Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/172">M/S Radiant Indus Chem Pvt Ltd</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/171">Swara Industries</a>
                        </li>
                      </div>
                    </div>
                    <div className="col-4 mx-auto">
                      <div className>
                        <li>
                          <a className="nav-link" href="/product-shop/170">Ruchi Soya Industries Ltd</a>
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="section-btn-25"><a href="/all-brand" className="btn btn-outline"><i className="fas fa-eye" /><span>view all
                    Brands</span></a></div>
            </div>
          </div>
        </div>
      </li>
      <li className="Header-item "><a className="Header-link " href="/shop">Shop</a>
      </li><li className="Header-item "><a className="Header-link " href="/about">About </a>
      </li>
      <li className="Header-item "><a className="Header-link " href="/banking_details">Banking
          Details</a>
      </li>
      <li className="Header-item "><a className="Header-link " href="/download">Download
        </a>
      </li>
      <li className="Header-item "><a className="Header-link " href="/legal">legal</a>
      </li>
      <div className="Header-item dropdown"> <a className="Header-link " href="/blogs">Blog</a></div>
    </ul>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div className="Header-info-group">
      <div className="Header-info"><i className="icofont-ui-touch-phone" />
        <p><small>call us</small> <a className="link-secondary" href="tel:8446092500">
            <span>(+91)8446092500
            </span></a></p>
      </div>
      <div className="Header-info"><i className="icofont-ui-email" />
        <p><small>email us</small> <a className="link-secondary" href="mailto:vsmart0932@gmail.com">
            <span>vsmart0932@gmail.com</span></a></p>
      </div>
    </div>
  </div>
</div>




</header>

    </>
  )
}

export default Header
