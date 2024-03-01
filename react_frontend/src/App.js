
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Blogs from "./pages/blogs";

 
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>S
                    <Route path="/" exact element= {<Home/>}></Route>
                    <Route path="/about" exact element = {<About/>}></Route>
                    <Route path="/blogs" exact element = {<Blogs/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
        
    );
}
 
export default App;