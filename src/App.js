import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importação de paginas
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/auth/Home";
import Register from "./components/pages/auth/Register";

//importação de components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Fragment>
            <Routes>

              <Route path="/login" exact element={<Login />} />
              <Route path="/" exact element={<Home />} />
              <Route path="/Register" exact element={<Register />} />


            </Routes>
          </Fragment>
        </Container>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
