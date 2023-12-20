import React from 'react';
import { Route, BrowserRouter,Routes} from 'react-router-dom';

import routes from './components/pages/index';

function App() {

  return (
      <BrowserRouter>
          <Routes>
         
            {
                routes.map((route, idx) => (
                    <Route exact path={route.path} element={route.component} key={idx} ></Route>
                   
                ))

              }

           </Routes>

      </BrowserRouter>
  );
}

export default App;

