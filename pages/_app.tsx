import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { AppContextProvider } from "@lib/context";
import GlobalStyle from "@styles/GlobalStyle";
import { useStore } from "@lib/store";
import { Provider as ReduxProvider } from "react-redux";

export default function App({ Component, pageProps }: any) {
  const store = useStore(pageProps?.initialReduxState);

  return (
    <ReduxProvider store={store}>
      <AppContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppContextProvider>
    </ReduxProvider>
  );
}
