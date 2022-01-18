import Head from "next/head";
import WhyTractian from "../components/whyTractian";
import Header from "../components/header";
import HowItWorks from "../components/howItWorks";
import NavBar from "../components/navbar";
import Presentation from "../components/presentation";
import Reviews from "../components/reviews";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          TRACTIAN | Monitoramento online de ativos e gestão da manutenção
        </title>
      </Head>
      <NavBar />
      <Header />
      <Presentation />
      <WhyTractian />
      <HowItWorks />
      <Reviews />
    </div>
  );
}
