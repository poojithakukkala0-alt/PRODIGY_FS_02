import React, { useState } from 'react';
import { updateEmployee } from '../services/api';

export default function EditEmployee({ currentEmployee, refreshData, setView }) {
  const [form, setForm] = useState({ ...currentEmployee });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(currentEmployee._id, form);
      refreshData();
      setView('list');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update record');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Edit Employee Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Position" value={form.position} onChange={e => setForm({...form, position: e.target.value})} required />
        <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Department" value={form.department} onChange={e => setForm({...form, department: e.target.value})} required />
        <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Salary" type="number" value={form.salary} onChange={e => setForm({...form, salary: e.target.value})} required />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{ flex: 1, padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Update</button>
          <button type="button" onClick={() => setView('list')} style={{ flex: 1, padding: '12px', background: '#64748b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
