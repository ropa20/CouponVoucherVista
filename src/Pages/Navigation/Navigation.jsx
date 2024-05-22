import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Navigation/Navigation.css";
import LogoNav from "../../assets/logo-1.png";
import UserImage from "../../assets/user.png";
import { Image, Row, Col } from "react-bootstrap";
import {
  MdSearch,
  MdOutlineDashboard,
  MdOutlineAccountCircle,
  MdOutlineNotificationsNone,
  MdOutlineForum,
  MdOutlineKeyboardArrowDown,
  MdLogout,
  MdOutlinePayments,
  MdOutlineSmartScreen,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { removeUserCredentials } from "../../Utils/LocalStorage";
import { UserProfile } from "../../Utils/Api/UserProfile";
import { useEffect } from "react";
import { getUser } from "../../Utils/LocalStorage";

const Navigation = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [activeStyle, setActiveStyle] = useState("");
  const [show, setShow] = useState(false);

  const ShowDropDownHandler = () => {
    setShow(true);
  };
  const RemoveDropDownHandler = () => {
    setShow(false);
  };

  const LogoutHandler = (e) => {
    e.preventDefault();
    removeUserCredentials();
    navigate("/");
  };

  // user details from local storage
  const UserDetails = getUser();
  const UserName = UserDetails?.first_name + " " + UserDetails?.last_name;

  // const UserProfileHandler = async () => {
  //   console.log("rrrr")
  //   const userprofiledata = await UserProfile();
  //   setUserName(userprofiledata[0].first_name);
  // };

  const onMyVoucher = () => {
    if (activeStyle === "myvouchers") {
      setShow(true);
    }
  };

  const NavbarHandler = (index) => {
    console.log("gg");
    if (index == 2) {
      setActiveStyle("explore");
    }
    if (index == 3) {
      setActiveStyle("dashboard");
    }
    if (index == 4) {
      setActiveStyle("myvouchers");
    }
    if (index == 5) {
      setActiveStyle("mycoupons");
    }
    if (index == 6) {
      setActiveStyle("notifications");
    }
    if (index == 7) {
      setActiveStyle("messages");
    }
  };

  useEffect(() => {
    const path = window.location.href;
    const endPath = path.split("/");
    console.log(endPath, "path");
    if (endPath[3] === "explore") {
      setActiveStyle("explore");
    }
    if (endPath[3] === "dashboard") {
      setActiveStyle("dashboard");
    }
    if (endPath[3] === "myaccount") {
      setActiveStyle("myaccount");
    }
    if (endPath[3] === "messages") {
      setActiveStyle("messages");
    }
    if (endPath[3] === "notifications") {
      setActiveStyle("notifications");
    }
    if (endPath[4] === "myvouchers") {
      setActiveStyle("myvouchers");
    }
    if (endPath[4] === "mycoupons") {
      setActiveStyle("mycoupons");
    }
  }, []);

  // useEffect(() => {
  //   UserProfileHandler();
  // }, []);

  return (
    <div>
      <Navbar expand="lg" className="custom-nav-main mt-3">
        <div className="d-flex justify-content-center">
          <Image src={LogoNav} className="mx-3" />
        </div>
        <div className="my-3 d-flex justify-content-center mx-3 mobile-profile">
          <Link to="/my-profile">
            <div className="d-flex flex-direction-row justify-content-space-around">
              <div>
                <Image src={UserImage}></Image>
              </div>
              <div to="/my-profile" className="hide-mobile hide-tab ps-1 pe-2">
                <p className="pt-3 username">Ropa Roy</p>
              </div>
            </div>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="custom-nav mt-1">
          <Nav className="me-auto">
            {/* <Link to="/explore" className="nav-link nav-active mt-0">
              <MdSearch className="nav-icon" />
              Explore
            </Link> */}

            <Link
              onClick={() => {
                NavbarHandler(2);
              }}
              to="/explore"
              className={
                activeStyle === "explore" ? "nav-link nav-active" : "nav-link "
              }
            >
              <MdSearch className="nav-icon" />
              Explore
            </Link>

            <Link
              onClick={() => {
                NavbarHandler(3);
              }}
              to="/dashboard"
              className={
                activeStyle === "dashboard"
                  ? "nav-link nav-active"
                  : "nav-link mt-0"
              }
            >
              <MdOutlineDashboard className="nav-icon" />
              Dashboard
            </Link>
            <NavDropdown
              show={
                show === true
                  ? true
                  : activeStyle === "myvouchers" || activeStyle === "mycoupons"
                  ? true
                  : false
              }
              onMouseEnter={ShowDropDownHandler}
              onMouseLeave={RemoveDropDownHandler}
              title={
                <p>
                  <MdOutlineAccountCircle className="nav-icon" /> My Account{" "}
                  <MdOutlineKeyboardArrowDown className="nav-arrow" />
                </p>
              }
              //  id="basic-nav-dropdown"
            >
              <Link
                onClick={() => {
                  NavbarHandler(4);
                  onMyVoucher();
                }}
                to="/myaccount/myvouchers"
                className={
                  activeStyle === "myvouchers"
                    ? "nav-link nav-active"
                    : "nav-link mt-0"
                }
              >
                <MdOutlineSmartScreen className="nav-icon" /> My Vouchers
              </Link>
              <Link
                onClick={() => {
                  NavbarHandler(5);
                }}
                to="/myaccount/mycoupons"
                className={
                  activeStyle === "mycoupons"
                    ? "nav-link nav-active"
                    : "nav-link mt-0"
                }
              >
                <MdOutlinePayments className="nav-icon" /> My Coupons
              </Link>
            </NavDropdown>
            <Link
              onClick={() => {
                NavbarHandler(6);
              }}
              to="/notifications"
              className={
                activeStyle === "notifications"
                  ? "nav-link nav-active"
                  : "nav-link mt-0"
              }
            >
              <MdOutlineNotificationsNone className="nav-icon" /> Notifications
            </Link>
            <Link
              onClick={() => {
                NavbarHandler(7);
              }}
              to="/messages"
              className={
                activeStyle === "messages"
                  ? "nav-link nav-active "
                  : "nav-link mt-0"
              }
            >
              <MdOutlineForum className="nav-icon" /> Messages
            </Link>
            {/* <Link className="nav-link" onClick={LogoutHandler}>
              <MdLogout className="nav-icon" /> Logout
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Link
        className="nav-link nav-logout hide-mobile hide-tab"
        onClick={LogoutHandler}
      >
        <MdLogout className="nav-icon" /> Logout
      </Link>
    </div>
  );
};

export default Navigation;
