import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { AppContextProvider } from "@lib/context";
import GlobalStyle from "@styles/GlobalStyle";

export default function App({ Component, pageProps }: any) {
  return (
    <AppContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
