
import { useParams, useNavigate, Link } from "react-router-dom";
import voitures from "../data/voitures.jsx";


export default function DetailVoiture() {
  const { id } = useParams();
  const navigate = useNavigate();

  const voiture = voitures.find(
    (v) => v.id === Number(id)
  );

  if (!voiture) {
    return (
      <div>
        <h2>Cette voiture n'existe pas.</h2>
        <Link to="/voitures">Voir les voitures</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{voiture.marque} {voiture.modele}</h1>

      <p>Année : {voiture.annee}</p>
      <p>Carburant : {voiture.carburant}</p>
      <p>Boîte : {voiture.boite}</p>
      <p>Places : {voiture.places}</p>
      <p>Prix : {voiture.prix} DH / jour</p>
      <p>
        Statut : {voiture.disponible ? "Disponible" : "Louée"}
      </p>

      <button onClick={() => navigate(-1)}>
        ← Retour
      </button>
    </div>
  );
}
