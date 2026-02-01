import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MyResultPage from './components/pages/MyResultPage'

// admin
import AdminLogin from './admin/pages/AdminLogin'
import AdminDashboard from './admin/pages/AdminDashboard'
import LanguageResult from './admin/pages/LanguageResult'
// ================= USER PROTECTED ROUTE =================
function RequireAuth({ children }) {
  const isLoggedIn = Boolean(localStorage.getItem("authToken"))
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

// ================= ADMIN PROTECTED ROUTE =================
function RequireAdmin({ children }) {
  const isAdminLoggedIn = Boolean(localStorage.getItem("adminToken"))
  const location = useLocation()

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  return children
}

function App() {
  return (
    <Routes>
      {/* ---------- USER ROUTES ---------- */}
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      <Route
        path='/results'
        element={
          <RequireAuth>
            <MyResultPage />
          </RequireAuth>
        }
      />

      {/* ---------- ADMIN ROUTES ---------- */}
      <Route path='/admin/login' element={<AdminLogin />} />

      <Route
        path='/admin/dashboard'
        element={
          <RequireAdmin>
            <AdminDashboard />
          </RequireAdmin>
        }
      />

      <Route
        path="/admin/dashboard/:language"
        element={
          <RequireAdmin>
            <LanguageResult />
          </RequireAdmin>
        }
      />


      {/* ---------- FALLBACK ---------- */}
      <Route path='*' element={<Navigate to="/" />} />


    </Routes>
  )
}

export default App
