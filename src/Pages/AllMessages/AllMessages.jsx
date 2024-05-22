import React from 'react'
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft, MdEast } from "react-icons/md";
import { Image, Container, Col, Row, Button, InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { MdSearch } from "react-icons/md";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OrderRelated from '../OrderRelated/OrderRelated';


const AllMessages = props => {
  return (
    <>
     <div className='msg-main mt-3'>
     <div className='msg-inner1'>
      <InputGroup className='search-bar'>
        <InputGroup.Text><MdSearch /></InputGroup.Text>
        <Form.Control
          placeholder="Search"
        />
      </InputGroup>
      <Tabs
      defaultActiveKey="order-related"
      id="uncontrolled-tab-example"
      className="mb-3 order-related mt-3"
    >
      <Tab eventKey="order-related" title="Order Related">
        <OrderRelated/>
      </Tab>
      <Tab eventKey="general" title="General">
        <OrderRelated/>
      </Tab>
    </Tabs>
     </div>
     </div>
    </>
  )
}



export default AllMessages