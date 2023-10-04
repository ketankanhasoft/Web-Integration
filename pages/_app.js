import "../styles/style.css";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import { Provider } from "react-redux";
import store from "../store/store";

// app file - manage redux and layout of system
export default function MyApp({ Component, pageProps }) {
  
  // return jsx
  return (
    <Provider store={store}>
      <div>
        <Topbar />
        <div className="mainsection">
          <Sidebar />
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}
