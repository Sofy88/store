import styled from "styled-components";
import Logo from "../../Pictures/logo.png"
//import { NavLink } from "react-router-dom";
import Account from "../../Pictures/account-circle.png"
import Menu from "../Menu/Menu";

const defaultMenuConfig = [
    {id:1, name:"Best Sellers", active},
    {id:2, name:"Clothing", active}, 
    {id:3, name:"Home", active}, 
    {id:4, name:"Office", active},
    {id:5, name:"Sports"}
];

/* header missions
1.display the logo and the acount imgs
2.create a menu component witch display the array items by mapping
3.reorganise the header with the given zeplin design.
4.make the header responsie for mobile and desktop
5,create a drawer menu that will display in the menu component.

*/

const Header = () => {
    return (
        <StyledHeader>
            <StyledLogo src={Logo} alt="Logo"></StyledLogo>
            <Menu menuItems={defaultMenuConfig}></Menu>
            <StyledAccountImg src={Account} alt="Account"></StyledAccountImg>
        </StyledHeader>
    )
}
const StyledHeader=styled.header`
  display: flex;
  background-color: #1a223e;
  padding: 21px;
  align-items: flex-end;
`;

const StyledLogo=styled.img`
  
  padding-right: 98px;
  align-self: center;
  padding-left: 64px;

`;

const StyledMenu=styled.nav`
  //width: 97px;
 // height: 20px;
  //flex-grow: 0;
  //font-family: Assistant;
  font-size: 20px;
  //font-stretch: normal;
  //font-style: normal;
  //line-height: 1;
  //letter-spacing: normal;
 // text-align: right;
  color: #fff;
  font-family: Assistant;
  display: inline;
 
`;

const StyledAccountImg=styled.img`
  align-self: center;
  margin-left: auto;
  padding-right: 36px;

  /*flex-grow: 0;
  color: #fff;
  width: 36px;
  height: 36px;
  margin: -40px 0px 21px 1500px;
  object-fit: contain;*/
`;

const MenuItem=styled.a`
    color: #fff;
    font-size: 20px;

`;


export default  Header;
