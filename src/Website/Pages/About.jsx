import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div>
<div>
  
 
  <section className="inner-section single-banner" style={{background: 'url(https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80) no-repeat center'}}>
    <div className="container">
      <h2>About our company</h2>
      <h4 className="text-white">
        <ol className="breadcrumb">
          <i className="fas fa-home" /> &nbsp;<li className="breadcrumb-item"><a href="/">Home</a></li>
          /<li aria-current="page"> About</li>
        </ol>
      </h4>
    </div>
  </section>
  <section className="inner-section about-company">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-content">
            <h2>Vishwakarma Super Mart Private Limited</h2>
            <p>is a direct selling company that deals with the distribution of a wide range of high quality,
              lifestyle products for day to day life. Our aim is to deliver the best products directly to our consumers,
              who form the core of the company. Our networks of registered distributors are trained leaders and 
              representatives who ensure that consumers get the best products, with additional free business 
              opportunity benefits. The profitable opportunities offered have influenced many customers to purchase 
              products from non-retail environments, owing to the expansion of direct selling across the country.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div><img style={{width: 250}} src="https://vsmart.ajspire.com/images\about1.png" alt="about" /></div>
        </div>
        <div className="col-lg-3">
          <div><img style={{width: 250}} src="https://vsmart.ajspire.com/images\about2.png" alt="about" /></div>
        </div>
      </div>
    </div>
  </section>
  <hr />
  <section className="inner-section about-company">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-content">
            <h2 style={{color: 'orangered'}}>Our Vision</h2>
            <p>Vishwakarma Super Mart Private Limited to strive hard continuously and constantly to make every individual customer financially self-reliant, economically and socially strong through the self - help team concept.</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-content">
            <h2 style={{color: 'orangered'}}>Our Mission</h2>
            <p>Vishwakarma Super Mart Private Limited has vision to create wealth that provides personal, professional, social, financial and spiritual growth to everyone. We aim to provide the highest level of quality and service possible with respect to the products and services that we offer and strive to create an environment and culture that lends itself to our distributor’s success.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr />
  <section className="about-choose">
    <div className="container">
      <div className="row">
        <div className="col-11 col-md-9 col-lg-7 col-xl-6 mx-auto">
          <div className="section-heading">
            <h2>Why People Choose Their Daily Organic Life With Us</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="choose-card">
            <div className="choose-icon"><i className="icofont-fruits" /></div>
            <div className="choose-text">
              <h4>Free Shipping</h4>
              <p>VS Mart, gives product delivery for all customers free that is plus point of order.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose-card">
            <div className="choose-icon"><i className="icofont-vehicle-delivery-van" /></div>
            <div className="choose-text">
              <h4>Gift Cards</h4>
              <p>VS Mart, Gives every customer reward points or saving as theire customer type. It's make to happy customer and continue to joined together as 
                like Mart and Card. Gifts gives to customers reward points</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose-card">
            <div className="choose-icon"><i className="icofont-loop" /></div>
            <div className="choose-text">
              <h4>Reward Points</h4>
              <p>VS Mart, Gives every customer reward points or saving as theire customer type. It's make to
                happy customer and continue to joined together as like Mart and Card.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="choose-card">
            <div className="choose-icon"><i className="icofont-support" /></div>
            <div className="choose-text">
              <h4>Easy Return</h4>
              <p>One major factor that dictates where online shoppers make purchases is whether you have a clear and generous eCommerce returns policy. Studies have shown that
                solid return policies increase sales without increasing the volume of return.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>







    </div>
  )
}

export default About
