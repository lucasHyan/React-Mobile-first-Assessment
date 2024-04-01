import "./App.css";
import { AppBar } from "./layout/AppBar/AppBar";
import { HomePage } from "./pages/HomePage";
import { Banner } from "./layout/Banner";
import { ContentCards } from "./layout/ContentCards";
import { SiteDescription } from "./layout/SiteDescription";
import { Footer } from "./layout/Footer";
function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <HomePage />
      <ContentCards />
      <SiteDescription />
      <Footer />
    </>
  );
}

export default App;
