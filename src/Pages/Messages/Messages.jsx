import React from 'react'
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft, MdEast } from "react-icons/md";
import { Image, Container, Col, Row, Button, InputGroup } from "react-bootstrap";
import AllMessages from '../AllMessages/AllMessages';
import Chat from '../Chat/Chat';


const Messages = props => {
  return (
    <>
     <div className='gray-bg'>
        <div className='navbar-section p-0'>
          <Navigation/>
        </div>
        <div className='main-content pt-5 pr-3 pb-4'>
            <p className='page-text'><MdKeyboardArrowLeft className='arrow-left'/>Back</p>
            <p className='page-maintitle'>Messages</p>
            <Row>
                <Col md="6">
                    <AllMessages/>
                </Col>
                <Col md="6">
                    <Chat/>
                </Col>
            </Row>
        </div>
        </div>
    </>
  )
}



export default Messages