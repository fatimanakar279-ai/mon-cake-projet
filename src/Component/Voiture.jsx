import { Link } from "react-router-dom";
export default function Voiture( {voiture}){
    return(
        <div className="carte">
            <h2>{voiture.marque} {voiture.modele} </h2>
            <p>prix: {voiture.prix}DH/ jour</p>
            <p>{voiture.disponible ? "disponible":"louee"}</p>
  <Link to={`/voitures/${voiture.id}`}>
  Voir détails
</Link>
<navlink to={`/voitures/ modifier/${voiture.id}`}> modifier</navlink>
<button onclick={() =>supprimerVoiture(voiture.id)}>supprimer</button>
        </div>
    )
}