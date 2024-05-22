import React from "react";
import { Image, Col, Row, Button } from "react-bootstrap";
import { MdShare, MdCall } from "react-icons/md";
import voucher1 from "../../assets/vou-3.png";
import { Link } from "react-router-dom";

const RedeemedCoupons = ({ coupons }) => {
  return (
    <div>
      {coupons
        .filter((item) => item.product_redeem_status === 1)
        ?.map((item) => {
          return (
            <Row className="local-main" key={item.business_id}>
              <Col md="2" className="local-1">
                <Image src={voucher1} width={100} />
              </Col>
              <Col>
                <p className="vou-1">{item.business_name}</p>
                <p className="vou-2">{item.category_name}</p>
                <p className="vou-3">{item.product_name}</p>
                <div className="mt-3 d-flex vou-btns">
                  <Button variant="primary" className="view-btn">
                    {" "}
                    Successfuly redeemed{" "}
                  </Button>
                  <MdShare className="share-btn" />
                </div>
              </Col>
              <Col>
                <Link className="view-main" to="/contactseller">
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
        })}
      {coupons?.length === 0 ? (
        <div className="d-flex justify-content-center">
          <h5>Empty list</h5>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RedeemedCoupons;
