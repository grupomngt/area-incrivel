import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { DiNapoliI } from "./pages/DiNapoliI/index.tsx";
import { DiNapoliII } from "./pages/DiNapoliII/index.tsx";
import { ToastContainer } from "react-toastify";
import { WhatsappButton } from "./components/elements/WhatsappButton/index.tsx";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLote } from "./pages/GoogleLotes/index.tsx";
import { Qr } from "./pages/QR/index.tsx";
import { GoogleCasa } from "./pages/GoogleCasa/index.tsx";
import { Ravena } from "./pages/Ravena/index.tsx";
import { Siena } from "./pages/Siena/index.tsx";

function WhatsappRedirect() {
  window.location.href =
    "https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20empreendimentos%20da%20%C3%81rea%20Incr%C3%ADvel!";
  return null; // Não renderiza nada
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/" />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/di-napoli-i",
    element: <DiNapoliI />,
  },
  {
    path: "/di-napoli-ii",
    element: <DiNapoliII />,
  },
  {
    path: "/ravena",
    element: <Ravena />,
  },
  {
    path: "/siena",
    element: <Siena />,
  },
  {
    path: "/siena",
    element: <DiNapoliII />,
  },
  {
    path: "/dn2-folder",
    element: <WhatsappRedirect />,
  },
  {
    path: "/venda-terreno",
    element: <GoogleLote />,
  },
  {
    path: "/venda-casa",
    element: <GoogleCasa />,
  },
  {
    path: "/dn1folder-qr1",
    element: <Navigate to="/di-napoli-i" replace />,
  },
  {
    path: "/dn1folder-qr2",
    element: (
      <Qr
        path="/docs/MAPEAMENTO-DINAPOLII.pdf"
        name="Mapeamento - Di Napoli I"
      />
    ),
  },
  {
    path: "/dn2folder-qr1",
    element: <Navigate to="/di-napoli-ii" replace />,
  },
  {
    path: "/dn2folder-qr1",
    element: (
      <Qr
        path="/docs/MAPEAMENTO-DINAPOLII.pdf"
        name="Mapeamento - Di Napoli II"
      />
    ),
  },
  {
    path: "/ravenafolder-qr1",
    element: <Navigate to="/ravena" replace />,
  },
  {
    path: "/ravenafolder-qr2",
    element: (
      <Qr path="/docs/MAPEAMENTO-RAVENA.pdf" name="Mapeamento - Ravena" />
    ),
  },
  {
    path: "/sienafolder-qr1",
    element: <Navigate to="/siena" replace />,
  },
  {
    path: "/sienafolder-qr2",
    element: <Qr path="/docs/MAPEAMENTO-SIENA.pdf" name="Mapeamento - Siena" />,
  },
  {
    path: "/md39",
    element: (
      <Qr
        path="/docs/Memorial_Descritivo_Casa_Modular-39m2.pdf"
        name="Memorial Descritivo - Casa Modular 39 m²"
      />
    ),
  },
  {
    path: "/md48",
    element: (
      <Qr
        path="/docs/Memorial_Descritivo_Casa_Modular-48m2.pdf"
        name="Memorial Descritivo - Casa Modular 48 m²"
      />
    ),
  },
  {
    path: "/md48s",
    element: (
      <Qr
        path="/docs/Memorial_Descritivo_Casa_Modular-48m2-suite.pdf"
        name="Memorial Descritivo - Casa Modular 48 m² - Suíte"
      />
    ),
  },
  {
    path: "/md57",
    element: (
      <Qr
        path="/docs/Memorial_Descritivo_Casa_Modular-57m2.pdf"
        name="Memorial Descritivo - Casa Modular 57 m²"
      />
    ),
  },
  {
    path: "/c52",
    element: (
      <Qr
        path="/docs/Memorial_Descritivo_Casa_Modular-39m2.pdf"
        name="Memorial Descritivo - Casa Modular 39 m2"
      />
    ),
  },
  {
    path: "/c60",
    element: (
      <Qr
        path="/docs/Memorial_Descritivo_Casa_Modular-39m2.pdf"
        name="Memorial Descritivo - Casa Modular 39 m2"
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
    <WhatsappButton />
  </React.StrictMode>
);
