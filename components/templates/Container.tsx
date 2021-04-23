import Head from "next/head";
import { CSSProperties, HTMLAttributes, ReactNode, useContext } from "react";
import { AppContext } from "@lib/context";
import styled from "styled-components";
import styleVariables from "@styles/variables";
import { APP_NAME } from "@lib/constants";

const ContainerComp = styled.div`
  /* min-height: 100vh; */
  & > header {
    & > nav {
    }
  }
  & > main {
    min-height: 100vh;
    padding: ${styleVariables.ui.defaultPadding}px;
    & > section {
      /* 모바일 퍼스트 */
      max-width: ${styleVariables.media.mobile}px;
      margin: 0 auto;
    }
    & > footer {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
`;
interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  headerTitle?: string;
  header?: ReactNode;
  mainStyle?: CSSProperties;
  loading?: boolean;
  loginNeed?: boolean;
  footer?: ReactNode;
}
const Container = ({
  title,
  headerTitle,
  children,
  header,
  mainStyle = {},
  loading = false,
  loginNeed = false,
  footer,
  ...rest
}: Props) => {
  const { me } = useContext(AppContext);
  return (
    <ContainerComp {...rest}>
      <Head>
        <title>{title ? `${title} : ${APP_NAME}` : APP_NAME}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
      </Head>
      <header>
        <nav></nav>
      </header>
      <main>
        <section>{children}</section>
        <footer>{footer}</footer>
      </main>
    </ContainerComp>
  );
};

export default Container;
