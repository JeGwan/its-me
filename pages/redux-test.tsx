import React from "react";
import Button from "@components/atoms/Button";
import Main from "@components/atoms/Main";
import Section from "@components/atoms/Section";
import Container from "@components/templates/Container";
import store, { useStore } from "@lib/store";

const Page = () => {
  return (
    <Container>
      <Main>
        <Section>
          {/* <div>count : {store.getState().count}</div>
          <Button
            onClick={() => store.dispatch({ type: AppActionType.INCREMENT })}
          >
            더하기
          </Button>
          <Button
            onClick={() => store.dispatch({ type: AppActionType.DECREMENT })}
          >
            빼기
          </Button> */}
        </Section>
      </Main>
    </Container>
  );
};

export default Page;
