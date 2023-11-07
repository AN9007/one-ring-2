import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {
  return (
    <>
        <Head>
      
    
    <meta charSet="utf-8" />
    {/* Page Title */}
    <title>One Ring Rentals - Home</title>
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
    />
    {/* IE6-8 support of HTML5 elements */}
    {/*[if lt IE 9]>

  <![endif]*/}
     {/* Google Web Font */}
    <link
        href="http://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic"
        rel="stylesheet"
        type="text/css"
    />
    {/* jQuary library */}
    {/* <Script src="https://code.jquery.com/jquery-3.6.0.min.js"  ></Script> */}
    
    {/* style for headings*/}
    <link href="css/style-headings.css" rel="stylesheet" />
    {/* Bootstrap CSS */}
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    {/* Template CSS */}
    <link href="css/style.css" rel="stylesheet" />
 


</Head>
    <Layout>
    <>
  {/* BEGIN HOME SLIDER SECTION */}
  <div
    id="carousel-example-generic"
    className="carousel slide"
    data-ride="carousel"
  >
    {/* Indicators 
		  <ol class="carousel-indicators">
		    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
		    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
		  </ol> */}
    {/* Wrapper for slides */}
    <div className="carousel-inner" role="listbox">
      <div
        className="item active"
        id="slide1"
        style={{
          background: "url(http://placehold.it/1920x605) no-repeat left center",
          backgroundSize: "cover"
        }}
      >
        {" "}
        {/* Ready for JS Injection */}
        <div className="carousel-caption">
          <div className="caption sfr slider-title">Breathtaking views</div>
          <div className="caption sfl slider-subtitle">
            Relaxation in the Bay of Belfalas
          </div>
          <a href="#" className="caption sfb btn btn-default btn-lg">
            Learn More
          </a>
        </div>
      </div>
      <div
        className="item"
        id="slide2"
        style={{
          background: "url(http://placehold.it/1920x605) no-repeat left center",
          backgroundSize: "cover"
        }}
      >
        <div className="carousel-caption">
          <div className="caption sfr slider-title">The simple life</div>
          <div className="caption sfl slider-subtitle">
            Lush gardens in Mordor
          </div>
          <a href="#" className="caption sfb btn btn-default btn-lg">
            Learn More
          </a>
        </div>
      </div>
    </div>
    {/* Blue Filter */}
    <div id="home-search-section" />
    {/* Controls */}
    <a
      className="left carousel-control"
      href="#carousel-example-generic"
      role="button"
      data-slide="prev"
    >
      <span className="glyphicon glyphicon-chevron-left" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="right carousel-control"
      href="#carousel-example-generic"
      role="button"
      data-slide="next"
    >
      <span className="glyphicon glyphicon-chevron-right" />
      <span className="sr-only">Next</span>
    </a>
  </div>
  {/* END HOME SLIDER SECTION */}
  {/* BEGIN HOME ADVANCED SEARCH */}
  <div id="home-advanced-search" className="open">
    <div id="opensearch" />
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <div className="form-control-small">
                <div
                  className="input-group date chzn-container"
                  data-datepicker=""
                >
                  <input
                    placeholder="Arrive on..."
                    type="text"
                    className="form-control"
                    data-date-format="DD/MM/YYYY"
                  />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar" />
                  </span>
                </div>
              </div>
              <div className="form-control-small">
                <select
                  id="search_status"
                  name="search_status"
                  data-placeholder="Stay..."
                >
                  <option value="">...</option>
                  <option value={1}>1 Night</option>
                  <option value={2}>2 Nights</option>
                  <option value={3}>3 Nights</option>
                  <option value={4}>4 Nights</option>
                  <option value={5}>5 Nights</option>
                  <option value={6}>6 Nights</option>
                  <option value={7}>7 Nights</option>
                  <option value={8}>8 Nights</option>
                  <option value={9}>9 Nights</option>
                  <option value={10}>10 Nights</option>
                  <option value={11}>11 Nights</option>
                  <option value={12}>12 Nights</option>
                  <option value={13}>13 Nights</option>
                  <option value={14}>14 Nights</option>
                </select>
              </div>
              <div className="form-control-small">
                <select
                  id="search_bedrooms"
                  name="search_bedrooms"
                  data-placeholder="Bedrooms"
                >
                  <option value="">...</option>
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value="5plus">5+</option>
                </select>
              </div>
              <div className="form-control-large">
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="City, State, Country, etc..."
                />
              </div>
              <button type="submit" className="btn btn-fullcolor">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* END HOME ADVANCED SEARCH */}
  {/* BEGIN CONTENT WRAPPER */}
  <div className="content">
    <div className="container">
      <div className="row">
        {/* BEGIN MAIN CONTENT */}
        <div className="main col-sm-8">
          <h1 className="section-title">Featured Properties</h1>
          <div className="grid-style1 clearfix">
            <div className="item col-md-4">
              <div className="image">
                <a href="properties-detail.html">
                  <h2>Luxury Apartment with great views</h2>
                  <span className="location">Upper East Side, New York</span>
                </a>
                <img src="http://placehold.it/760x670" alt="" />
              </div>
              <div className="price">
                <span>$950</span>
                <p>per night</p>
              </div>
              <ul className="amenities">
                <li>
                  <i className="icon-bedrooms" /> 4
                </li>
                <li>
                  <i className="icon-bathrooms" /> 3
                </li>
              </ul>
            </div>
            <div className="item col-md-4">
              <div className="image">
                <a href="properties-detail.html">
                  <h2>Stunning Villa with 5 bedrooms</h2>
                  <span className="location">Miami Beach, Florida</span>
                </a>
                <img src="http://placehold.it/760x670" alt="" />
              </div>
              <div className="price">
                <span>$1,300</span>
                <p>per night</p>
              </div>
              <ul className="amenities">
                <li>
                  <i className="icon-bedrooms" /> 5
                </li>
                <li>
                  <i className="icon-bathrooms" /> 2
                </li>
              </ul>
            </div>
            <div className="item col-md-4">
              <div className="image">
                <a href="properties-detail.html">
                  <h2>Recent construction with 3 bedrooms</h2>
                  <span className="location">Park Slope, New York</span>
                </a>
                <img src="http://placehold.it/760x670" alt="" />
              </div>
              <div className="price">
                <span>$560</span>
                <p>per night</p>
              </div>
              <ul className="amenities">
                <li>
                  <i className="icon-bedrooms" /> 3
                </li>
                <li>
                  <i className="icon-bathrooms" /> 2
                </li>
              </ul>
            </div>
            <div className="item col-md-4">
              <div className="image">
                <a href="properties-detail.html">
                  <h2>Modern construction with parking space</h2>
                  <span className="location">Midtown, New York</span>
                </a>
                <img src="http://placehold.it/760x670" alt="" />
              </div>
              <div className="price">
                <span>$85</span>
                <p>per night</p>
              </div>
              <ul className="amenities">
                <li>
                  <i className="icon-bedrooms" /> 1
                </li>
                <li>
                  <i className="icon-bathrooms" /> 2
                </li>
              </ul>
            </div>
            <div className="item col-md-4">
              <div className="image">
                <a href="properties-detail.html">
                  <h2>Single Family Townhouse</h2>
                  <span className="location">Cobble Hill, New York</span>
                </a>
                <img src="http://placehold.it/760x670" alt="" />
              </div>
              <div className="price">
                <span>$840</span>
                <p>per night</p>
              </div>
              <ul className="amenities">
                <li>
                  <i className="icon-bedrooms" /> 2
                </li>
                <li>
                  <i className="icon-bathrooms" /> 2
                </li>
              </ul>
            </div>
            <div className="item col-md-4">
              <div className="image">
                <a href="properties-detail.html">
                  <h2>3 bedroom villa with garage for rent</h2>
                  <span className="location">Bal Harbour, Florida</span>
                </a>
                <img src="http://placehold.it/760x670" alt="" />
              </div>
              <div className="price">
                <span>$150</span>
                <p>per night</p>
              </div>
              <ul className="amenities">
                <li>
                  <i className="icon-bedrooms" /> 3
                </li>
                <li>
                  <i className="icon-bathrooms" /> 2
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="section-title">Popular Regions</h1>
              <div id="regions">
                <div className="item">
                  <a href="#">
                    <img src="http://placehold.it/194x194" alt="" />
                    <h2 className='h2-popular-regions-elements'>Rhovanion</h2>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="http://placehold.it/194x194" alt="" />
                    <h2 className='h2-popular-regions-elements'>Eriador</h2>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="http://placehold.it/194x194" alt="" />
                    <h2 className='h2-popular-regions-elements'>Bay of Belfalas</h2>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="http://placehold.it/194x194" alt="" />
                    <h2 className='h2-popular-regions-elements'>Mordor</h2>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="http://placehold.it/194x194" alt="" />
                    <h2 className='h2-popular-regions-elements'>The Southwest</h2>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="http://placehold.it/194x194" alt="" />
                    <h2 className='h2-popular-regions-elements'>Arnor</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h1 className="section-title">Recent Articles</h1>
          <div className="grid-style1">
            <div className="item col-md-4">
              <div className="image">
                <a href="#">
                  <span className="btn btn-default">
                    <i className="fa fa-file-o" /> Read More
                  </span>
                </a>
                <img src="http://placehold.it/766x515" alt="" />
              </div>
              <div className="tag">
                <i className="fa fa-file-text" />
              </div>
              <div className="info-blog">
                <ul className="top-info">
                  <li>
                    <i className="fa fa-calendar" /> July 30, 2014
                  </li>
                  <li>
                    <i className="fa fa-comments-o" /> 2
                  </li>
                  <li>
                    <i className="fa fa-tags" /> Properties, Prices, best deals
                  </li>
                </ul>
                <h2>
                  <a href="#">
                    How to get your dream property for the best price?
                  </a>
                </h2>
                <p>
                  Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                  mauris ac pellentesque fringilla, tortor libero condimen.
                </p>
              </div>
            </div>
            <div className="item col-md-4">
              <div className="image">
                <a href="#">
                  <span className="btn btn-default">
                    <i className="fa fa-file-o" /> Read More
                  </span>
                </a>
                <img src="http://placehold.it/766x515" alt="" />
              </div>
              <div className="tag">
                <i className="fa fa-film" />
              </div>
              <div className="info-blog">
                <ul className="top-info">
                  <li>
                    <i className="fa fa-calendar" /> July 24, 2014
                  </li>
                  <li>
                    <i className="fa fa-comments-o" /> 4
                  </li>
                  <li>
                    <i className="fa fa-tags" /> Tips, Mortgage
                  </li>
                </ul>
                <h2>
                  <a href="#">7 tips to get the best mortgage.</a>
                </h2>
                <p>
                  Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                  mauris ac pellentesque fringilla, tortor libero condimen.
                </p>
              </div>
            </div>
            <div className="item col-md-4">
              <div className="image">
                <a href="#">
                  <span className="btn btn-default">
                    <i className="fa fa-file-o" /> Read More
                  </span>
                </a>
                <img src="http://placehold.it/766x515" alt="" />
              </div>
              <div className="tag">
                <i className="fa fa-file-text" />
              </div>
              <div className="info-blog">
                <ul className="top-info">
                  <li>
                    <i className="fa fa-calendar" /> July 05, 2014
                  </li>
                  <li>
                    <i className="fa fa-comments-o" /> 1
                  </li>
                  <li>
                    <i className="fa fa-tags" /> Location, Price, House
                  </li>
                </ul>
                <h2>
                  <a href="#">
                    House, location or price: What's the most important factor?
                  </a>
                </h2>
                <p>
                  Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                  mauris ac pellentesque fringilla, tortor libero condimen.
                </p>
              </div>
            </div>
          </div>
          <div className="center">
            <a href="#" className="btn btn-default-color">
              View All News
            </a>
          </div>
        </div>
        {/* END MAIN CONTENT */}
        {/* BEGIN SIDEBAR */}
        <div className="sidebar col-sm-4">
          {/* BEGIN SIDEBAR ABOUT */}
          <div className="col-sm-12">
            <h2 className="section-title">Last minute deals</h2>
            <ul className="latest-news">
            
              <li className="col-md-12">
                {/*Linked page*/}
              <Link href="/blog">
                <div className="image">
                  <img alt="beach house" src="images/beach-house-200px.jpg" /> {/*source:https://www.yourhomeandgarden.co.nz/property/featured-property/incredible-home-for-sale-private-beach-access-lush-gardens*/}
                </div>
                </Link>
                <ul className="top-info">
                  <li>
                    <i className="fa fa-calendar" />
                    Available Now
                  </li>
                </ul>
                <Link href="/blog">
              
                  
                  <p>Private Beach</p>
                  <p>Lossarnach, Eriado</p>
                
                </Link>
              </li>
             
              <li className="col-md-12">
                <div className="image">
                  <a href="blog-detail.html" />
                  <img alt="" src="http://placehold.it/100x100" />
                </div>
                <ul className="top-info">
                  <li>
                    <i className="fa fa-calendar" />
                    Available on 24 July
                  </li>
                </ul>
                
                  <a href="blog-detail.html">Mountain views</a>
                  <p>Hyarnustar, Rhovanion</p>
                
              </li>
              <li className="col-md-12">
                <div className="image">
                  <a href="blog-detail.html" />
                  <img alt="" src="http://placehold.it/100x100" />
                </div>
                <ul className="top-info">
                  <li>
                    <i className="fa fa-calendar" />
                    Available 5 July
                  </li>
                </ul>
                
                  <a href="blog-detail.html">Heart of the village</a>
                  <p>Minhiriath, Eriador</p>
                
              </li>
              <li className="col-md-12">
                <div className="image">
                  <a href="blog-detail.html" />
                  <img alt="" src="http://placehold.it/100x100" />
                </div>
                <ul className="top-info">
                  <li>
                    <i className="fa fa-calendar" />
                    Available 6 July
                  </li>
                </ul>
                
                  <a href="blog-detail.html">The city life</a>
                  <p>West Beleriand, Mordor</p>
              
              </li>
            </ul>
            <p className="center">
              <a className="btn btn-fullcolor" href="#">
                More deals
              </a>
            </p>
          </div>
          {/* END SIDEBAR ABOUT */}
          <div className="col-sm-12">
            <h2 className="section-title">Activity</h2>
            <ul className="activity">
              <li className="col-lg-12">
                <a href="#">
                  <img src="http://placehold.it/70x70" alt="" />
                </a>
                <div className="info">
                  <h3>
                    Sam Minnée reviewed{" "}
                    <a href="#">The House With No Windows</a>
                  </h3>
                  <p>Awesome solitary confinement, mate. Spot on. Sweet as.</p>
                  <h4>Just now</h4>
                </div>
              </li>
              <li className="col-lg-12">
                <a href="#">
                  <img src="http://placehold.it/70x70" alt="" />
                </a>
                <div className="info">
                  <h3>
                    Ingo Schoomer asked a question about{" "}
                    <a href="#">The Mistake by the Lake</a>
                  </h3>
                  <p>Has this house been unit tested?</p>
                  <h4>37 minutes ago</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* END SIDEBAR */}
      </div>
    </div>
  </div>
  {/* END CONTENT WRAPPER */}
</>

    
 

    </Layout>
    
          <Script src="js/common.js" strategy="lazyOnload"></Script>
	        <Script src="js/common/jquery-1.11.1.min.js" strategy="lazyOnload"></Script>
	        <Script src="js/common/bootstrap.min.js" strategy="lazyOnload"></Script>
	        <Script src="js/common/bootstrap-datepicker.js" strategy="lazyOnload"></Script>
	        <Script src="js/common/chosen.min.js" strategy="lazyOnload" ></Script>
	        <Script src="js/common/bootstrap-checkbox.js" strategy="lazyOnload"></Script>
	        <Script src="js/common/nice-scroll.js" strategy="lazyOnload" ></Script>
	        <Script src="js/common/jquery-browser.js" strategy="lazyOnload"></Script>
	        <Script src="js/scripts.js " strategy="lazyOnload" ></Script>

    </>

  );
}
