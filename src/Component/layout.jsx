// import { NavLink, Outlet } from "react-router-dom";

// export default function Layout() {
//   return (
//     <div className="layout">
//       <header>
//         <h1>AutoLoc</h1>

//         <NavLink to="/" end>Accueil</NavLink>
//         <NavLink to="/voitures">Nos Voitures</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </header>

//       <main>
//         <Outlet />
//       </main>

//       <footer>
//         <p>© 2026 AutoLoc - Location de voitures à Casablanca.</p>
//       </footer>
//     </div>
//   );
// }


import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="site">

      {/* Header */}
      <header>
  <h1>Sweet Cake</h1>
  <nav>
    <NavLink to="/" end>Accueil</NavLink>
    <NavLink to="/Gateaux">Gâteaux</NavLink>
    <NavLink to="/Contact">Contact</NavLink>
  </nav>
</header>

<main>
  <Outlet />
</main>

<footer>
  <p>© 2026 Sweet Cake - Tous droits réservés</p>
</footer>
    </div>
  );
}
