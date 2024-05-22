import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import CreateNewPassword from "./Pages/CreateNewPassword/CreateNewPassword";
import OTP from "./Pages/OTP/OTP";
import Explore from "./Pages/Explore/Explore";
import Dashboard from "./Pages/Dashboard/Dashboard";
import VoucherDetails from "./Pages/VoucherDetails/VoucherDetails";
import MyVouchers from "./Pages/MyVouchers/MyVouchers";
import RedeemConfirmation from "./Pages/RedeemConfirmation/RedeemConfirmation";
import RedeemVerification from "./Pages/RedeemVerification/RedeemVerification";
import ContactSeller from "./Pages/ContactSeller/ContactSeller";
import MyProfile from "./Pages/MyProfile/MyProfile";
import EditMobileNumber from "./Pages/EditMobileNumber/EditMobileNumber";
import EditEmailAddress from "./Pages/EditEmailAddress/EditEmailAddress";
import Notifications from "./Pages/Notifications/Notifications";
import MyProfileResetPassword from "./Pages/MyProfileResetPassword/MyProfileResetPassword";
import Checkout from "./Pages/Checkout/Checkout";
import AddNewCard from "./Pages/AddNewCard/AddNewCard";
import Messages from "./Pages/Messages/Messages";
import RequireAuth from "./Utils/RequireAuth";
import { useState } from "react";
import MyCoupons from "./Pages/MyCoupons/MyCoupons";
import CouponDetails from "./Pages/CouponDetails/CouponDetails";
import Toaster from "./Components/Toaster/Toaster";
import Navigation from "./Pages/Navigation/Navigation";

function App() {
  const [status, setStatus] = useState("");
  const [mobile, setMobile] = useState("");

  const manageStatus = (val) => {
    let s = val;
    setStatus(s);
  };

  const manageMobile = (val) => {
    let s = val;
    setMobile(s);
  };

  // xyz

  const PrivateRoutes = [
    {
      id: 0,
      path: "/explore",
      element: <Explore />,
    },
    {
      id: 2,
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      id: 3,
      path: "/myaccount/myvouchers/voucherdetail",
      element: <VoucherDetails />,
    },
    {
      id: 4,
      path: "/myaccount/myvouchers",
      element: <MyVouchers />,
    },
    {
      id: 5,
      path: "/redeemconfirmation/:id",
      element: <RedeemConfirmation />,
    },
    {
      id: 6,
      path: "/redeemverification/:id",
      element: <RedeemVerification />,
    },
    {
      id: 7,
      path: "/myaccount/myvouchers/contactseller",
      element: <ContactSeller />,
    },
    {
      id: 8,
      path: "/my-profile",
      element: <MyProfile />,
    },
    {
      id: 9,
      path: "/edit-mobile-number",
      element: <EditMobileNumber mobile={manageMobile} />,
    },
    {
      id: 10,
      path: "/edit-email-address",
      element: <EditEmailAddress email_prop={manageMobile} />,
    },
    {
      id: 11,
      path: "/notifications",
      element: <Notifications />,
    },
    {
      id: 12,
      path: "/myprofile-resetpadssword",
      element: <MyProfileResetPassword />,
    },
    {
      id: 13,
      path: "/explore/voucherdetail/checkout",
      element: <Checkout />,
      // /checkout/159/5/0/Yoga/Voucher
    },
    {
      id: 14,
      path: "/addnewcard",
      element: <AddNewCard />,
    },
    {
      id: 15,
      path: "/messages",
      element: <Messages />,
    },
    {
      id: 16,
      path: "/myaccount/mycoupons",
      element: <MyCoupons />,
    },
    {
      id: 17,
      path: "/myaccount/mycoupons/coupondetail/:id/:business_id",
      element: <CouponDetails />,
    },
    {
      id: 18,
      path: "/redeemconfirmation",
      element: <RedeemConfirmation />,
    },
    {
      id: 19,
      path: "/redeemverfication",
      element: <RedeemVerification mobile={mobile} />,
    },
    {
      id: 21,
      path: "/explore/voucherdetail",
      element: <VoucherDetails />,
    },
    {
      id: 22,
      path: "/myaccount/mycoupons/coupondetail",
      element: <CouponDetails />,
    },
    {
      id: 23,
      path: "/explore/coupondetail",
      element: <CouponDetails />,
    },
    {
      id: 24,
      path: "/myaccount/myvouchers/voucherdetail/checkout",
      element: <Checkout />,
    },
    {
      id: 25,
      path: "/myaccount/mycoupons/coupondetail/checkout",
      element: <Checkout />,
    },
    {
      id: 26,
      path: "/explore/coupondetail/checkout",
      element: <Checkout />,
    },
  ];
  return (
    <>
      <Toaster />
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn status={status} />}></Route>
          <Route
            path="/signup"
            element={<SignUp Status={manageStatus} />}
          ></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route
            path="/createnewpassword"
            element={<CreateNewPassword />}
          ></Route>
          <Route path="/otp" element={<OTP />}></Route>
          {PrivateRoutes?.map((r) => {
            return (
              <Route
                path={r.path}
                key={r.id}
                element={<RequireAuth>{r.element}</RequireAuth>}
              ></Route>
            );
          })}
          {/* <ForgotPassword /> */}
        </Routes>
        {/* <Navigation /> */}
      </div>
    </>
  );
}

export default App;
