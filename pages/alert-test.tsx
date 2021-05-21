import React from "react";
import Button from "@components/atoms/Button";
import Main from "@components/atoms/Main";
import Section from "@components/atoms/Section";
import FunctionalAlert from "@components/templates/FunctionalAlert";
import Container from "@components/templates/Container";

const Page = () => {
  return (
    <Container>
      <Main>
        <Section>
          <Button
            onClick={() =>
              FunctionalAlert.open("안녕하세요?", { title: "반가워요" })
            }
          >
            눌러봅시다.
          </Button>
        </Section>
      </Main>
    </Container>
  );
};

export default Page;
