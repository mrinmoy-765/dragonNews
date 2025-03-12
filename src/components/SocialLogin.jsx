import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3">Login With</h1>
      <div className="*:w-full gap-4">
        <button className="btn mb-4">
          <FaGoogle></FaGoogle>Login With Google
        </button>
        <button className="btn">
          <FaGithub></FaGithub>Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
