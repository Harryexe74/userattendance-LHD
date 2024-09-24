// import React, { useState } from "react";

// const SignUpForm = () => {
//   const [formData, setFormData] = useState({
//     logo: null,
//     employeeId: "",
//     firstName: "",
//     lastName: "",
//     joiningDate: "",
//     position: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleLogoChange = (e) => {
//     setFormData({
//       ...formData,
//       logo: e.target.files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add validation and form submission logic here
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     console.log(formData);
//     // Handle form submission (e.g., send data to the backend)
//   };

//   return (
//     <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
//       <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         {/* First Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700">First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleInputChange}
//             className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
//             placeholder="Enter first name"
//           />
//         </div>

//         {/* Last Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleInputChange}
//             className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
//             placeholder="Enter last name"
//           />
//         </div>
//         {/* Employee ID */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Employee ID</label>
//           <input
//             type="text"
//             name="employeeId"
//             value={formData.employeeId}
//             onChange={handleInputChange}
//             className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
//             placeholder="Enter employee ID"
//           />
//         </div>
//         {/* Joining Date */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Joining Date</label>
//           <input
//             type="date"
//             name="joiningDate"
//             value={formData.joiningDate}
//             onChange={handleInputChange}
//             className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
//           />
//         </div>
//         {/* Logo Upload */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Logo</label>
//           <input
//             type="file"
//             name="logo"
//             accept="image/*"
//             onChange={handleLogoChange}
//             className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer"
//           />
//         </div>
//         {/* Position */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Position</label>
//           <input
//             type="text"
//             name="position"
//             value={formData.position}
//             onChange={handleInputChange}
//             className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
//             placeholder="Enter position"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
//             placeholder="Enter password"
//           />
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleInputChange}
//             className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
//             placeholder="Confirm password"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-200"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;
import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    username: "",
    email: "",
    dob: "",
    contactNo: "",
    altContactNo: "",
    designation: "",
    status: "",
    role: "",
    password: "",
    gender: "",
    address: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl text-center font-bold mb-4"> Sign Up</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="employeeId"
          >
            Employee ID
          </label>
          <input
            type="number"
            name="employeeId"
            id="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dob"
          >
            DOB
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contactNo"
          >
            Contact No
          </label>
          <input
            type="number"
            name="contactNo"
            id="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="altContactNo"
          >
            Alternative Contact No
          </label>
          <input
            type="number"
            name="altContactNo"
            id="altContactNo"
            value={formData.altContactNo}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="designation"
          >
            Designation
          </label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={formData.designation}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="status"
          >
            Status
          </label>
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Role</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
