import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import your pages/components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* other routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;


