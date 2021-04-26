import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ReserveATable from "./components/ReserveATable";
import Services from "./components/Services";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ReserveATable />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
