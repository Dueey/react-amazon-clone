import React from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";

function AddNotification() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Container class='alert'>
      <span>Product added to cart!</span>
      <span class='close-btn'></span>
    </Container>
  );
}

const Container = styled.div``;

export default AddNotification;
