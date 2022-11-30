import React from "react";
import logo from "../../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-12">
            <div>
                <img src={logo} alt="" className="w-14" />
                <p className="font-bold">
                    SecondSet Ltd. <br />
                    Providing reliable tech since 2022
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
