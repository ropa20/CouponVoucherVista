import React, { useState } from "react";
import { Image, Container, Col, Row, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { MdShare, MdCall, MdOutlineContentCopy } from "react-icons/md";
import voucher1 from "../../assets/vou-3.png";
import copy from "copy-to-clipboard";
import { DownloadCouponApi } from "../../Utils/Api/DownloadCouponApi";
import { userId } from "../../Utils/LocalStorage";

const ActiveCoupons = (props) => {
  const coupons = props.coupons;
  const [showcode, setShowcode] = useState(false);
  const userid = userId();

  const copyHandler = (code) => {
    if (code !== null) {
      copy(code);
      alert(`Copied "${code}"`);
    }
  };
  const handleShowCode = async (id, business_id) => {
    //showcode api
    const d = {
      user_id: parseInt(userid),
      coupon_id: id,
      business_id: business_id,
      city_id: parseInt(localStorage.getItem("city_id")),
    };
    const downloadCoupon = await DownloadCouponApi(d);
  };
  return (
    <>
      <div>
        {coupons?.length > 0 ? (
          coupons
            .filter((item) => item.product_redeem_status === 0)
            ?.map((item) => {
              return (
                <Row className="local-main" key={item.business_id}>
                  <Col md="2" className="local-1">
                    <Image src={voucher1} />
                  </Col>
                  <Col>
                    <p className="vou-1">{item.business_name}</p>
                    <p className="vou-2">{item.category_name}</p>
                    <p className="vou-3">{item.product_name}</p>
                    <div className="mt-3 d-flex vou-btns">
                      {showcode === true ? (
                        <Button
                          variant="primary"
                          type="submit"
                          className="view-btn text-left"
                          onClick={() => setShowcode(!showcode)}
                        >
                          {item.product_code} {""}
                          <Button
                            className="copy-btn"
                            onClick={(event) => {
                              let code = item.product_code;
                              copyHandler(code);
                            }}
                          >
                            <MdOutlineContentCopy />
                          </Button>
                        </Button>
                      ) : (
                        <Button
                          variant="primary"
                          type="submit"
                          className="green-btn"
                          onClick={() => {
                            setShowcode(!showcode);
                            handleShowCode(
                              parseInt(item.product_id),
                              parseInt(item.business_id)
                            );
                          }}
                        >
                          Show code {""}
                        </Button>
                      )}
                      <Link
                        variant="primary"
                        type="submit"
                        className="view-btn"
                        to={"/myaccount/mycoupons/coupondetail"}
                        state={{
                          id: parseInt(item.product_id),
                          business_id: parseInt(item.business_id),
                          status: parseInt(item.product_redeem_status),
                          flag: "Coupon",
                        }}
                      >
                        {" "}
                        View Coupon{" "}
                      </Link>
                      <MdShare className="share-btn" />
                    </div>
                  </Col>
                  <Col>
                    <Link
                      className="view-main"
                      to={`/contactseller/${item.product_id.toString()}/coupon`}
                    >
                      <p className="contact-seller">
                        <MdCall className="seller-icon" />
                        Contact Seller
                      </p>
                    </Link>
                  </Col>
                  {item.expiration_date ? (
                    <p className="ribben expires-ribben">
                      Expires in {item.expire_days} day
                    </p>
                  ) : null}
                </Row>
              );
            })
        ) : (
          <div className="d-flex justify-content-center">
            <h5>Empty list</h5>
          </div>
        )}
      </div>
    </>
  );
};
export default ActiveCoupons;
