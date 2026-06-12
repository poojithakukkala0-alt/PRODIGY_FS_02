import React from 'react';
import EmployeeCard from '../components/EmployeeCard';

export default function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>All Employees</h2>
      {employees.length === 0 ? (
        <p style={{ color: '#64748b' }}>No employee records found. Click "Add Employee" to create one.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {employees.map((emp) => (
            <EmployeeCard key={emp._id} employee={emp} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
