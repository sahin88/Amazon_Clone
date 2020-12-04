import React from "react";
import "./css/Header.css";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header(props) {
  const [{ basket }] = useStateValue();
  const [{ user }, dispatch] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    } else {
      try {
        props.history.push("/login");
      } catch (error) {
        console.log("catch", error);
      }
    }
  };
  console.log("dedigimde duramadim", user?.email);
  return (
    <nav className="header">
      <Link to="/login">
        <img className="header__logo" src="amazon_logo.jpeg" alt="" />
      </Link>
      <div className="header__search">
        <input type="teext" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionOne">{user?.email} </span>
            <span className="header__optionTwo">
              {" "}
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to={user ? "/" : "/login"} className="header__link">
          <div className="header__option">
            <span className="header__optionOne"> Returns</span>
            <span className="header__optionTwo"> &Orders</span>
          </div>
        </Link>
        <Link to={user ? "/" : "/login"} className="header__link">
          <div className="header__option">
            <span className="header__optionOne"> Your</span>
            <span className="header__optionTwo"> Prime</span>
          </div>
        </Link>
        <Link to={user ? "/checkout" : "/login"} className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionTwo header__basketCounter">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
