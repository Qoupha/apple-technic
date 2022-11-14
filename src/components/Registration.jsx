import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style.css";
export default function Registration(){
    const selector = useSelector(state => state);
    const dispatch = useDispatch();


    const registration = selector.registration;

    return(
    <div class="login-box_after">
        <div class="login-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required=""></input>
                    <label>Username</label>
                </div>
                <div class="user-box">
                <input type="password" name="" required=""></input>
                <label>Password</label>
                </div>
                <a className="span" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                Submit
                </a>
                <div className="notreg">
                    <a className="notreg" href="">
                        If you not registered, just do it
                    </a>
                </div>
            </form>
        </div>
    </div>

    )
}