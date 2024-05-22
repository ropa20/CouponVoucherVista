import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import popular1 from "../../assets/popular1.png";

const CarousalCard = (props) => {
  const { eachitem, id, business_id, status, flag } = props;
  console.log("id echa", eachitem.product_id);
  return (
    <Col className="m-2">
      <div className="card p-3">
        <img className="d-block w-100" src={popular1} alt="First slide" />
        <div className="tag">
          <p className="loc-detail-1 mt-3">{eachitem.category}</p>
          <div className="tag-main">
            <p className="ribben">{eachitem.flag}</p>
          </div>
        </div>
        <p className="loc-detail-2">{eachitem.product_name} </p>
        <p className="loc-detail-3">by {eachitem.business_name}</p>
        {eachitem.flag === "Voucher" && (
          <div className="d-flex">
            <p className="loc-price-1">${eachitem.product_actual_price}</p>
            <p className="loc-price-2">${eachitem.product_offer_price}</p>
            <p className="loc-price-offer">{eachitem.offered_percent}% OFF</p>
          </div>
        )}
        {eachitem.flag === "Voucher" ? (
          status === 2 ? (
            flag === "Voucher" ? (
              <Link
                to="/explore/voucherdetail/checkout"
                state={{
                  id: eachitem.product_id,
                  business_id: business_id,
                  status: status,
                  flag: flag,
                }}
                className="mt-3 text-center green-btn"
              >
                {console.log("yo")}
                Buy Now
              </Link>
            ) : (
              <Link
                to="/explore/coupondetail/checkout"
                state={{
                  id: eachitem.product_id,
                  business_id: business_id,
                  status: status,
                  flag: flag,
                }}
                className="mt-3 text-center green-btn"
              >
                {console.log("yo")}
                Buy Now
              </Link>
            )
          ) : flag === "Voucher" ? (
            <Link
              to="/myaccount/myvouchers/voucherdetail/checkout"
              state={{
                id: eachitem.product_id,
                business_id: business_id,
                status: status,
                flag: flag,
              }}
              className="mt-3 text-center green-btn"
            >
              {console.log("yo")}
              Buy Now
            </Link>
          ) : (
            <Link
              to="/myaccount/mycoupons/coupondetail/checkout"
              state={{
                id: eachitem.product_id,
                business_id: business_id,
                status: status,
                flag: flag,
              }}
              className="mt-3 text-center green-btn"
            >
              Buy Now
            </Link>
          )
        ) : (
          <Link to="" className="mt-3 text-center green-btn">
            Download
          </Link>
        )}
      </div>
    </Col>
  );
};

export default CarousalCard;
