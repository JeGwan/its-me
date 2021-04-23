import Button from "@components/atoms/Button";
import Input from "@components/atoms/Input";
import Select from "@components/atoms/Select";
import Alert from "@components/templates/Alert";
import Container from "@components/templates/Container";
import { useState } from "react";
import styled from "styled-components";

const HomePageComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  & > * {
    margin-bottom: 1rem;
  }
`;
const HomePage = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <Container>
      <HomePageComp>
        <Alert
          title="😉 기본 알러트"
          visible={alertVisible}
          onClose={() => setAlertVisible(false)}
        >
          반가워용 !
        </Alert>
        <Input placeholder="기본 인풋" />
        <Button type="primary" onClick={() => setAlertVisible(true)}>
          Primary 버튼
        </Button>
        <Button>기본 버튼</Button>
        <Select placeholder="기본 셀렉트"></Select>
      </HomePageComp>
    </Container>
  );
};

export default HomePage;
