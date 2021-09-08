import React from 'react'
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className = 'home'>
            <div className="home__container">
                <img className = "home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" />
                <div className="home__row">
                    <Product id ="1" title = 'the lean startup' price = {29.99} image = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating = {5}/>
                    <Product id="2" title = 'Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)' price = {99.99} image = 'https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_UY327_FMwebp_QL65_.jpg' rating = {5}/>                    
                </div>
                <div className="home__row">
                    <Product id="3" title = 'boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0' price = {19.99} image = 'https://m.media-amazon.com/images/I/71ByNT34bfL._AC_UY327_FMwebp_QL65_.jpg' rating = {4}/>
                    <Product id="4" title = '2020 Apple iPad Air with A14 Bionic chip' price = {699.99} image = 'https://m.media-amazon.com/images/I/71dwvdUu72L._AC_UL480_FMwebp_QL65_.jpg' rating = {3}/>
                    <Product id="5" title = 'Mi 10000mAH Li-Polymer Power Bank 3i with 18W Fast Charging' price = {11.99} image = 'https://m.media-amazon.com/images/I/71Rcb9pnbEL._AC_UY327_FMwebp_QL65_.jpg' rating = {6}/>
                </div>
                <div className="home__row">
                    <Product id="6" title = 'iFFALCON 164 cm (65 inches) 4K Ultra HD Certified Android Smart QLED TV' price = {999.99} image = 'https://m.media-amazon.com/images/I/71pIvGSUUTS._AC_UY327_FMwebp_QL65_.jpg' rating = {2}/>
                </div>
            </div>
        </div>
    )
}

export default Home
