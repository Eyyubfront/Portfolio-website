
import { Route, Routes } from "react-router"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Projects from "../Pages/Projects"
import Skils from "../Pages/Skils"
import Contact from "../Pages/Contact"
import Experience from "../Pages/Experience"
import Cv from "../Pages/Cv"

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skils" element={<Skils />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/cv" element={<Cv />} />
            </Routes>
        </>
    )
}
export default Routing