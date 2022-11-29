import { useContext, useEffect } from "react";
import "./App.css";
import scroll_up from "./assets/icons/ic_scroll_to_top .svg";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Screens/Home/Index";
import "react-alice-carousel/lib/alice-carousel.css";
import FindHome from "./Screens/FindHome/Index";
import PropertyDetails from "./Screens/PropertyDetails/Index";
import FindProfessionals from "./Screens/FindProfessionals/Index";
import ParentComponent from "./Screens/ParentComponent/Index";
import Resources from "./Screens/Resources/Index";
import Error from "./Components/Error/Error";

import CreateProperty from "./Screens/CreateProperty/CreateProperty/Index";
import CreateProperty1 from "./Screens/CreateProperty/CreateProperty1/Index";
import CreateProperty2 from "./Screens/CreateProperty/CreateProperty2/Index";

import PaymentInfo from "./Screens/BillSummary/Index";
import PropertyInfo from "./Screens/PropertyInfo/Index";
import EditPhone from "./Screens/CreateProfessional/EditPhone";

import BecomeProfessional from "./Screens/BecomeProfessional/Index";

import CreatePost from "./Screens/CreatePost/CreatePost";
import CreatePost1 from "./Screens/CreatePost/CreatePost1";
import CreatePost2 from "./Screens/CreatePost/CreatePost2";
import CreatePost3 from "./Screens/CreatePost/CreatePost3";
import CreatePost4 from "./Screens/CreatePost/CreatePost4";

import PostList from "./Screens/CreatePost/Index";

import Confirmed from "./Components/Confirmed/Index";

import ProfessionalProfile from "./Screens/ProfessionalProfile/Index";
import PropertyParent from "./Screens/ParentComponent/PropertyParent";
import { ScrollContext } from "./utils/CreateContext";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  const { changeNavColor, scrollToTop } = useContext(ScrollContext);
  useScrollToTop();
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  };

  useEffect(() => {
    clearCacheData();
    // 👇️ scroll to top on page load
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ToastContainer />
      <span className={`arrow-box ${changeNavColor ? "d-block" : "d-none"}`}>
        <img onClick={scrollToTop} src={scroll_up} alt="scroll-up" />
      </span>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="editPhone" element={<EditPhone />} />

        <Route path="find-home" element={<FindHome />} />
        <Route path="property-details/:id" element={<PropertyDetails />} />
        <Route path="become-professional" element={<BecomeProfessional />} />

        <Route
          path="create-post"
          element={
            <ParentComponent>
              <CreatePost />
            </ParentComponent>
          }
        />
        <Route
          path="create-post-1"
          element={
            <ParentComponent>
              <CreatePost1 />
            </ParentComponent>
          }
        />
        <Route
          path="create-post-2"
          element={
            <ParentComponent>
              <CreatePost2 />
            </ParentComponent>
          }
        />
        <Route
          path="create-post-3"
          element={
            <ParentComponent>
              <CreatePost3 />
            </ParentComponent>
          }
        />
        <Route
          path="create-post-4"
          element={
            <ParentComponent>
              <CreatePost4 />
            </ParentComponent>
          }
        />

        <Route path="confirmed" element={<Confirmed />} />

        <Route path="post-list" element={<PostList />} />

        <Route path="find-professionals" element={<FindProfessionals />} />

        <Route
          path="professional-profile/:id"
          element={<ProfessionalProfile />}
        />

        <Route
          path="property"
          element={
            <PropertyParent>
              <CreateProperty />
            </PropertyParent>
          }
        />

        <Route
          path="create-property"
          element={
            <PropertyParent>
              <CreateProperty1 />
            </PropertyParent>
          }
        />
        <Route
          path="create-property-1"
          element={
            <PropertyParent>
              <CreateProperty2 />
            </PropertyParent>
          }
        />
        <Route
          path="bill-info"
          element={
            <PropertyParent>
              <PaymentInfo />
            </PropertyParent>
          }
        />
        <Route
          path="property-info"
          element={
            <PropertyParent>
              <PropertyInfo />
            </PropertyParent>
          }
        />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
