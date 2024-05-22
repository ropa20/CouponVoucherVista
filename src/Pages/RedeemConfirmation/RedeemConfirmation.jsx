import React, { useEffect, useState } from "react";
import redeem from "../../assets/redeem.png";
import {
  Image,
  Container,
  Col,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft, MdEast } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { RedeemVoucherApi } from "../../Utils/Api/RedeemVoucherApi";

const RedeemConfirmation = (props) => {
  const parameter = useParams();
  const id = parseInt(parameter.id);
  const [redeemvoucher, setRedeemvouchers] = useState([]);

  const Handler = async () => {
    const data = {
      //hardcoded
      user_id: 18,
      voucher_id: id,
    };
    const activeData = await RedeemVoucherApi(data);
    setRedeemvouchers(activeData);
  };

  return (
    <>
      <div className="gray-bg">
        <div className="navbar-section p-0">
          <Navigation />
        </div>
        <div className="main-content pt-5 pr-3 pb-4">
          <p className="page-text">
            <MdKeyboardArrowLeft className="arrow-left" />
            <Link to="/myaccount/myvouchers">Back</Link>
          </p>
          <p className="page-maintitle">Redeem Voucher</p>
          <div className="text-center mt-3">
            <Image src={redeem}></Image>
            <p className="mt-4 redem-confirm">
              Are you sure you want to redeem now?
            </p>
            <p>
              Make sure you are at the right place, at the
              <br /> right time before redeeming.
            </p>
            <div className="d-flex vou-btns just-center mt-3">
              <Link
                variant="primary"
                type="submit"
                className="view-btn"
                to="/myaccount/myvouchers"
              >
                {" "}
                Cancel{" "}
              </Link>
              <Link
                variant="primary"
                type="submit"
                className="green-btn"
                to={`/redeemverification/${id.toString()}`}
                onClick={Handler}
              >
                Redeem{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedeemConfirmation;
