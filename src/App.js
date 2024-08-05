import { useEffect } from 'react';
import './css/index.css';
import { Home, Profile, Login, Register, CreatePost } from './element/pages/index'
import { Header } from './element/partials/index'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'

function App() {
  // Cek apakah user sudah login atau belum
  const navigate = useNavigate()
  useEffect(() => {
    const path = window.location.pathname.split('/')[1].toLowerCase()
    const token = localStorage.getItem('token')

    if(token && (path === 'login' || path === 'register')) {
      navigate('/')
    }
    
    if(!token && path !== 'login' && path !== 'register') {
      navigate('/login')
    }
  }, []);

  // AuthController
  const authController = async (e, method) => {
    e.preventDefault();
    const formData = {}
    for(const input of e.target) {
      if(input.tagName.toLowerCase() !== 'button') {
        if(input.type === 'checkbox') {
          formData[input.name] = input.checked
        } else {
          formData[input.name] = input.value
        } 
      }
    }
    try {
      const response = await axios.post('http://localhost:8000/api/v1/auth/' + method, formData)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('username', response.data.user.username)
      navigate('/')

    } catch(err) {
      console.error(err);
    }
  } 
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login authController={authController}/>} />
      <Route path='/register' element={<Register authController={authController}/>} />
      <Route path='/profile/*' element={<Profile/>} />
      <Route path='/createpost' element={<CreatePost/>} />
    </Routes>
    </>
  );
}

export default App;
