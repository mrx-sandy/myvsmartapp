import React from 'react'

const Blog = () => {
  return (
    <div>
<section className="inner-section single-banner" style={{background: 'url(images/single-banner.jpg) no-repeat center'}}>
  <div className="container">
    <h2>Blogs</h2>
    <h4 className="text-white">
      <ol className="breadcrumb">
        <i className="fas fa-home" /> &nbsp;<li className="breadcrumb-item"><a href="/">Home</a></li>
        /<li aria-current="page">View Blog</li>
      </ol>
    </h4>
  </div>
</section>

    </div>
  )
}

export default Blog
