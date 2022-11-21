import React from 'react'
import Container from '../components/Container';
import Header from '../components/Header';
import EmptyCart from '../components/EmptyCart/index';
import Sucess from '../components/Sucess/index';


function App() {
  return (
    <div className="App">
     <Header />
     <Container />
     <EmptyCart/>
     <Sucess />

    </div>
  );
}

export default App;
