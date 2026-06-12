import React from 'react';

export default function Navbar({ handleLogout }) {
  return (
    <nav style={{ background: '#1e293b', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ margin: 0, fontSize: '20px' }}>💼 Employee Management System</h2>
      <button onClick={handleLogout} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
        Logout
      </button>
    </nav>
  );
}
