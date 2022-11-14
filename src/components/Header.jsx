import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style.css";
import {Arrow} from './SvgImporter.jsx'


export default function Header(){
    const selector = useSelector(state => state);
    const cartProducts = selector.cartProducts;

    return(
        <header id="header">
            <NavLink to="/products">
                <img className="siteLogo" src="https://logodix.com/logo/19234.png" alt="" />
            </NavLink>

            <form className="search">
                <input type="text" placeholder="Search..."/>
                <button>
                    <Arrow/>
                </button>
            </form>
            {/* <div className="registerLink">
                <img src="https://flaticons.net/icon.php?slug_category=people&slug_icon=employee" alt="" />
                <NavLink to="/registration">Registration</NavLink>
            </div> */}

            <div className="cartLink">
                <img src="https://png2.cleanpng.com/sh/6b03ecc18973d3583d5abdf39ac5df6c/L0KzQYm3U8IxN6ZtiZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tfdzd5Rqius2c4Tygra0kCVxbaNyeeR0ZYSwg7n2kQBqdpgygdV4bj32eLF3kPlvb15neeV0ZYSweLW0VfFjOGo2StZtY3W6Roe1UcgzPGo6UKo6NUK0RYO3WcQyQWE5UJD5bne=/kisspng-computer-icons-grocery-store-supermarket-shopping-icon-shopping-basket-hd-5ab0912ddce766.1824958815215209419048.png" alt="" />
                <NavLink to="/cart">Cart</NavLink>
                <span>{cartProducts.length}</span>
            </div>

        </header>
    )
}