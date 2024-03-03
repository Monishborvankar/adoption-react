import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ImageCard from './Components/ImageCards';
import ImageCardDetails from './Components/ImageCardDetails';

function App() {
  return (
    <Routes>
        <Route path='/' element={<ImageCard heading="Adoption"/>} />
        <Route path='/detailPage/:id' element={<ImageCardDetails />} />
    </Routes>
  );
}

export default App;