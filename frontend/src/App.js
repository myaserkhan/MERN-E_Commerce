import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar bg="dark" variant='dark'>
            <Container>
              <Navbar.Brand href="#home">Endomaster</Navbar.Brand>
            </Container>
          </Navbar>
          {/* <Link to='/'>Endomaster</Link> */}
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path='/' element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className='text-center'>All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
