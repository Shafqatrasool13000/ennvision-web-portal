import { Suspense, useContext, useEffect } from "react";
// import lazyLoad from "./LazyLoad";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { ContextApiData } from "./utils/CreateContext";
import scroll_up from "./assets/icons/ic_scroll_to_top .svg";
import useScrollToTop from "./hooks/useScrollToTop";
import Home from "./Screens/Home/Index";
import FindHome from "./Screens/FindHome/Index";
import PropertyDetails from "./Screens/PropertyDetails/Index";
import FindProfessionals from "./Screens/FindProfessionals/Index";
import ParentComponent from "./Screens/ParentComponent/Index";
import Resources from "./Screens/Resources/Index";
import Error from "./Components/404Page/404Page";

import CreateProperty from "./Screens/CreateProperty/CreateProperty/Index";
import CreateProperty1 from "./Screens/CreateProperty/CreateProperty1/Index";
import CreateProperty2 from "./Screens/CreateProperty/CreateProperty2/Index";

import PaymentInfo from "./Screens/BillSummary/Index";
import PropertyInfo from "./Screens/PropertyInfo/PropertyInfo";
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
import Login from "./Components/Login/Index";
import RegisterPhone from "./Components/RegisterPhone/Index";
import VerifyOtp from "./Screens/VerifyOtp/Index";
import Register from "./Components/Register/Index";
import UserProfile from "./Screens/UserProfile/Index";
import Homepage from "./Screens/Homepage/Index";
import ExploreNearby from "./Screens/ExploreNearby/Index";
import Story from "./Screens/Story/Index";
import MyProfile from "./Screens/MyProfile/MyProfile";
import ProfessionalPackages from "./Screens/ProfessionalPackages/ProfessionalPackages";

// const Home = lazyLoad("./Screens/Home/Index");
// const FindHome = lazyLoad("./Screens/FindHome/Index");
// const PropertyDetails = lazyLoad("./Screens/PropertyDetails/Index");
// const FindProfessionals = lazyLoad("./Screens/FindProfessionals/Index");
// const ParentComponent = lazyLoad("./Screens/ParentComponent/Index");
// const Resources = lazyLoad("./Screens/Resources/Index");
// const Error = lazyLoad("./Components/404Page/404Page");

// const CreateProperty = lazyLoad(
//   "./Screens/CreateProperty/CreateProperty/Index"
// );
// const CreateProperty1 = lazyLoad(
//   "./Screens/CreateProperty/CreateProperty1/Index"
// );
// const CreateProperty2 = lazyLoad(
//   "./Screens/CreateProperty/CreateProperty2/Index"
// );

// const PaymentInfo = lazyLoad("./Screens/BillSummary/Index");
// const PropertyInfo = lazyLoad("./Screens/PropertyInfo/Index");
// const EditPhone = lazyLoad("./Screens/CreateProfessional/EditPhone");

// const BecomeProfessional = lazyLoad("./Screens/BecomeProfessional/Index");

// const CreatePost = lazyLoad("./Screens/CreatePost/CreatePost");
// const CreatePost1 = lazyLoad("./Screens/CreatePost/CreatePost1");
// const CreatePost2 = lazyLoad("./Screens/CreatePost/CreatePost2");
// const CreatePost3 = lazyLoad("./Screens/CreatePost/CreatePost3");
// const CreatePost4 = lazyLoad("./Screens/CreatePost/CreatePost4");

// const PostList = lazyLoad("./Screens/CreatePost/Index");

// const Confirmed = lazyLoad("./Components/Confirmed/Index");

// const ProfessionalProfile = lazyLoad("./Screens/ProfessionalProfile/Index");
// const PropertyParent = lazyLoad("./Screens/ParentComponent/PropertyParent");
// const Login = lazyLoad("./Components/Login/Index");
// const RegisterPhone = lazyLoad("./Components/RegisterPhone/Index");
// const VerifyOtp = lazyLoad("./Screens/VerifyOtp/Index");
// const Register = lazyLoad("./Components/Register/Index");
// const UserProfile = lazyLoad("./Screens/UserProfile/Index");
// const Homepage = lazyLoad("./Screens/Homepage/Index");
// const ExploreNearby = lazyLoad("./Screens/ExploreNearby/Index");
// const Story = lazyLoad("./Screens/Story/Index");

function App() {
  const { changeNavColor, scrollToTop } = useContext(ContextApiData);
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
    <Suspense fallback={<h6>Loading...</h6>}>
      <ToastContainer />
      <span className={`arrow-box ${changeNavColor ? "d-block" : "d-none"}`}>
        <img onClick={scrollToTop} src={scroll_up} alt="scroll-up" />
      </span>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Homepage>
              <Login />
            </Homepage>
          }
        />
        <Route
          path="register"
          element={
            <Homepage>
              <Register />
            </Homepage>
          }
        />
        <Route
          path="register-phone"
          element={
            <Homepage>
              <RegisterPhone />
            </Homepage>
          }
        />
        <Route
          path="verify-otp"
          element={
            <Homepage>
              <VerifyOtp />
            </Homepage>
          }
        />
        <Route
          path="editPhone"
          element={
            <Homepage>
              <EditPhone />
            </Homepage>
          }
        />

        <Route
          path="find-home"
          element={
            <Homepage>
              <FindHome />
            </Homepage>
          }
        />
        <Route
          path="property-details/:id"
          element={
            <Homepage>
              <PropertyDetails />
            </Homepage>
          }
        />
        <Route
          path="become-professional"
          element={
            <Homepage>
              <BecomeProfessional />
            </Homepage>
          }
        />
        <Route
          path="user-profile/:id"
          element={
            <Homepage>
              <UserProfile />
            </Homepage>
          }
        />

        <Route
          path="professional-profile/:id"
          element={
            <Homepage>
              <ProfessionalProfile />
            </Homepage>
          }
        />

        <Route
          path="my-profile"
          element={
            <Homepage>
              <MyProfile />
            </Homepage>
          }
        />

        <Route
          path="professinal-packages"
          element={
            <Homepage>
              <ProfessionalPackages />
            </Homepage>
          }
        />

        <Route
          path="explore-nearby"
          element={
            <Homepage>
              <ExploreNearby />
            </Homepage>
          }
        />
        <Route path="story" element={<Story />} />

        <Route path="/user" element={<Homepage />}></Route>
        <Route path="home" element={<Home />} />

        {/* <Route path="parent-element" element={<ParentComponent />}>
          <Route index element={<CreatePost />} />
          <Route path="create-post-1" element={<CreatePost1 />} />
          <Route path="create-post-2" element={<CreatePost2 />} />
          <Route path="create-post-3" element={<CreatePost3 />} />
          <Route path="create-post-4" element={<CreatePost4 />} />
        </Route> */}

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
    </Suspense>
  );
}

export default App;
