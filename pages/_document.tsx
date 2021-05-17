import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#0050ff"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link rel="canonical" href="https://superposition.link" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:image" content="/social/og-image.jpg" />
          <meta property="og:image:height" content="262" />
          <meta property="og:image:width" content="500" />
          <meta property="og:title" content="개발자 오제관입니다 😄" />
          <meta property="og:url" content="https://superposition.link" />
          <meta
            property="og:description"
            content="비즈니스와 유저를 이해하고 소통이 잘 되는 개발자 오제관입니다."
          />
          <meta
            name="description"
            content="비즈니스와 유저를 이해하고 소통이 잘 되는 개발자 오제관입니다."
          />
          <meta name="keywords" content="개발자,오제관,자기소개서" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
