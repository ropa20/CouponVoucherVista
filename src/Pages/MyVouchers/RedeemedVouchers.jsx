import React from "react";
import { Image, Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import voucher from "../../assets/vou-1.png";

const RedeemedVouchers = (props) => {
  const vouchers = props.vouchers;

  return (
    <>
      {vouchers?.length > 0
        ? vouchers
            .filter((item) => item.product_redeem_status === 1)
            ?.map((item) => {
              return (
                <div>
                  {item.expires_date ? (
                    <p className="redeemed-date">{item.expires_date}</p>
                  ) : null}
                  <Row key={item.product_id} className="local-main">
                    <Col md="2" className="local-1">
                      <Image src={voucher} />
                    </Col>
                    <Col>
                      <p className="vou-1">{item.business_name}</p>
                      <p className="vou-2">Voucher ID: {item.product_code}</p>
                      <p className="vou-3">{item.product_name}</p>
                      <div className="mt-2 d-flex vou-btns">
                        <Link
                          variant="primary"
                          type="submit"
                          className="green-btn"
                          to="/myaccount/myvouchers/voucherdetail"
                          state={{
                            id: parseInt(item.product_id),
                            business_id: parseInt(item.business_id),
                            status: parseInt(item.product_redeem_status),
                            flag: "Voucher",
                          }}
                        >
                          {" "}
                          View Voucher{" "}
                        </Link>
                        <Button variant="primary" className="view-btn">
                          {" "}
                          Successfuly redeemed{" "}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })
        : "Empty list"}
    </>
  );
};

export default RedeemedVouchers;
