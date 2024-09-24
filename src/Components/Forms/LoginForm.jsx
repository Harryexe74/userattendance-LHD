import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!loginId) newErrors.loginId = "Login ID is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Assuming login is successful, store token in localStorage
      localStorage.setItem("authToken", "dummy_token_value");

      // Navigate to the dashboard after login
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: "transparent",
        backgroundImage:
          "url(https://t3.ftcdn.net/jpg/08/64/81/18/360_F_864811849_5fwrozNgem4qkerOV0jtGCCguKWTpxGR.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <img
            src="https://t3.ftcdn.net/jpg/08/64/81/18/360_F_864811849_5fwrozNgem4qkerOV0jtGCCguKWTpxGR.jpg"
            alt="Logo"
            className="mx-auto mb-4 w-16 h-16 rounded-full"
          />
          <h2 className="text-2xl font-semibold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="loginId"
            >
              Login ID *
            </label>
            <input
              type="text"
              id="loginId"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              className={`w-full p-3 rounded border ${
                errors.loginId ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your Login ID"
            />
            {errors.loginId && (
              <p className="text-red-500 text-sm mt-1">{errors.loginId}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password *
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 rounded border ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your Password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pt-8 px-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-sm mb-4"
          >
            SIGN IN
          </button>
          <div className="text-center text-gray-600">Or Login With Google</div>
          <button
            type="button"
            className="w-full mt-2 bg-gray-200 text-gray-700 py-2 rounded-lg flex items-center justify-center"
          >
            <FaGoogle className="mr-2" /> Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
