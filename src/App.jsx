import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
// import Testimonials from './components/Testimonials';
import Artists from './components/Artists';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import RecentBookings from './components/RecentBookings';
import PrivacyPolicy from './components/Privacypolicy';
import Disclaimer from './components/Disclaimer';
import TermsConditions from './components/Terms&condn';
import RefundPolicy from './components/Refundpolicy';
import Accountdeletion from './components/Accountdeletion';


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero />
            <Services />
            <ServiceDetails />
            {/* <Testimonials /> */}
            <Artists />
            <RecentBookings />
            <Footer />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Header />
            <Aboutus />
            <Footer />
          </>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <Header />
            <Contact />
            <Footer />
          </>
        }
      />

      <Route
        path="/privacy-policy"
        element={
          <>
            <Header />
            <PrivacyPolicy />
            <Footer />
          </>
        }
      />

{/* 
            <Route
        path="/disclaimer"
        element={
          <>
            <Header />
            <Disclaimer />
            <Footer />
          </>
        }
      /> */}



            <Route
        path="/terms-conditions"
        element={
          <>
            <Header />
            <TermsConditions />
            <Footer />
          </>
        }
      />


            <Route
        path="/refund-policy"
        element={
          <>
            <Header />
            <RefundPolicy />
            <Footer />
          </>
        }
      />

        <Route
        path="/account-deletion"
        element={
          <>
            <Header />
            <Accountdeletion />
            <Footer />
          </>
        }
      />

    </Routes>
  );
}

export default App;