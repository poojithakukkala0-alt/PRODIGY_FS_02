import React, { useState, useEffect } from 'react';
import { login, register, fetchEmployees, deleteEmployee } from './services/api';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [view, setView] = useState('dashboard');
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Authentication states
  const [isRegister, setIsRegister] = useState(false);
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '' });
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    if (token) loadEmployees();
  }, [token]);

  const loadEmployees = async () => {
    try {
      const res = await fetchEmployees();
      setEmployees(res.data);
    } catch (err) {
      if (err.response?.status === 401) handleLogout();
    }
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = isRegister ? await register(authForm) : await login({ email: authForm.email, password: authForm.password });
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      setAuthError('');
    } catch (err) {
      setAuthError(err.response?.data?.message || 'Authentication error');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setEmployees([]);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to remove this employee?')) {
      await deleteEmployee(id);
      loadEmployees();
    }
  };

  const handleEditTrigger = (employee) => {
    setSelectedEmployee(employee);
    setView('edit');
  };

  if (!token) {
    return (
      <div style={{ maxWidth: '400px', margin: '100px auto', padding: '30px', border: '1px solid #cbd5e1', borderRadius: '8px', fontFamily: 'sans-serif', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#1e293b' }}>{isRegister ? 'Admin Registration' : 'System Login'}</h2>
        {authError && <p style={{ color: '#ef4444', textAlign: 'center' }}>{authError}</p>}
        <form onSubmit={handleAuthSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
          {isRegister && <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }} placeholder="Name" onChange={e => setAuthForm({...authForm, name: e.target.value})} required />}
          <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }} placeholder="Email" type="email" onChange={e => setAuthForm({...authForm, email: e.target.value})} required />
          <input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }} placeholder="Password" type="password" onChange={e => setAuthForm({...authForm, password: e.target.value})} required />
          <button type="submit" style={{ padding: '12px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>{isRegister ? 'Sign Up' : 'Log In'}</button>
        </form>
        <p onClick={() => setIsRegister(!isRegister)} style={{ textAlign: 'center', color: '#2563eb', cursor: 'pointer', marginTop: '15px', fontSize: '14px' }}>
          {isRegister ? 'Already registered? Log in here' : 'Need an admin account? Register here'}
        </p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f8fafc', minHeight: '100vh' }}>
      <Navbar handleLogout={handleLogout} />
      <div style={{ display: 'flex' }}>
        <Sidebar currentView={view} setCurrentView={setView} />
        <div style={{ flex: 1, padding: '20px' }}>
          {view === 'dashboard' && <Dashboard employees={employees} />}
          {view === 'list' && <EmployeeList employees={employees} onEdit={handleEditTrigger} onDelete={handleDelete} />}
          {view === 'add' && <AddEmployee refreshData={loadEmployees} setView={setView} />}
          {view === 'edit' && <EditEmployee currentEmployee={selectedEmployee} refreshData={loadEmployees} setView={setView} />}
        </div>
      </div>
    </div>
  );
}

export default App;
