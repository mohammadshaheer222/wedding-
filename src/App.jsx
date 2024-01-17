import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom"

const App = () => {
  return(
    <>
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Route>
      </Routes>
    </div>
    </>
  )
}
export default App;