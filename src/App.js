import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InvoiceForm from './components/InvoiceForm';
import Login from './components/login.jsx';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="mx-auto max-w-7xl">
          <Routes>
            <Route path="/login.jsx" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <InvoiceForm />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login.jsx" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
