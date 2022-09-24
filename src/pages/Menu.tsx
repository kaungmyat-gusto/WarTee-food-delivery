import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { BiSearchAlt } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { BiDish } from "react-icons/bi";
import { Burmese } from "../component/Burmese";
import { BiShoppingBag } from "react-icons/bi";
import logo from "../img/logo.png";

interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: any;
}

const Menu = ({ language, setLanguage, productData }: props) => {
  return (
    <div className="section-menu">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="menu-title-main">
        <h4 className="menu-title">
          {language ? Burmese[0].menuTitle : "Our Menu"}
        </h4>
      </div>
      <div className="menu-search-main">
        <div className="menu-search">
          <input
            type="text"
            className="search"
            placeholder={language ? Burmese[0].search : "search menu"}
          />
          <BiSearchAlt className="search-menu-icon" />
        </div>
        <div className="menu-filter">
          <div className="menu-filter-one">
            <BiDish className="filter-icon-one" />
            <p className="filter-name-one">
              {language ? Burmese[0].filter1 : "Default"}
            </p>
          </div>
          <div className="menu-filter-two">
            <FaHamburger className="filter-icon-two" />
            <p className="filter-name-two">
              {language ? Burmese[0].filter2 : "Burger"}
            </p>
          </div>
          <div className="menu-filter-three">
            <FaPizzaSlice className="filter-icon-three" />
            <p className="filter-name-three">
              {language ? Burmese[0].filter3 : "Pizza"}
            </p>
          </div>
          <div className="menu-filter-four">
            <SiBuymeacoffee className="filter-icon-four" />
            <p className="filter-name-four">
              {language ? Burmese[0].filter4 : "Drink"}
            </p>
          </div>
        </div>
      </div>
      <div className="menupage-list-main">
        <div className="menupage-list-boder">
          <div className="menupage-list-body">
            {productData.map((e: any) => (
              <div className="menupage-list">
                <img className="menupage-img" src={e.imageLink} alt="" />
                <img className="menupage-logo" src={logo} alt="" />
                <div className="menupage-info">
                  <div className="menupage-text">
                    <p className="mp-name">{e.typeFood}</p>
                    <p className="mp-price">{e.price} Ks</p>
                  </div>
                  <div className="mp-add">
                    <BiShoppingBag className="mp-add-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
