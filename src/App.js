import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importação de paginas
import Login from "./components/pages/auth/Login";
import Home from './components/Home'
import Register from "./components/pages/auth/Register";
import MyPets from "./components/pages/pets/MyPets";
import AddPet from './components/pages/pets/AddPet';
import EditPet from "./components/pages/pets/EditPets";
import PetDetails from "./components/pages/pets/PetDetails";
//importação de components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Message from "./components/layout/Message";
import Profile from "./components/pages/user/Profile";

//contexts
import { UserProvider } from "./context/UserContext";
import MyAdoptions from './components/pages/pets/myAdoptions';


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
                <Route path="/pet/edit/:id" exact element={<EditPet />} />                
                <Route path="/pet/:id" exact element={<PetDetails />} />
                <Route path="/pet/myadoptions" exact element={<MyAdoptions />} />
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
