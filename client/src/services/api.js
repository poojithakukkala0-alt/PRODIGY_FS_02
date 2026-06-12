import axios from 'axios';

const API = axios.create({ 
  baseURL: 'https://onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth API Endpoints
export const login = (formData) => API.post('/api/auth/login', formData);
export const register = (formData) => API.post('/api/auth/register', formData);

// Employee CRUD API Endpoints
export const fetchEmployees = () => API.get('/api/employees');
export const fetchEmployeeById = (id) => API.get(`/api/employees/${id}`);
export const addEmployee = (data) => API.post('/api/employees', data);
export const updateEmployee = (id, data) => API.put(`/api/employees/${id}`, data);
export const deleteEmployee = (id) => API.delete(`/api/employees/${id}`);
