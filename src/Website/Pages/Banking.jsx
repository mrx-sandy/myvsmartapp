import React from 'react'

const Banking = () => {
  return (
    <div>
     <section className="inner-section single-banner" style={{background: 'url(images/single-banner.jpg) no-repeat center'}}>
  <div className="container">
    <h2>Banking Details</h2>
    <h4 className="text-white">
      <ol className="breadcrumb">
        <i className="fas fa-home" /> &nbsp;<li className="breadcrumb-item"><a href="/">Home</a></li>
        /<li aria-current="page"> Banking Details</li>
      </ol>
    </h4>
  </div>
</section>


<section className>
  <div className="container py-5">
    <h1 className="text-center">Banking Details</h1>
    <br />
    <div className="text-center"><img style={{width: 200}} src="https://vsmart.ajspire.com/images\icici.png" alt="about" /></div> 
    <br />
    <div className>
      <div className>
        <table className="table-table-bordered" style={{width: '100%'}}>
          <thead>
            <tr>
              <th style={{backgroundColor: '#43A047'}} scope="col" className="text-white">Bank Name</th>
              <th style={{backgroundColor: '#43A047'}} scope="col" className="text-white">ICICI Bank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name :</td>
              <td>Vishwakarma Super Mart Private Limited</td>
            </tr>
            <tr>
              <td>A/c No :</td>
              <td>646005004085</td>
            </tr>
            <tr>
              <td>Branch :</td>
              <td>Raviwar Peth Satara</td>
            </tr>
            <tr>
              <td>IFSC Code :</td>
              <td>ICIC0006460</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Banking
