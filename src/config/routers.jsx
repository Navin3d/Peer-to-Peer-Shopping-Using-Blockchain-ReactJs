import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../component/Footer";

import Navabar from "../component/Navbar";

import HomePage from "../pages/HomePage";


const AppRouter = () => (
    <BrowserRouter>
        <Navabar />
        <Routes>
            <Route path="/" element={<HomePage />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
);

export default AppRouter;
