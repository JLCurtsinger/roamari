import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { JobApplication } from "./pages/JobApplication";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/job-application" element={<JobApplication />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;