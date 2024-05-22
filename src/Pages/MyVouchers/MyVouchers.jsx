import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft, MdEast } from "react-icons/md";
import ActiveVouchers from "./ActiveVouchers";
import RedeemedVouchers from "./RedeemedVouchers";
import { useState } from "react";
import { VouchersApi } from "../../Utils/Api/VouchersApi";
import Loader from "../../Components/Loader/Loader";

const MyVouchers = (props) => {
  const voucherList = [
    {
      euvi_id: 1,
      product_id: "123",
      business_id: "456",
      business_name: "Joe's Cafe",
      product_code: "VC1001",
      voucher_name: "10% Off Coffee",
      voucher_offer_price: "5",
      product_redeem_status: 0,
      expiration_date: "2024-06-01",
      expire_days: 10,
    },
    {
      euvi_id: 2,
      product_id: "124",
      business_id: "457",
      business_name: "Sally's Bakery",
      product_code: "VC1002",
      voucher_name: "20% Off Bread",
      voucher_offer_price: "3",
      product_redeem_status: 1,
      expiration_date: "2024-07-01",
      expire_days: 5,
    },
    {
      euvi_id: 3,
      product_id: "125",
      business_id: "458",
      business_name: "Pete's Pizzeria",
      product_code: "VC1003",
      voucher_name: "Buy One Get One Free Pizza",
      voucher_offer_price: "20",
      product_redeem_status: 0,
      expiration_date: "2024-05-20",
      expire_days: 3,
    },
  ];

  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(false);

  const Handler = async () => {
    setLoading(true);
    // const activeData = await VouchersApi();
    setLoading(false);
    setVouchers(voucherList);
  };
  useEffect(() => {
    Handler();
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
            Back
          </p>
          <p className="page-maintitle">My Vouchers</p>
          <Tabs
            defaultActiveKey="active"
            id="uncontrolled-tab-example"
            className="mb-3 vou-tab mt-3"
          >
            <Tab eventKey="active" title="Active vouchers">
              <ActiveVouchers vouchers={vouchers} />
            </Tab>
            <Tab eventKey="redeemed" title="Redeemed vouchers">
              <RedeemedVouchers vouchers={vouchers} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default MyVouchers;
