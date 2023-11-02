import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head';

import Script from 'next/script';
import React from 'react';



export default function Layout({ children }) {

    return (
        <>
 
        
          
            <div id="wrapper">
                <Header/>
            
                <div>{children}</div>;

                <Footer/>

            </div>
     
         
        </>
    )
}