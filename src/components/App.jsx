import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/index.css";
import {
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";
import HomePage from "./HomePage";
import DetailsPage from "./DetailsPage";
import Navbar from "./NavbarMenu";
import AuthPage from "./AuthPage";
import CartPage from "./CartPage";
import AuthUtils from "../utils/AuthUtils";
import OrdersPage from "./OrdersPage";

function App() {
  const isSignedIn = AuthUtils.isUserSignedIn();

  if (!isSignedIn) {
    return <AuthPage />;
  }

  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
