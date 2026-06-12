import React from "react";
import {
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

export default function Dashboard({ employees = [] }) {
  const totalEmployees = employees.length;

  const totalSalary = employees.reduce(
    (sum, emp) => sum + Number(emp.salary || 0),
    0
  );

  const departments = [
    ...new Set(employees.map((emp) => emp.department)),
  ].length;

  return (
    <div
      style={{
        padding: "30px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "30px" }}>
        <h1
          style={{
            color: "#1e293b",
            marginBottom: "5px",
          }}
        >
          Employee Dashboard 📊
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "16px",
          }}
        >
          Welcome to Employee Management System
        </p>
      </div>

      {/* Statistics Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardBlue}>
          <FaUsers size={40} />
          <h3>Total Employees</h3>
          <h1>{totalEmployees}</h1>
        </div>

        <div style={cardGreen}>
          <FaMoneyBillWave size={40} />
          <h3>Total Payroll</h3>
          <h1>₹{totalSalary.toLocaleString()}</h1>
        </div>

        <div style={cardPurple}>
          <FaBuilding size={40} />
          <h3>Departments</h3>
          <h1>{departments}</h1>
        </div>

        <div style={cardOrange}>
          <FaChartLine size={40} />
          <h3>Performance</h3>
          <h1>100%</h1>
        </div>
      </div>

      {/* Recent Employees */}
      <div
        style={{
          marginTop: "35px",
          background: "#ffffff",
          borderRadius: "15px",
          padding: "25px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            color: "#1e293b",
            marginBottom: "20px",
          }}
        >
          Recent Employees
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#f1f5f9" }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Department</th>
              <th style={thStyle}>Salary</th>
            </tr>
          </thead>

          <tbody>
            {employees.length > 0 ? (
              employees.slice(0, 5).map((emp) => (
                <tr key={emp._id}>
                  <td style={tdStyle}>{emp.name}</td>
                  <td style={tdStyle}>{emp.department}</td>
                  <td style={tdStyle}>
                    ₹{Number(emp.salary).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "#64748b",
                  }}
                >
                  No employees available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const cardBase = {
  color: "white",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0px 5px 15px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const cardBlue = {
  ...cardBase,
  background: "linear-gradient(135deg, #2563eb, #60a5fa)",
};

const cardGreen = {
  ...cardBase,
  background: "linear-gradient(135deg, #059669, #34d399)",
};

const cardPurple = {
  ...cardBase,
  background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
};

const cardOrange = {
  ...cardBase,
  background: "linear-gradient(135deg, #ea580c, #fb923c)",
};

const thStyle = {
  padding: "15px",
  textAlign: "left",
  color: "#334155",
};

const tdStyle = {
  padding: "15px",
  borderBottom: "1px solid #e2e8f0",
};