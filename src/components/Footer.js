import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Wrap>
        <div>
          <span>Get to Know us</span>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Sustainability</p>
          <p>Press Center</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Tours</p>
        </div>
        <div>
          <span>Make Money with Us</span>
          <p>Sell products on Amazon</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Start a package delivery business</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hub</p>
          <p>See More Make Money with Us</p>
        </div>
        <div>
          <span>Amazon Payment Products</span>
          <p>Amazon Rewards Visa Signature Cards</p>
          <p>Amazon.com Store Card</p>
          <p>Amazon Secured Card</p>
          <p>Amazon Business Card</p>
          <p>Amazon Business Line of Credit</p>
          <p>Shop with Points</p>
          <p>Credit Card Marketplace</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div>
          <span>Let Us Help You</span>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Amazon Prime</p>
          <p>Returns & Replacements</p>
          <p>Manage your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </Wrap>
      <Logo>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='logo'
        />
      </Logo>
    </Container>
  );
}

const Container = styled.div`
  height: 510px;
  background-color: #131a22;
`;

const Wrap = styled.div`
  padding-top: 70px;
  padding-left: 120px;
  display: flex;
  justify-content: center;
  div {
    padding: 0px 70px 70px 10px;
    color: #fff;
    span {
      font-weight: 700;
      font-size: 15px;
      margin-bottom: 30px;
    }
    p {
      font-size: 14px;
      color: lightgray;
      padding: 5px;
    }
  }
`;

const Logo = styled.div`
  padding: 35px;
  display: flex;
  background-color: #131a22;
  justify-content: center;
  border-top: 1px solid #38506b;

  img {
    height: 30px;
  }
`;

export default Footer;
