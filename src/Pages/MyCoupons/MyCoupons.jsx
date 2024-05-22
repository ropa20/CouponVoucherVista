import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft, MdEast } from "react-icons/md";
import ActiveCoupons from "./ActiveCoupons";
import RedeemedCoupons from "./RedeemedCoupons";
import { CouponsApi } from "../../Utils/Api/CouponsApi";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";

const MyCoupons = () => {
  const couponList = [
    {
      business_id: 1,
      product_id: 101,
      business_name: "ABC Store",
      category_name: "Electronics",
      product_name: "50% Off Smartphone",
      product_code: "COUPON123",
      product_redeem_status: 0,
      expiration_date: "2024-06-30",
      expire_days: 30,
    },
    {
      business_id: 2,
      product_id: 102,
      business_name: "XYZ Boutique",
      category_name: "Fashion",
      product_name: "30% Off Dresses",
      product_code: "COUPON456",
      product_redeem_status: 1,
      expiration_date: "2024-07-15",
      expire_days: 15,
    },
    {
      business_id: 3,
      product_id: 103,
      business_name: "PQR Restaurant",
      category_name: "Food",
      product_name: "Buy One Get One Free Pizza",
      product_code: "COUPON789",
      product_redeem_status: 0,
      expiration_date: "2024-06-10",
      expire_days: 5,
    },
  ];

  const [couponsData, setCouponsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const CouponsHandler = async () => {
    setLoading(true);
    // const activecoupons = await CouponsApi();
    setLoading(false);
    setCouponsData(couponList);
  };

  useEffect(() => {
    CouponsHandler();
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
            <Link>Back</Link>
          </p>
          <p className="page-maintitle">My Coupons</p>
          <Tabs
            defaultActiveKey="active"
            id="uncontrolled-tab-example"
            className="mb-3 vou-tab mt-3"
          >
            <Tab eventKey="active" title="Active Coupons">
              <ActiveCoupons coupons={couponsData} />
            </Tab>
            <Tab eventKey="redeemed" title="Used Coupons">
              <RedeemedCoupons coupons={couponsData} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default MyCoupons;
