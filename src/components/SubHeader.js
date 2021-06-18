import React, { useEffect } from "react";
import styled from "styled-components";
import { ViewList, ArrowDropDown } from "@material-ui/icons";

function SubHeader() {
  useEffect(() => {
    document
      .getElementById("subheader")
      .addEventListener("mousewheel", function (e) {
        e.preventDefault();
        if (e.deltaY > 0) {
          this.scrollLeft += 100;
        } else this.scrollLeft -= 100;
      });
  }, []);

  return (
    <Container id='subheader'>
      <Wrap>
        <ViewList className='viewList' />
        All
      </Wrap>
      <Wrap>Video Games</Wrap>
      <Wrap>
        Browsing History
        <ArrowDropDown className='arrowDropDown' />
      </Wrap>
      <Wrap>Outdoor Recreation</Wrap>
      <Wrap>Livestreams</Wrap>
      <Wrap>Buy Again</Wrap>
      <Wrap>Coupons</Wrap>
      <Wrap>Handmade</Wrap>
      <Wrap>Sports & Fitness</Wrap>
      <Wrap>Subscribe & Save</Wrap>
      <Wrap>Computers</Wrap>
      <Wrap>TV & Video</Wrap>
      <Wrap>Your Amazon.com</Wrap>
      <Wrap>Pet Supplies</Wrap>
      <Wrap>Amazon Basics</Wrap>
      <Wrap>Find a Gift</Wrap>
      <Wrap>Free Shipping</Wrap>
    </Container>
  );
}

const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background-color: #232f3e;
  position: sticky;
  top: 75px;
  z-index: 100;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 25px;
  /* overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  } */

  @media (max-width: 768px) {
    display: none;
  } ;
`;

const Wrap = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 11px;
  margin-bottom: 1px;
  border: 1px solid #232f3e;
  border-radius: 3px;
  cursor: pointer;

  .viewList {
    padding-right: 6px;
    margin-top: -6px;
    margin-bottom: -6px;
  }

  .arrowDropDown {
    margin-right: -8px;
    color: lightgray;
    margin-top: -6px;
    margin-bottom: -8px;
  }

  :hover {
    border: 1px solid white;
  }

  /* @media (max-width: 1900px) {
    font-size: 10px;
  } */
`;

export default SubHeader;
