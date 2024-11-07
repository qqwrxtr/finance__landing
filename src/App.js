import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/Pages/Privacy_Policy/Privacy_Policy";
import TermsConditions from "./components/Pages/TermsConditions/Terms";
import ContactUs from "./components/Pages/Contact_Us/Contact_Us";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
