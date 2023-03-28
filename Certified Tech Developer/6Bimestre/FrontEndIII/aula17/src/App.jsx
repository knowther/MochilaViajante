import { useState } from "react";
import HomePage from "./pages/home";
import FormularioPage from "./pages/formulario";
import NotFoundPage from "./pages/not-found";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario/:id" element={<FormularioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
