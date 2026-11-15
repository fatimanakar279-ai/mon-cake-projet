export default function Gateaux({ gateaux }) {
  return (
    <section className="page-gateaux">

      <div className="titre-page">
        <span className="surtitre">Nos créations</span>
        <h1>Nos délicieux gâteaux</h1>
        <p>Découvrez nos délicieux gâteaux.</p>
      </div>

      <div className="grille">
        {gateaux.map((gateau) => (
          <div className="carte" key={gateau.id}>
            <img src={gateau.image} alt={gateau.nom} />

            <div className="carte-infos">
              <h2>{gateau.nom}</h2>
              <p className="prix">{gateau.prix} DH</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}