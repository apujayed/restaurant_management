import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import animation from "react-animations/lib/swing";
import { primaryColor } from "../containers/Products";
// import { cartTotalSelector } from "../store/selectors";
import { toggle } from "../store/uiSlice";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from "../images/logo.png"
import { IconButton } from '@mui/material';
const styledAnimation = keyframes`${animation}`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background: #002741;
  color: #fff;
`;

const NavTitle = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding-right: 8px;
  flex: 1;
  font-size: 18px;
  user-select: none;

  svg {
    margin-right: 8px;
  }
`;

const NavIconWrapper = styled.div`
  position: relative;
`;

const Bubble = styled.div`
  position: absolute;
  top: -40%;
  right: -40%;
  padding: 0 4px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  background-color: ${primaryColor};
  border-radius: 2px;
  animation: ${(p) => (p.change ? styledAnimation : null)} 1s;
`;

const Nav = () => {
  // const total = useSelector(cartTotalSelector);
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);

  // useEffect(() => {
  //   if (total !== 0) {
  //     setChange(true);

  //     setTimeout(() => {
  //       setChange(false);
  //     }, 1000);
  //   }
  // }, [total]);

  return (
    <NavContainer>
      <NavTitle>
       <img className="title_logo" src={logo} alt="" height="40" width="40"/>
               Restaurant Name
      </NavTitle>
      <NavIconWrapper
        onClick={() => {
          dispatch(toggle());
        }}
      >
        {/* <Bubble change={change}>{total}</Bubble> */}
        <IconButton style={{color:"white"}}>
        <AddShoppingCartIcon/>
     </IconButton>
      </NavIconWrapper>
    </NavContainer>
  );
};

export default Nav;
