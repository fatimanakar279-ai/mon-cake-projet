import { useNavigate } from "react-router";

export default function Accueil() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Bienvenue chez Autloc</h1>
            <p> Votre agence de location de voitures à Casablanca.
        Découvrez nos voitures et choisissez celle qui vous convient..</p>
            <button onclick={() => navigate("/voitures")}>Voir nos voitures</button>
        </div>
    );
}