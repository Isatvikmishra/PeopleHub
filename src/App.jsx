import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useState(null)
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  }, [authData])
  


  const handleLogin = (email, password) =>{

      if(email == 'admin@me.com' && password == '123'){
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
      }else if(authData){

        const employee = authData.employees.find((e)=>email == e.email && password == e.password)
        if(employee){
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data:employee }))
        }

      }
      else{
        alert("Invalid")
      }
  }

 

return (
    <>
      {!user ? <Login handleLogin = {handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
      
  )
}

export default App