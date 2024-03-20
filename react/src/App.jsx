import React from "react";
import "./App.css";
import Body from './components/body/body.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from "./pages/IngresaPages/IngresaPage";
import RegistrationForm from "./pages/RegistratePages/RegistratePage";
import axios from "axios"

function App() {
  const url = "https://red-social-opju.onrender.com/"

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      axios
        .get(url + "/data")
        .then((el) => {
          console.log("this is data", el)
          setData(el.data)
          setLoading(false)
        })
        .catch((err) => console.log(err))
    }, 1000)
    return () => clearTimeout(timeOut)
  }, []);
  if (loading) {
    return (
      <div className="App">
        <h1>Loading please wait</h1>
      </div>
    )
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/ingresa" element={<LoginForm />} />
          <Route path="/registrate" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;