import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Utilites/Routes';







function App() {


  return (

    <div className="App">

      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
