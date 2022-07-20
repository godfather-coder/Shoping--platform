import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: rebeccapurple;
  position: absolute;
  bottom: 0;
  width: 94%;
  height: 30%;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    margin: 0 auto;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: auto 40px;
`;  
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
`;
export const Prop = styled(Link) `
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #1c2c87;
      transition: 200ms ease-in;
  }
`;
export const Col_name = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;