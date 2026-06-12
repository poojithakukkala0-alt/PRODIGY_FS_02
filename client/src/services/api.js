import axios from 'axios';

const API = axios.create({ 
  baseURL: 'https://prodigy-fs-02-p8oj.onrender.com',
  headers: { 'Content-Type': 'application/json' }
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const login = (formData) => API.post('/api/auth/login', formData);
export const register = (formData) => API.post('/api/auth/register', formData);

export const fetchEmployees = () => API.get('/api/employees');
export const fetchEmployeeById = (id) => API.get(`/api/employees/${id}`);
export const addEmployee = (data) => API.post('/api/employees', data);
export const updateEmployee = (id, data) => API.put(`/api/employees/${id}`, data);
export const deleteEmployee = (id) => API.delete(`/api/employees/${id}`);
