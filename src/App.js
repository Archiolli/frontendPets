import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importação de paginas
import Login from "./components/pages/auth/Login";
import Home from './components/Home'
import Register from "./components/pages/auth/Register";
import MyPets from "./components/pages/pets/MyPets";
import AddPet from './components/pages/pets/AddPet';
//importação de components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Message from "./components/layout/Message";
import Profile from "./components/pages/user/Profile";
//contexts
import { UserProvider } from "./context/UserContext";


function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Message />
          <Container>
            <Fragment>
              <Routes>
                <Route path="/user/profile" exact element={<Profile />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/" exact element={<Home />} />
                <Route path="/Register" exact element={<Register />} />
                <Route path="/pet/mypets" exact element={<MyPets />} />
                <Route path="/pet/add" exact element={<AddPet />} />
              </Routes>
            </Fragment>
          </Container>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
