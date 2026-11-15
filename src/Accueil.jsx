import { NavLink } from "react-router";
export default function Accueil() {
  return (
    <div className="accueil">
      <h5>PATISSERIE ARTISANALE</h5>

      <h1>Bienvenue a la Patisserie Les Delices</h1>

      <p>
        Des gateaux faits maison chaque jour, avec des produits frais
      </p>

      <NavLink to="/Gateaux">Voir nos gateaux</NavLink>
    </div>
  );
}