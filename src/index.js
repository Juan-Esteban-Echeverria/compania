import React from 'react';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css';
import App from './App';

import SobreNosotros from './pages/Sobre-Nosotros';
import Breve from './pages/Breve-Eternidad';
import JuanLuis from './pages/Juan-Luis'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "Sobre-Nosotros",
    element: (
      <SobreNosotros/>
    ),
  },
  {
    path: "Breve-Eternidad",
    element: (
      <Breve/>
    ),
  },
  {
    path: "Juan-Luis-De-Camino",
    element: (
      <JuanLuis/>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



