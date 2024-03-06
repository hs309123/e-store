import { useEffect, useState } from "react"
import ProtectedRoute from "./RoutePath/ProtectedRoute"
import PublicRoute from "./RoutePath/PublicRoute"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import { useFetchUser } from "./RouterFunctions/loginAndSignup"


const App = () => {

  const [login, setLogin] = useState(true)

  const { fetchFunc, isLoading, isSuccess, data } = useFetchUser()

  useEffect(() => {
    if (isSuccess) {
      setLogin(true)
    }
    else if (!isSuccess) {
      setLogin(false)
    }
    console.log(isLoading);
  }, [isSuccess, isLoading, data])

  useEffect(() => {
    fetchFunc()
  }, [])


  return (
    isLoading ? <p>Loading ...</p>
      : <div>
        <Navbar login={login} />
        {login ? <ProtectedRoute /> : <PublicRoute />}
        <Footer />
      </div>
  )
}

export default App
