import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "../node_modules/react-bootstrap/dist/react-bootstrap";

import routes from './components/pages/index';

function App() {

  return (
    <Router>
    <Routes>
      {routes.map((route, idx) => (
        <Route exact path={route.path} element={route.component} key={idx}/>
      ))}
    </Routes>
  </Router>
  );
}

export default App;

