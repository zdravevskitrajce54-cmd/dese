"use client"
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const Instagram2 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 5,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const instagramContent = [
        {img:'/assets/img/instagram/01.jpg'},                         
        {img:'/assets/img/instagram/02.jpg'},                         
        {img:'/assets/img/instagram/03.jpg'},                         
        {img:'/assets/img/instagram/04.jpg'},                         
        {img:'/assets/img/instagram/05.jpg'},                         
        {img:'/assets/img/instagram/06.jpg'},                         
      ]; 

    return (
<div className="instagram-banner fix section-padding">
            <div className="instagram-wrapper">
                <h2 className="text-center wow fadeInUp" data-wow-delay=".3s">Follow Instagram</h2>
                <div className="swiper instagram-banner-slider">
                    <div className="swiper-wrapper cs_slider_gap_301">
                    <Slider {...settings}>
                    {instagramContent.map((item, i) => (
                        <div key={i} className="swiper-slide">
                            <div className="instagram-banner-items">
                                <div className="banner-image">
                                  <Image src={item.img} alt="img" width={270} height={230}   />
                                    <a href="#" className="icon">
                                    <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                         ))}
                        </Slider>                       
 

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Instagram2;