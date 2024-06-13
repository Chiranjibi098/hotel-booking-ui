import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/LoginSignup.css";

function LoginSignup() {
    const [formType, setFormType] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = () => {
        if (!email) {
            setEmailError("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Email address is invalid");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        if (!password) {
            setPasswordError("Password is required");
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
        } else {
            setPasswordError("");
        }
    };

    const handleSubmit = () => {
        validateEmail();
        validatePassword();

        if (!emailError && !passwordError) {
            console.log("Form submitted successfully");
        }
    };

    const renderForm = () => {
        switch (formType) {
            case "login":
                return (
                    <div className="auth-form">
                        <label className="mail-lable" htmlFor="">
                            <span className="star">*</span> Enter your registered mail id
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={validateEmail}
                        /> <br />
                        {emailError && <p className="error-message">{emailError}</p>}
                        <div className="gap">

                        </div>
                        <label className="pass-lable" htmlFor="" style={{paddingTop:"10px"}}>
                            <span className="star">*</span> Enter your password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePassword}
                        />
                        {passwordError && <p className="error-message">{passwordError}</p>}
                    </div>
                );
            case "createAccount":
                return (
                    <div className="auth-form">
                        <label className="mail-label" htmlFor="email">
                            <span className="star">*</span> Enter your mail id
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="pass-label" htmlFor="password">
                            <span className="star">*</span> Create a password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                );
            case "forgetPassword":
                return (
                    <div className="auth-form">
                        <label className="mail-label" htmlFor="email">
                            <span className="star">*</span> Enter your registered mail id
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    const renderButtonLabel = () => {
        switch (formType) {
            case "login":
                return "Sign in";
            case "createAccount":
                return "Create account";
            case "forgetPassword":
                return "Reset password";
            default:
                return "Submit";
        }
    };

    return (
        <div className="wrapper-login">
            <div className="parent">
                <div className="child-one">
                    <div className="navbar-logo2">goforit</div>
                    {renderForm()}
                    <div className="btn-login">
                        <button className="SigninBtn" onClick={handleSubmit}>
                            {renderButtonLabel()}
                        </button>
                        {formType === "login" && (
                            <label className="otherSign" htmlFor="">
                                or you can login with
                            </label>
                        )}
                        {formType !== "login" && (
                            <div
                                className="backBtn-sign"
                                onClick={() => setFormType("login")}
                            >
                                Back to Sign in
                            </div>
                        )}
                    </div>
                </div>
                <div className="child-two">
                    {formType === "login" && (
                        <div className="social-icons-log">
                            <div className="social-google">
                                <svg
                                    width="35"
                                    height="35"
                                    viewBox="0 0 90 92"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M89.9999 47.0017C89.9999 43.9017 89.6999 40.7017 89.1999 37.7017H45.8999V55.4017H70.6999C69.6999 61.1017 66.3999 66.1017 61.4999 69.3017L76.2999 80.8017C84.9999 72.7017 89.9999 60.9017 89.9999 47.0017Z"
                                        fill="#4280EF"
                                    />
                                    <path
                                        d="M45.8999 91.8018C58.2999 91.8018 68.6999 87.7018 76.2999 80.7018L61.4999 69.3018C57.3999 72.1018 52.0999 73.7018 45.8999 73.7018C33.8999 73.7018 23.7999 65.6018 20.0999 54.8018L4.8999 66.5018C12.6999 82.0018 28.4999 91.8018 45.8999 91.8018Z"
                                        fill="#34A353"
                                    />
                                    <path
                                        d="M20.0999 54.7018C18.1999 49.0018 18.1999 42.8018 20.0999 37.1018L4.8999 25.3018C-1.6001 38.3018 -1.6001 53.6018 4.8999 66.5018L20.0999 54.7018Z"
                                        fill="#F6B704"
                                    />
                                    <path
                                        d="M45.8999 18.2017C52.3999 18.1017 58.7999 20.6017 63.4999 25.1017L76.5999 11.9017C68.2999 4.10174 57.2999 -0.0982547 45.8999 0.00174529C28.4999 0.00174529 12.6999 9.80175 4.8999 25.3017L20.0999 37.1017C23.7999 26.2017 33.8999 18.2017 45.8999 18.2017Z"
                                        fill="#E54335"
                                    />
                                </svg>
                            </div>
                            <div className="social-facebook">
                                <svg
                                    width="35"
                                    height="35"
                                    viewBox="0 0 95 95"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_535_183)">
                                        <path
                                            d="M94 47C94 21.0426 72.9574 0 47 0C21.0426 0 0 21.0426 0 47C0 70.4591 17.1873 89.9031 39.6562 93.429V60.5859H27.7227V47H39.6562V36.6453C39.6562 24.8659 46.673 18.3594 57.4088 18.3594C62.5511 18.3594 67.9297 19.2773 67.9297 19.2773V30.8438H62.0031C56.1646 30.8438 54.3438 34.4666 54.3438 38.1835V47H67.3789L65.2951 60.5859H54.3438V93.429C76.8129 89.9031 94 70.4591 94 47Z"
                                            fill="#1877F2"
                                        />
                                        <path
                                            d="M65.2951 60.5859L67.3789 47H54.3438V38.1835C54.3438 34.4666 56.1644 30.8438 62.0031 30.8438H67.9297V19.2773C67.9297 19.2773 62.5509 18.3594 57.4088 18.3594C46.673 18.3594 39.6562 24.8659 39.6562 36.6453V47H27.7227V60.5859H39.6562V93.429C42.049 93.8045 44.5017 94 47 94C49.4983 94 51.9508 93.8045 54.3438 93.429V60.5859H65.2951Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_535_183">
                                            <rect width="94" height="94" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    )}
                    {formType === "login" && (
                        <label className="forgot-label" htmlFor="">
                            <Link
                                className="forget-link"
                                onClick={() => setFormType("forgetPassword")}
                            >
                                forget password
                            </Link>{" "}
                            or{" "}
                            <Link
                                className="create-link"
                                onClick={() => setFormType("createAccount")}
                            >
                                create an account
                            </Link>
                        </label>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;