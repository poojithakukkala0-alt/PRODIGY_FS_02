import React from 'react';

export default function Sidebar({ currentView, setCurrentView }) {
  const menuItems = [
    { id: 'dashboard', label: '📊 Dashboard' },
    { id: 'list', label: '👥 Employee List' },
    { id: 'add', label: '➕ Add Employee' }
  ];

  return (
    <div style={{ width: '240px', background: '#334155', minHeight: 'calc(100vh - 54px)', padding: '20px 0' }}>
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setCurrentView(item.id)}
          style={{
            width: '100%',
            padding: '15px 20px',
            background: currentView === item.id ? '#0f172a' : 'transparent',
            color: '#fff',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background 0.2s'
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
