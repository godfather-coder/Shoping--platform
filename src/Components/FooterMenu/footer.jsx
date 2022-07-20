import React from 'react'
import Fa from './fa.png';
import Insta from './insta.png';
import Yt from './yt.png';
import {Box, Container, Row, Column, Prop, Col_name} from "./css";
const footer = () => {  
  return (
    <Box>
      <Container>
        <Row>
          <Column>
              <Col_name>About Us</Col_name>
              <Prop to='/blog' activeStyle>Blogs</Prop>
              <Prop to='/company' activeStyle> About "company"</Prop>
              <Prop to='/help' activeStyle>Help center</Prop>
              <Prop to='/why'  activeStyle>Why Us?</Prop>
          </Column>
          <Column><Col_name>Products</Col_name>
              <Prop to ="/category" activeStyle>Categoty</Prop>
              <Prop to ='/foryou' activeStyle>For You</Prop>
              <Prop to ='/bestselers' activeStyle>Best Selers</Prop>
              <Prop to='/sales' activeStyle>Sales</Prop>
          </Column>
          <Column><Col_name>Service</Col_name>
              <Prop to ='/delivery'  activeStyle> Delivery</Prop>
              <Prop to='/dayoff'  activeStyle>Day Off</Prop>
              <Prop to='/work'  activeStyle>Working Hours</Prop>
              <Prop to="/prime" activeStyle>Prime</Prop>
          </Column>
          <Column> <Col_name>Company</Col_name>
              <Prop to="/privacy"  activeStyle> Privacy Policy </Prop>
              <Prop to="/terms"  activeStyle> Terms & Condition </Prop>
              <Prop to="/fee"  activeStyle> Fees </Prop>
          </Column>
          <Column><Col_name>Contact Us</Col_name>
              <Prop to ="/georgia" activeStyle>GEORGIA</Prop>
              <Prop to ="/usa" activeStyle>USA</Prop>
              <Prop to ="/germany" activeStyle>GERMANY</Prop>
              <Prop to ="/china" activeStyle>CHINA</Prop>
          </Column>
          <Column><Col_name>Social</Col_name>
              <a  href='https://www.facebook.com/sandro.gugunishvilu.9' target="_blank" rel="noreferrer">
                <img src={Fa} alt="example"  className='social'/>
              </a>
              <a  href='https://www.instagram.com/ender__warrior__/' target="_blank" rel="noreferrer">
                <img src={Insta} alt="example"  className='social'/>
              </a>
              <a  href='https://www.youtube.com/channel/UCkkYhmt-YWasTho0-uqKXBg' target="_blank" rel="noreferrer">
                <img src={Yt} alt="example"  className='social'/>
              </a>
          </Column>
        </Row> 
      </Container>
    </Box>
  
  );
};
export default footer;
