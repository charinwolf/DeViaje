import styled from "@emotion/styled";
import { useState, useEffect } from "react";

// import Layout from "../components/Layout";
// import Row from "../components/prebuilt/Row";

const Container = styled.div`
  width: 475px;
  margin: 30px auto 0 auto;
  text-align: center;
  color: #fff;
`;

const Title = styled.div`
  font-size: 58px;
`;

const Message = styled.div`
  margin-top: 40px;
`;

export default () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });

  return (
    <div title="Success!">
      <Container>
        <Title>congrats!</Title>
        <Message>Stripe has successfully processed your payment</Message>
      </Container>
    </div>
  );
};