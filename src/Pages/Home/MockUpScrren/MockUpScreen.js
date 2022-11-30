import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import logo from "../../../assets/logo.png";
import "./MockUpScreen.css";
import { Link } from "react-router-dom";

const MockUpScreen = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="text-center mt-10">
            <div className="mockup-phone border-primary">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1 flex-column justify-evenly">
                        <div>
                            <h1 className="text-2xl">Welcome to</h1>
                            <div className="flex items-center title">
                                <img src={logo} alt="" className="w-12" />
                                SecondSet
                            </div>
                        </div>
                        {user ? (
                            <div>
                                <h1>{user.displayName}</h1>{" "}
                                <h1>{user.email}</h1>
                            </div>
                        ) : (
                            <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MockUpScreen;
