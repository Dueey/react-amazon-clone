import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_1x-1500x600._CB661646560_.jpg'
          alt='home_img_1'
        />
      </Wrap>
      <Wrap>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt='home_img_2'
        />
      </Wrap>
      <Wrap>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-YTRiMTc0YmMt-w1500._CB669820426_.jpg'
          alt='home_img_3'
        />
      </Wrap>
      <Wrap>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/SWSpringDeal_DMUX-4280/Gateway/DV4/US-EN_030821_SpringSitewide_ACQ_GW_Hero_D_1500x600_CV40._CB656151158_.jpg'
          alt='home_img_4'
        />
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-bottom: -350px;
  max-width: 1500px;
  width: 100%;
  z-index: 1;

  & > button {
    opacity: 1;
    width: 5vw;
    z-index: 2;
    color: #000;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  /* ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  } */

  /* li.slick-active button:before {
    color: white;
  } */

  /* .slick-list {
    overflow: initial;
  } */

  .slick-prev {
    top: 130px;
  }

  .slick-next {
    top: 130px;
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
    & > button {
      opacity: 0;
    }
  }

  @media (min-width: 769px) and (max-width: 1400px) {
    margin-bottom: -20%;
  }
`;

const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    z-index: -1;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
  }

  @media (max-width: 768px) {
    img {
      mask-image: none;
    }
  }
`;

export default ImgSlider;
