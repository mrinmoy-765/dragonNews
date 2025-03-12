import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold">Find Us on</h1>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook>Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram></FaInstagram>Instagaram
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter></FaTwitter>Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
