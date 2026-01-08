import { useContext,useState, useEffect } from 'react'
import './App.css'
import Login from './pages/Login'
import Admindashboard from './pages/Admindashboard'
import { getlocalStorage, setlocalStorage } from './utils/LocalStorage'
import { AuthContext } from "./context/AuthProvider"
import EmployeeDashboard from "./pages/EmployeeDashboard"

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData , setUserData] = useContext(AuthContext)

  useEffect(()=>{
    setlocalStorage()
    getlocalStorage()
  })

  
  useEffect(()=> {
    const checkLoginStatus = () => {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    }

    checkLoginStatus()
      
  }, [])

  const handleLogin = (email,password) => {
    if (email == 'admin@me.com' && password =='123'){
        setUser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } 
    else if (userData) {
      const employee = userData.find((e)=>email == e.email && e.password == password)
      if (employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:
      employee}))     
      } 
    }
    else {
      alert('Invalid Credentials')
    }
  }


  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />:''}
    {user == 'admin' ? <Admindashboard changeUser={setUser} data={loggedInUserData}  /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser}  data={loggedInUserData}/> : null)}
    </>
  )
}

export default App
