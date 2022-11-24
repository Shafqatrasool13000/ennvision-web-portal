import { useEffect } from "react";
import "./App.css";
import scroll_up from "./assets/icons/ic_scroll_to_top .svg";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Screens/Home/Index";
import "react-alice-carousel/lib/alice-carousel.css";
import FindHome from "./Screens/FindHome/Index";
import PropertyDetails from "./Screens/PropertyDetails/Index";
import FindProfessionals from "./Screens/FindProfessionals/Index";
import ListAProperty from "./Screens/ListAProperty/Index";
import Resources from "./Screens/Resources/Index";
import Error from "./Components/Error/Error";

import ListProperty1 from "./Screens/PropertyList/ListProperty1/Index";
import ListProperty2 from "./Screens/PropertyList/ListProperty2/Index";
import ListProperty3 from "./Screens/PropertyList/ListProperty3/Index";

import PaymentInfo from "./Screens/BillSummary/Index";
import PropertyInfo from "./Screens/PropertyInfo/Index";

function App() {
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  };

  useEffect(() => {
    clearCacheData();
  }, []);

  return (
    <>
      <ToastContainer />
      <span className="arrow-box">
        <img src={scroll_up} alt="scroll-up" />
      </span>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="find-home" element={<FindHome />} />
        <Route path="property-details/:id" element={<PropertyDetails />} />
        <Route path="find-professionals" element={<FindProfessionals />} />
        <Route path="property" element={<ListAProperty />}>
          <Route index element={<ListProperty1 />} />
          <Route path="list-1" element={<ListProperty2 />} />
          <Route path="list-2" element={<ListProperty3 />} />
          <Route path="bill-info" element={<PaymentInfo />} />
          <Route path="property-info" element={<PropertyInfo />} />
        </Route>
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
