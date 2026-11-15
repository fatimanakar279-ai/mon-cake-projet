import { Routes, Route } from "react-router-dom";

import Layout from "./Component/layout.jsx";
import Accueil from "./Accueil.jsx";
import Gateaux from "./gateaux.jsx";
import Contact from "./Contact.jsx";
import "./App.css";

const gateaux = [
  { id: 1, nom: "Gateau au chocolat", image: "/gateau_chocolat.jpg", prix: 15 },
  { id: 2, nom: "Tarte aux fruits", image: "/tarte_fruits.jpg", prix: 12 },
  { id: 3, nom: "Cheesecake", image: "/cheesecake.jpg", prix: 18 }
];

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Accueil />} />
        <Route path="Gateaux" element={<Gateaux gateaux={gateaux} />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}