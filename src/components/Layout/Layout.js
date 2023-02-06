import { Header } from "../Header";
import { Footer } from "../Footer";
import "../../style/App.css";

export function Layout({ children }) {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
