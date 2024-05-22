import React from 'react'
import PropTypes from 'prop-types'
import { Image, Container, Col, Row, Button, InputGroup } from "react-bootstrap";
import Msgpic from "../../assets/msg-pic.png"

const OrderRelated = props => {
  return (
    <>
    <div>
        <div className='d-flex msg-main1'>
           <Image src={Msgpic} className="msgpic"></Image>
            <div className='msg-1'>
              <p className='msg1-text1'>Up to 15% OFF on Lipsticks</p>
              <p className='msg1-text2'>Bijou Lash Extensions</p>
            </div>
            <div className='msg-2'>
              <p className='msg2-text1'>12.10 pm</p>
              <p className='msg2-text2'>2</p>
            </div>
        </div>
        <div className='d-flex msg-main1'>
           <Image src={Msgpic} className="msgpic"></Image>
            <div className='msg-1'>
              <p className='msg1-text1'>Up to 15% OFF on Lipsticks</p>
              <p className='msg1-text2'>Bijou Lash Extensions</p>
            </div>
            <div className='msg-2'>
              <p className='msg2-text1'>12.10 pm</p>
              <p className='msg2-text2'>2</p>
            </div>
        </div>
        
    </div>
    </>
  )
}

OrderRelated.propTypes = {}

export default OrderRelated