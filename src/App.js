import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Start from './pages/Start';
import Home from './pages/Home';



function App() {
  return (

<Router>



<Routes>

  <Route exact path="/" element={<Home />} />
  <Route exact path="/guess-the-flag" element={<Start />} />

</Routes>




</Router>
     
  );
}

export default App;

