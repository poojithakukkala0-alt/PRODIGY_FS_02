import React, { useState } from 'react';
import { addEmployee } from '../services/api';

export default function AddEmployee({ refreshData, setView }) {
  const [form, setForm] = useState({ name: '', email: '', position: '', department: '', salary: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee(form);
      refreshData();
      setView('list');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add employee');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Add New Employee</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Email Address" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Job Position" value={form.position} onChange={e => setForm({...form, position: e.target.value})} required />
        <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Department" value={form.department} onChange={e => setForm({...form, department: e.target.value})} required />
        <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Salary" type="number" value={form.salary} onChange={e => setForm({...form, salary: e.target.value})} required />
        <button type="submit" style={{ padding: '12px', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Save Employee</button>
      </form>
    </div>
  );
}
