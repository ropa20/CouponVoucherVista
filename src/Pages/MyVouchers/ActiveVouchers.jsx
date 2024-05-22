import React from "react";
import { Image, Container, Col, Row, Button, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdShare, MdCall } from "react-icons/md";
import voucher from "../../assets/vou-2.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ActiveVouchers = (props) => {
  const vouchers = props.vouchers;
  const shareUrl =
    "https://devbusiness.shoplocal.digital/my-account/viewvoucher";
  return (
    <>
      <div>
        {props.vouchers?.length > 0 ? (
          vouchers
            .filter((item) => item.product_redeem_status === 0)
            ?.map((item) => {
              return (
                <Row className="local-main" key={item.euvi_id}>
                  <Col md="2" className="local-1">
                    <Image src={voucher} />
                  </Col>
                  <Col>
                    <p className="vou-1">{item.business_name}</p>
                    <p className="vou-2">Voucher ID: {item.product_code}</p>
                    <p className="vou-3">{item.voucher_name}</p>
                    <p className="vou-4">Price : ${item.voucher_offer_price}</p>
                    <div className="mt-3 d-flex vou-btns">
                      <Link
                        variant="primary"
                        type="submit"
                        className="green-btn"
                        to={`/redeemconfirmation/${item.product_id.toString()}`}
                      >
                        {" "}
                        Redeem Now{" "}
                      </Link>
                      <Link
                        variant="primary"
                        type="submit"
                        className="view-btn"
                        // to={`/myaccount/myvouchers/voucherdetail/${item.product_id.toString()}/${item.business_id.toString()}/${item.product_redeem_status.toString()}/Voucher`}
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
                      <OverlayTrigger
                        // show={true}
                        trigger="click"
                        placement="top"
                        overlay={
                          <Popover
                            id="popover-positioned-top"
                            title="Share to:"
                          >
                            <FacebookShareButton
                              url={`${shareUrl}/${item.product_id}`}
                              quote={"Title or jo bhi aapko likhna ho"}
                              hashtag={"#portfolio..."}
                            >
                              <FacebookIcon size={40} round={true} />
                            </FacebookShareButton>

                            <WhatsappShareButton
                              url={`${shareUrl}/${item.product_id}`}
                              quote={"Title or jo bhi aapko likhna ho"}
                              hashtag={"#portfolio..."}
                            >
                              <WhatsappIcon size={40} round={true} />
                            </WhatsappShareButton>
                          </Popover>
                        }
                      >
                        <button style={{ border: "none", background: "none" }}>
                          <MdShare className="share-btn" />
                        </button>
                      </OverlayTrigger>
                    </div>
                  </Col>
                  <Col>
                    <Link
                      className="view-main"
                      to={`/myaccount/myvouchers/contactseller`}
                      state={{
                        id: item.product_id.toString(),
                        flag: "Voucher",
                      }}
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

export default ActiveVouchers;
