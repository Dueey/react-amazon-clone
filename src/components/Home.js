import React from "react";
import "./Home.css";
import Product from "./Product";
import ImgSlider from "./ImgSlider";
import AddNotification from "./AddNotification";

export default function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <ImgSlider className='home_img' />
        <div className='home_row'>
          <Product
            id='12321341'
            title='Samsung Galaxy Buds+ Plus, True Wireless Earbuds (Wireless Charging Case Included), Black – US Version'
            price={99.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/317K8jUbSyL._AC_SY240_.jpg'
          />
          <Product
            id='49538094'
            title='ProSupps® Mr. Hyde® Xtreme (Former NitroX) Pre-Workout Powder Energy Drink - Intense Sustained Energy, Pumps & Focus with Beta Alanine, Creatine & Nitrosigine, (30 Servings, Pixie Dust)'
            price={29.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/91QNH9iNWZS._AC_UL320_.jpg'
          />
        </div>

        <div className='home_row'>
          <Product
            id='4903850'
            title='MSI GeForce RTX 2080 Super Gaming x Trio Graphic Card - 8GB GDDR6'
            price={880.99}
            rating={5}
            image='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQkCWBkVmjFFMuclOBBW6g81br7rBy3WEJSULQQiCcyeWXJ5pV2kq5uxlya1gcogpLmKxMkIKDBxTpaZwR26kKhVmEnw8xRMHPrHMG0KDZ6sdtgmpJ5IKHyvg&usqp=CAE'
          />
          <Product
            id='23445930'
            title='Intel Core i9-9900K Desktop Processor 8 Cores up to 5.0 GHz Turbo Unlocked LGA1151 300 Series 95W'
            price={405.0}
            rating={5}
            image='https://m.media-amazon.com/images/I/61qUfPKfqJL._AC_UY218_.jpg'
          />
          <Product
            id='3254354345'
            title='Star Wars - This is Not A Toy - 1000 Piece Jigsaw Puzzle'
            price={10.97}
            rating={5}
            image='https://m.media-amazon.com/images/I/81GDVD2dvoL._AC_UY218_.jpg'
          />
        </div>

        <div className='home_row'>
          <Product
            id='90829332'
            title='Acer Nitro VG240Y bmiix 23.8in Full HD (1920 x 1080) IPS Monitor with AMD Radeon FREESYNC Technology - 1ms VRB | 75Hz Refresh | (2 x HDMI Ports & 1 x VGA),Black'
            price={168.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/71JPEEGxpWL._AC_UY218_.jpg'
          />
          <Product
            id='20829789'
            title='TAMASHII NATIONS Rx-0 Unicorn Gundam Unit 02 Banshee Mobile Suit Gundam UC, Multi'
            price={39.81}
            rating={5}
            image='https://m.media-amazon.com/images/I/81OseJi1WiL._AC_UL320_.jpg'
          />
        </div>

        <div className='home_row'>
          <Product
            id='4903850'
            title='Wacom Bamboo Splash Pen Tablet (CTL471)'
            price={149.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/31GTc+SjQmL._AC_UY218_.jpg'
          />
          <Product
            id='23445930'
            title='Optimum Nutrition Gold Standard 100% Whey, Double Rich Chocolate, 7.64 lb (3.47 kg)'
            price={79.95}
            rating={5}
            image='https://m.media-amazon.com/images/I/81ameR4JOXL._AC_UL320_.jpg'
          />
          <Product
            id='3254354345'
            title='Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release'
            price={29.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/51Da2Z+FTFL._AC_UY218_.jpg'
          />
        </div>
        <AddNotification />
      </div>
    </div>
  );
}
