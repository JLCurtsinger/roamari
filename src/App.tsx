import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import ResetPassword from "./pages/ResetPassword";
import { StayDetails } from "./pages/StayDetails";
import { JobApplication } from "./pages/JobApplication";
import { DestinationDetails } from "./pages/DestinationDetails";
import { Footer } from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./i18n/config";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/stay-details/:id" element={<StayDetails />} />
        <Route path="/job-application" element={<JobApplication />} />
        <Route path="/destination-details/:id" element={<DestinationDetails />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;