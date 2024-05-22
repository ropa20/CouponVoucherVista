import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft, MdEast, MdDelete } from "react-icons/md";
import {
  Image,
  Container,
  Col,
  Row,
  Button,
  InputGroup,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useParams } from "react-router-dom";
import Local1 from "../../assets/local-1.png";
import { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import { VoucherDetailsApi } from "../../Utils/Api/VoucherDetailsApi";

const Checkout = (props) => {
  const voucherdetaildummy = {
    business_name: "ABC Store",
    voucher_title: "50% Off Smartphone",
    voucher_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    voucher_term_condition: [
      "Valid only for new customers.",
      "Expires on June 30, 2024.",
    ],
    voucher_actual_price: 1000,
    voucher_offer_price: 500,
    offered_percent: 50,
    business_id: 123,
    product_id: 456,
    opening_time: "09:00",
    closing_time: "18:00",
    bup_address1: "123 Main St",
    bup_address2: "Suite 100",
    website_url: "www.abcstore.com",
  };
  const location = useLocation();
  const { id, business_id, status, flag } = location.state;
  console.log("id", id);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const CheckoutHandler = async () => {
    setLoading(true);
    const data = {
      voucherId: id,
    };
    // const checkoutData = await VoucherDetailsApi(data);
    setLoading(false);
    setList([voucherdetaildummy]);
  };

  useEffect(() => {
    CheckoutHandler();
  }, []);

  return (
    <>
      {loading ? <Loader /> : ""}
      <div>
        {list ? (
          list?.map((item, index) => {
            if (index === 0) {
              return (
                <div className="gray-bg">
                  <div className="navbar-section p-0">
                    <Navigation />
                  </div>
                  <div className="main-content pt-5 pr-3 pb-4">
                    <p className="page-text">
                      <MdKeyboardArrowLeft className="arrow-left" />
                      {flag === "Voucher" ? (
                        status == 2 ? (
                          <Link
                            to="/explore/voucherdetail"
                            state={{
                              id: id,
                              business_id: business_id,
                              status: status,
                              flag: flag,
                            }}
                          >
                            Back
                          </Link>
                        ) : (
                          <Link
                            to="/myaccount/myvouchers/voucherdetail"
                            state={{
                              id: id,
                              business_id: business_id,
                              status: status,
                              flag: flag,
                            }}
                          >
                            Back
                          </Link>
                        )
                      ) : status == 2 ? (
                        <Link
                          to="/explore/coupondetail"
                          state={{
                            id: id,
                            business_id: business_id,
                            status: status,
                            flag: flag,
                          }}
                        >
                          Back
                        </Link>
                      ) : (
                        <Link
                          to="/myaccount/mycoupons/coupondetail"
                          state={{
                            id: id,
                            business_id: business_id,
                            status: status,
                            flag: flag,
                          }}
                        >
                          Back
                        </Link>
                      )}
                    </p>
                    <p className="page-maintitle">Checkout</p>
                    <Row className="main-checkout mt-4">
                      <Col md="6">
                        <p className="checkout-title">Checkout (1 Item)</p>
                        <p>Please fill out the billing information</p>
                        <p className="checkout-method mt-4">Payment method</p>
                        <Form className="passwordcheck mt-4 orange-check">
                          <Form.Check
                            name="grouped"
                            required
                            inline
                            label="Credit/Debit Card"
                            type="radio"
                            isValid
                          />
                          <br />
                          <div className="inner-checkout">
                            <Form.Check
                              name="grouped"
                              required
                              inline
                              label="**** **** 9755"
                              type="radio"
                              isValid
                            ></Form.Check>
                            <br />
                            <Form.Check
                              name="grouped"
                              required
                              inline
                              label="**** **** 1243"
                              type="radio"
                              isValid
                            />
                            <br />
                            <Link to="/addnewcard">
                              <p className="addnew-card">+ Add new card</p>
                            </Link>
                          </div>
                          <Form.Check
                            name="grouped"
                            required
                            inline
                            label="PayPal"
                            type="radio"
                            isValid
                          />
                          <br />
                          <Form.Check
                            name="grouped"
                            required
                            inline
                            label="Google Pay"
                            type="radio"
                            isValid
                          />
                        </Form>
                        <p className="checkout-method mt-4">Your Item</p>
                        <Row className="local-main">
                          <Col md="2" className="local-1">
                            <Image src={Local1} />
                          </Col>
                          <Col>
                            <p className="loc-detail-1">{item.category}</p>
                            <p className="loc-detail-2">
                              {item.voucher_title} on {item.category}
                            </p>
                            <p className="loc-detail-3">
                              by {item.business_name}
                            </p>
                            <div className="d-flex">
                              <p className="loc-price-1">
                                ${item.voucher_actual_price}
                              </p>
                              <p className="loc-price-2">
                                ${item.voucher_offer_price}
                              </p>
                              <p className="you-save">
                                You save{" "}
                                {item.voucher_actual_price -
                                  item.voucher_offer_price}
                              </p>
                            </div>
                          </Col>
                          <div className="tag-main">
                            <p className="ribben">VOUCHER</p>
                          </div>
                        </Row>
                      </Col>
                      <Col md="4">
                        <p className="checkout-title">Order Summary</p>
                        <div className="price-main mt-3">
                          <div className="d-flex price-inner">
                            <p>Subtotal :</p>
                            <p>${item.voucher_offer_price}</p>
                          </div>
                          <hr />
                          <div className="d-flex price-inner">
                            <p>
                              <b>Tax:</b>
                            </p>
                            <p>
                              <b>$00</b>
                            </p>
                          </div>
                          <div className="d-flex price-inner">
                            <p>
                              <b>Order Total:</b>
                            </p>
                            <p>
                              <b>${item.voucher_offer_price}</b>
                            </p>
                          </div>
                          <Button
                            variant="primary"
                            type="submit"
                            className="green-btn mt-3"
                          >
                            Sign In
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              );
            }
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

export default Checkout;
