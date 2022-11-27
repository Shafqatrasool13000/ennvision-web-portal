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

        <Route path="editPhone" element={<EditPhone />} />

        <Route path="find-home" element={<FindHome />} />
        <Route path="property-details/:id" element={<PropertyDetails />} />
        <Route path="become-professional" element={<BecomeProfessional />} />

        <Route path="create-post" element={<CreatePost />} />
        <Route path="create-post-1" element={<CreatePost1 />} />
        <Route path="create-post-2" element={<CreatePost2 />} />
        <Route path="create-post-3" element={<CreatePost3 />} />
        <Route path="create-post-4" element={<CreatePost4 />} />

        <Route path="confirmed" element={<Confirmed />} />

        <Route path="post-list" element={<PostList />} />

        <Route path="find-professionals" element={<FindProfessionals />} />

        <Route
          path="professional-profile/:id"
          element={<ProfessionalProfile />}
        />

        <Route path="property" element={<ListAProperty />}>
          <Route index element={<CreateProperty />} />
        </Route>
        <Route path="create-property-1" element={<CreateProperty1 />} />
        <Route path="create-property-2" element={<CreateProperty2 />} />
        <Route path="bill-info" element={<PaymentInfo />} />
        <Route path="property-info" element={<PropertyInfo />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
