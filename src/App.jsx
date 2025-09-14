import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import Account from "./Account";
import Settings from "./Settings"; // ✅ new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} /> {/* ✅ new route */}
        <Route path="*" element={<h1 className="text-center mt-10 text-red-600">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
