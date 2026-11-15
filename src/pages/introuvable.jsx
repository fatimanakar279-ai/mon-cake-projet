
import { Link } from "react-router";

export default function Introuvable() {
  return (
    <div>
      <h1>404</h1>

      <h2>Oups ! Cette page n'existe pas.</h2>

      <Link to="/">
        Retour à l'accueil
      </Link>
    </div>
  );
}
