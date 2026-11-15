import voitures from "../data/voitures.jsx";
import Voiture from "../Component/voiture.jsx";

export default function ListeVoitures() {
  return (
    <div className="grille">
      <h1>Nos voitures</h1>

      <p>Nombre total : {voitures.length}</p>

      {voitures.map((v) => (
        <Voiture key={v.id} voiture={v} />
      ))}
    </div>
  );
}