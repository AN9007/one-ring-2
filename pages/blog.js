import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Script from 'next/script';
import Link from 'next/link';


export default function FirstPost() {
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
    <Script src="https://code.jquery.com/jquery-3.6.0.min.js"  ></Script>
    
    {/* Bootstrap CSS */}
    <link href="./css/bootstrap.min.css" rel="stylesheet" />
     {/* style for headings*/}
     <link href="css/style-headings.css" rel="stylesheet" />
    {/* Template CSS */}
    <link href="./css/style.css" rel="stylesheet" />
    {/* blog CSS */}
    <link href="./css/style-blog.css" rel="stylesheet" />
    {/* Modernizr */}
    <Script src="./js/common/modernizr.js"  ></Script>


</Head>
    
    <Layout>
    <div className='cont-blog'>
      <div className='img-cont'>
      <img src="images/beach-house.jpg" alt="beach house" className='img-beach-house'/> {/*source:https://www.yourhomeandgarden.co.nz/property/featured-property/incredible-home-for-sale-private-beach-access-lush-gardens*/}
      </div>
    
      <div id='title-blog'>
      <h1 id='title-house'> Private Beach - Lossarnach, Eriado</h1>
      <div className='list-features'>
      <strong> 4 bedrooms </strong> <strong> 2 baths</strong> <strong>3 car space</strong> <strong>856m²</strong> <strong>House</strong>
      </div>
      <div className='line-division'></div>
    
      <p id='text-blog'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo eros nibh, et dictum elit tincidunt eget. Pellentesque volutpat quam dignissim, convallis elit id, efficitur sem. Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida pellentesque nec at metus.</p>

      </div>
    </div>
    
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