import { lazy, Suspense, memo } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";

const Home = lazy(() => import(`../pages/Home`));

const RouterComponent = () => {
  console.log("✅ Router rendered"); // helpful debug log
  return (
      <>
      <Styles />
      <Header />
      <Routes>
        <Route
          key="Home"
          path="/"
          element={<Home />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default memo(RouterComponent);
