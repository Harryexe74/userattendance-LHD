import React, { useState } from 'react';

// Sample data for employees
const employees = [
  {
    id: 'E001',
    name: 'John Michael',
    email: 'john@creative-tim.com',
    role: 'Employee',
    organization: 'Organization',
    status: 'Active',
    employedDate: '23/04/2023',
    dailySalary: 150,
    totalWorkingDays: 20,
    totalAbsentDays: 2,
    totalLeaveDays: 1,
    totalLateDays: 3,
    totalOffDays: 1,
    totalSalary: 3000,
    netSalary: 2800,
    month: 'September',
    year: 2023,
    officeInTime: '9:00 AM',
    officeOutTime: '5:00 PM',
    avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
  },
  {
    id: 'E002',
    name: 'sdasf',
    email: 'john@.com',
    role: 'Employee',
    organization: 'Organization',
    status: 'Active',
    employedDate: '23/04/2023',
    dailySalary: 0,
    totalWorkingDays: 0,
    totalAbsentDays: 0,
    totalLeaveDays: 0,
    totalLateDays: 0,
    totalOffDays: 0,
    totalSalary: 0,
    netSalary: 0,
    month: 'September',
    year: 2023,
    officeInTime: '9:00 AM',
    officeOutTime: '5:00 PM',
    avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
  },
  {
    id: 'E003',
    name: 'sdasf',
    email: 'john@.com',
    role: 'Employee',
    organization: 'Organization',
    status: 'Active',
    employedDate: '23/04/2023',
    dailySalary: 0,
    totalWorkingDays: 0,
    totalAbsentDays: 0,
    totalLeaveDays: 0,
    totalLateDays: 0,
    totalOffDays: 0,
    totalSalary: 0,
    netSalary: 0,
    month: 'September',
    year: 2023,
    officeInTime: '9:00 AM',
    officeOutTime: '5:00 PM',
    avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
  },
  {
    id: 'E004',
    name: 'sdasf',
    email: 'john@.com',
    role: 'Employee',
    organization: 'Organization',
    status: 'Active',
    employedDate: '23/04/2023',
    dailySalary: 0,
    totalWorkingDays: 0,
    totalAbsentDays: 0,
    totalLeaveDays: 0,
    totalLateDays: 0,
    totalOffDays: 0,
    totalSalary: 0,
    netSalary: 0,
    month: 'September',
    year: 2023,
    officeInTime: '9:00 AM',
    officeOutTime: '5:00 PM',
    avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
  },
 
  // Add more employee data if needed
];

const AddEmployeelist = () => {
  const [employeeStatus, setEmployeeStatus] = useState(
    employees.reduce((acc, employee) => {
      acc[employee.id] = employee.status === 'Active';
      return acc;
    }, {})
  );

  const [selectedEmployee, setSelectedEmployee] = useState(null); // State to hold selected employee for editing
  const [showEditForm, setShowEditForm] = useState(false); // State to show/hide the form

  const handleToggleStatus = (employeeId) => {
    setEmployeeStatus((prevStatus) => ({
      ...prevStatus,
      [employeeId]: !prevStatus[employeeId],
    }));
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setShowEditForm(true); // Show the form when the edit icon is clicked
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setSelectedEmployee((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like updating the employee list
    console.log('Updated Employee Data:', selectedEmployee);
    setShowEditForm(false); // Hide form after submitting
  };

  return (
    <div className="max-w-[1080px] mx-auto">
      <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-4 py-2 text-center  text-slate-700 transition-all text-3xl"
        >
          <b>Employee List</b>.
        </a>
      </div>
      <div className="relative flex flex-col w-[100wh] h-full  text-slate-700 bg-white shadow-lg rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-800">Employees List</h3>
          </div>
        </div>
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full mt-4 text-left table-auto">
            <thead>
              <tr>
                {[
                  'ID', 'Member', 'Role', 'Organization', 'Status', 'Employed Date',
                  'Daily Salary', 'Total Working Days', 'Total Absent Days', 'Total Leave Days',
                  'Total Late Days', 'Total Off Days', 'Total Salary', 'Net Salary', 'Month', 
                  'Year', 'Office In Time', 'Office Out Time', 'Actions'
                ].map((header) => (
                  <th key={header} className="p-4 transition-colors cursor-pointer border-b border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">{header}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id} className={`${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                  <td className="p-4 border-b border-slate-200">{employee.id}</td>
                  <td className="p-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <img src={employee.avatar} alt={employee.name} className="relative inline-block h-9 w-9 rounded-full object-cover object-center" />
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold text-slate-700">{employee.name}</p>
                        <p className="text-sm text-slate-500">{employee.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-slate-200">{employee.role}</td>
                  <td className="p-4 border-b border-slate-200">{employee.organization}</td>
                  <td className="p-4 border-b border-slate-200">
                    <div className="flex items-center">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={employeeStatus[employee.id]}
                          onChange={() => handleToggleStatus(employee.id)}
                        />
                        <div className="w-12 h-7 bg-gray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:bg-green-500 relative transition-all duration-300">
                          <div
                            className={`absolute top-0.5 w-6 h-6 bg-white rounded-full border border-gray-300 transition-transform duration-300 ${
                              employeeStatus[employee.id] ? 'translate-x-5' : 'translate-x-0.5'
                            }`}
                          ></div>
                        </div>
                        <span className={`ml-3 text-sm font-medium ${employeeStatus[employee.id] ? 'text-green-600' : 'text-red-500'}`}>
                          {employeeStatus[employee.id] ? 'Active' : 'Inactive'}
                        </span>
                      </label>
                    </div>
                  </td>
                  <td className="p-4 border-b border-slate-200">{employee.employedDate}</td>
                  <td className="p-4 border-b border-slate-200">${employee.dailySalary}</td>
                  <td className="p-4 border-b border-slate-200">{employee.totalWorkingDays}</td>
                  <td className="p-4 border-b border-slate-200">{employee.totalAbsentDays}</td>
                  <td className="p-4 border-b border-slate-200">{employee.totalLeaveDays}</td>
                  <td className="p-4 border-b border-slate-200">{employee.totalLateDays}</td>
                  <td className="p-4 border-b border-slate-200">{employee.totalOffDays}</td>
                  <td className="p-4 border-b border-slate-200">${employee.totalSalary}</td>
                  <td className="p-4 border-b border-slate-200">${employee.netSalary}</td>
                  <td className="p-4 border-b border-slate-200">{employee.month}</td>
                  <td className="p-4 border-b border-slate-200">{employee.year}</td>
                  <td className="p-4 border-b border-slate-200">{employee.officeInTime}</td>
                  <td className="p-4 border-b border-slate-200">{employee.officeOutTime}</td>
                  <td className="p-4 border-b border-slate-200">
                    <button
                      onClick={() => handleEditClick(employee)}
                      className="text-blue-600 hover:text-blue-800 focus:outline-none"
                    >
                      <i className="fas fa-edit"></i> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Employee Form */}
      {showEditForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black  bg-opacity-50">
          <div className=" p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Employee</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block mb-2">Net Salary</label>
                  <input
                    type="number"
                    name="netSalary"
                    value={selectedEmployee?.netSalary || ''}
                    onChange={handleFormChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-2">Office In Time</label>
                  <input
                    type="text"
                    name="officeInTime"
                    value={selectedEmployee?.officeInTime || ''}
                    onChange={handleFormChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-2">Office Out Time</label>
                  <input
                    type="text"
                    name="officeOutTime"
                    value={selectedEmployee?.officeOutTime || ''}
                    onChange={handleFormChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  />
                </div>
              </div>
              <div className="mt-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save</button>
                <button
                  type="button"
                  onClick={() => setShowEditForm(false)}
                  className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEmployeelist;
