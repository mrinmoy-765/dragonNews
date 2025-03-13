import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-lg shadow-lg p-10 rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register Your Account
        </h2>
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-300"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-300"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-300"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-300"
              required
            />
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Register Button */}
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Register
          </button>
        </form>

        {/* Already Have an Account */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            className="text-red-500 font-medium hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
