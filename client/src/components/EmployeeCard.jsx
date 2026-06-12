import React from 'react';

export default function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>{employee.name}</h3>
      <p style={{ margin: '5px 0', color: '#64748b' }}>📧 {employee.email}</p>
      <p style={{ margin: '5px 0', color: '#64748b' }}>💼 {employee.position} ({employee.department})</p>
      <p style={{ margin: '5px 0', fontWeight: 'bold', color: '#0f172a' }}>💰 Salary: ${employee.salary.toLocaleString()}</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button onClick={() => onEdit(employee)} style={{ flex: 1, background: '#eab308', color: '#fff', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
        <button onClick={() => onDelete(employee._id)} style={{ flex: 1, background: '#ef4444', color: '#fff', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
      </div>
    </div>
  );
}
