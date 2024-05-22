import React from "react";
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft, MdEast } from "react-icons/md";
import "../Dashboard/Dashboard.css";
import { TableData } from "./DummyTableData";
import {
  Image,
  Container,
  Col,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import VouchurePic from "../../assets/vouchure.svg";
import CoupenPic from "../../assets/coupens.svg";
import Savings from "../../assets/savings.svg";
import RecentActivities from "../../Components/RecentActivities/RecentActivities";
import { useState } from "react";
import { dashboardApi } from "../../Utils/Api/Dashboard";
import { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [topSectiondata, setTopSectionData] = useState([]);
  const [headersData, setHeadersData] = useState([]);
  const [recentActivityData, setRecentActivityData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getcolor, setGetColor] = useState({});

  const DashboardApiHandler = async () => {
    setLoading(true);
    // const dashboardData = await dashboardApi();
    setLoading(false);
    setTopSectionData(TableData.top_section);
    setHeadersData(TableData["headers"]);
    setRecentActivityData(TableData["recent_activity"]);
  };

  console.log(topSectiondata.available_coupons);

  useEffect(() => {
    DashboardApiHandler();
    // const colors = {
    //   redeemed: "green",
    //   downloaded: "blue",
    //   purchased: "yellow",
    // };
    // setGetColor(colors[i]);
  }, []);
  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="gray-bg">
        <div className="navbar-section p-0">
          <Navigation />
        </div>
        <div className="main-content pt-5 pr-3 pb-4">
          <p className="page-text">
            <MdKeyboardArrowLeft className="arrow-left" />
            <Link to="/explore">Back</Link>
          </p>
          <p className="page-maintitle">Dashboard</p>
          <Row className="dashboard-card mt-4 ">
            <Col md="4">
              <div className="card">
                <div className="dash-img-main">
                  <div className="dash-img">
                    <Image src={VouchurePic}></Image>
                  </div>
                </div>
                <div className="dash-content">
                  <p className="dash-text1 pt-4">Available Vouchers</p>
                  <p className="dash-text2">
                    {topSectiondata?.available_vouchers}
                  </p>
                  <p className="text-right">
                    <Link to={"/myaccount/myvouchers"}>
                      <MdEast className="dash-icon" />
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="card">
                <div className="dash-img-main">
                  <div className="dash-img">
                    <Image src={CoupenPic} height="23px"></Image>
                  </div>
                </div>
                <div className="dash-content">
                  <p className="dash-text1 pt-4">Available Coupons</p>
                  <p className="dash-text2">
                    {topSectiondata?.available_coupons}
                  </p>
                  <p className="text-right">
                    <Link to={"/myaccount/mycoupons"}>
                      <MdEast className="dash-icon" />
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="card green-card">
                <div className="dash-img-main">
                  <div className="dash-img">
                    <Image src={Savings} height="18px"></Image>
                  </div>
                </div>
                <div className="dash-content">
                  <p className="dash-text1 pt-4">Total Savings</p>
                  <p className="dash-text2">
                    {topSectiondata?.total_savings}
                    <span className="dash-text2">
                      {topSectiondata?.total_savings ? "$" : ""}
                    </span>
                  </p>
                  <p className="text-right pb-4"></p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-5">
            <RecentActivities
              headers={headersData}
              recentActivity={recentActivityData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
