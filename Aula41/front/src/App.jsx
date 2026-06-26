import { Routes, Route, Navigate } from 'react-router'

import Login from './pages/Login'
import Cliente from './pages/Cliente'
import Funcionario from './pages/Funcionario'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/cliente"
        element={<Cliente />}
      />

      <Route
        path="/funcionario"
        element={<Funcionario />}
      />
    </Routes>
  )
}

export default App