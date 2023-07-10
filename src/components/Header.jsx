import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import img from '../assets/logo.jpg'
const Header = () => {
  const {cartItems} = useSelector((state) => state.cart);
  return (
    <nav>
   <img src={img} style={{height:'40px',width:'70px'}}/>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
