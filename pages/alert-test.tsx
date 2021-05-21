import React from "react";
import Button from "@components/atoms/Button";
import Main from "@components/atoms/Main";
import Section from "@components/atoms/Section";
import AppAlert from "@components/templates/AppAlert";
import Container from "@components/templates/Container";

const Page = () => {
  return (
    <Container>
      <Main>
        <Section>
          <Button
            onClick={() =>
              AppAlert.open({ title: "안녕하세요", message: "😀 반가워요" })
            }
          >
            눌러봅시다
          </Button>
          <Button
            onClick={() =>
              AppAlert.open({ title: "이건 또 다른거에여", message: "🤣" })
            }
          >
            다른 알러트
          </Button>
        </Section>
      </Main>
    </Container>
  );
};

export default Page;
