import App from './App.jsx'
import ReactDOM from 'react-dom/client'

import './index.css'
import AuthProvider from './context/AuthProvider.jsx'


// localStorage.clear()
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider >
        <App />
  </AuthProvider>

)
