import React,{useState} from 'react'
import Navigation from "../Navigation/Navigation";
import { MdKeyboardArrowLeft, MdEast } from "react-icons/md";
import { Image, Container, Col, Row, Button, InputGroup } from "react-bootstrap";

const Notifications = props => {
  //read More
  const [readMore,setreadMore]=useState(false);
  const extraContentRead=<div>
        <p className="extra-content">
        Lörem ipsum sesosa ultrahet plankning kys. Åbel kompetensväxling jide fökarad benim. Porade deneheten i operaosmos då memåska att agnostipod. Häde jåskapet novent men nyrölig och ugt. Prett löst blåljusyrke bekyska eller måse. Lörem ipsum sesosa ultrahet plankning kys. Åbel kompetensväxling jide fökarad benim. Porade deneheten i operaosmos då memåska att agnostipod. Häde jåskapet novent men nyrölig och ugt. Prett löst blåljusyrke bekyska eller måse.
        </p>
  </div>
   const linkNameRead=readMore?'Read Less':'Read More'
  return (
    <>
    <div className='gray-bg'>
        <div className='navbar-section p-0'>
          <Navigation/>
        </div>
        <div className='main-content pt-5 pr-3 pb-4'>
            <p className='page-text'><MdKeyboardArrowLeft className='arrow-left'/>Back</p>
            <p className='page-maintitle'>Notifications</p>
            <p className='redeemed-date'>15.09.2022</p>
            <div className='border-card'>
                <p className='border-card-text'>DON’T MISS IT OUT !</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. <span className="read-more-link mb-2" onClick={()=>{setreadMore(!readMore)}}>{linkNameRead}</span></p>
                {readMore && extraContentRead}
            </div>
            <div className='border-card'>
                <p className='border-card-text'>DON’T MISS IT OUT !</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. <span className="read-more-link mb-2" onClick={()=>{setreadMore(!readMore)}}>{linkNameRead}</span></p>
                {readMore && extraContentRead}
            </div>
            <div className='border-card'>
                <p className='border-card-text'>DON’T MISS IT OUT !</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. <span className="read-more-link mb-2" onClick={()=>{setreadMore(!readMore)}}>{linkNameRead}</span></p>
                {readMore && extraContentRead}
            </div>
        </div>
        </div>
    </>
  )
}

export default Notifications