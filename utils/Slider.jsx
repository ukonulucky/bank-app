import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


export default class SliderComponent extends Component {
imageList = [
  {
    id:1,
    url:"https://www.shutterstock.com/shutterstock/photos/1829205563/display_1500/stock-photo-fresh-homemade-italian-pizza-margherita-with-buffalo-mozzarella-and-basil-1829205563.jpg"
  },
  {
    id:2,
    url:"https://www.shutterstock.com/shutterstock/photos/1795725157/display_1500/stock-photo-classic-pizza-with-cheese-on-the-table-in-a-cafe-on-a-wooden-stand-with-a-cut-triangular-piece-and-1795725157.jpg"
  },
  {
    id:3,
    url:"https://www.shutterstock.com/image-vector/pepperoni-pizza-ads-delicious-ingredients-600w-1427946764.jpg"
  },
  {
    id:4,
    url:"https://www.shutterstock.com/shutterstock/photos/1048511935/display_1500/stock-photo-flatbread-pizza-garnished-with-fresh-arugula-on-wooden-pizza-board-top-view-dark-stone-background-1048511935.jpg"
  }
]

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      // speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      cssEase: "linear"
    };
    return (
      <div className="">
        <Slider {...settings}>
          {
            this.imageList.map(i => (
             <div key={i.id} className="relative w-screen  h-80 sm:h-screen ">
               <Image
               src={i.url} 
               layout="fill"
               objectFit="cover"
               />
             </div>
            ))
          }
          
          
        </Slider>
      </div>
    );
  }
}