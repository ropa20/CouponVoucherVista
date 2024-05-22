import React from 'react'
import PropTypes from 'prop-types'
import { Image, Container, Col, Row, Button, InputGroup, img } from "react-bootstrap";
import Msgpic from "../../assets/msg-pic.png"
import Form from 'react-bootstrap/Form';
import { FaLocationArrow } from "react-icons/fa";

const Chat = props => {
    
  return (
    <>
<div className='chat-main mt-3'>
<div className='chat-header'>
<div className='d-flex msg-main1 msg-main2'>
    <Image src={Msgpic} className="msgpic"></Image>
    <div className='msg-1'>
        <p className='msg1-text1'>Up to 15% OFF on Lipsticks</p>
        <p className='msg1-text2'>Bijou Lash Extensions</p>
    </div>
    </div>
</div>
<div className="container bootstrap snippets bootdeys">
<div className="col-md-12">
  <div className="panel" id="chat">
    <div className="panel-body">
      <div className="chats">
        <div className="chat">
          <div className="chat-body">
            <div className="chat-content">
              <p>
              Lörem ipsum sesosa ultrahet plankning kys. Åbel kompetensväxling jide fökarad benim. Porade deneheten i operaosmos då memåska att agnostipod. Häde jåskapet novent men nyrölig och ugt. 
              </p>
              <time className="chat-time" datetime="2015-07-01T11:37">11:37:08 am</time>
            </div>
          </div>
        </div>
        <div className="chat chat-left">
          <div className="chat-body">
            <div className="chat-content">
              <p>Lörem ipsum sesosa ultrahet plankning kys. Åbel kompetensväxling jide fökarad benim. Porade deneheten i operaosmos då memåska att agnostipod. Häde jåskapet novent men nyrölig och ugt. </p>
              <time className="chat-time" datetime="2015-07-01T11:39">11:39:57 am</time>
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="chat-body">
            <div className="chat-content">
              <p>
              Lörem ipsum sesosa ultrahet plankning kys. Åbel kompetensväxling jide fökarad benim. Porade deneheten i operaosmos då memåska att agnostipod. Häde jåskapet novent men nyrölig och ugt. 
              </p>
              <time className="chat-time" datetime="2015-07-01T11:40">11:40:10 am</time>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="panel-footer">
      <form>
        <div className="input-group">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="input" placeholder="Type a message..." />
                <button className="btn btn-primary chat-send" type="button"><FaLocationArrow/></button>
            </Form.Group>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</div>
    </>
  )
}

Chat.propTypes = {}

export default Chat