import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navabar from "../component/Navbar";

import HomePage from "../pages/HomePage";


const AppRouter = () => (
    <BrowserRouter>
        <Navabar />
        <Routes>
            <Route path="/" element={<HomePage />}/>
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
