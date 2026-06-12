import axios from 'axios';

// The base URL connects your frontend directly to your live backend server
const API = axios.create({ baseURL: 'https://prodigy-fs-02-p8oj.onrender.com' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth API Endpoints (Fixed: Added /api prefix)
export const login = (formData) => API.post('/api/auth/login', formData);
export const register = (formData) => API.post('/api/auth/register', formData);

// Employee CRUD API Endpoints (Fixed: Added /api prefix)
export const fetchEmployees = () => API.get('/api/employees');
export const fetchEmployeeById = (id) => API.get(`/api/employees/${id}`);
export const addEmployee = (data) => API.post('/api/employees', data);
export const updateEmployee = (id, data) => API.put(`/api/employees/${id}`, data);
export const deleteEmployee = (id) => API.delete(`/api/employees/${id}`);
