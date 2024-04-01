import "../App.css";
import { AppBar } from "../layout/AppBar/AppBar";
import { Banner } from "../layout/Banner";
import { SecondBanner } from "../layout/SecondBanner";
import { ContentCards } from "../layout/ContentCards";
import { SiteDescription } from "../layout/SiteDescription";
import { Footer } from "../layout/Footer";

export function HomePage() {
  return (
    <>
      <AppBar />
      <Banner />
      <ContentCards />
      <SiteDescription />
      <SecondBanner imageUrl="https://source.unsplash.com/random/369x273" />
      <Footer />
    </>
  );
}