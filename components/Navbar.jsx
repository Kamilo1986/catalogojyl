import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="container">

        {/* LOGO */}
        <div className="logo-container">
          <Link href="/">
            <img src="/logo.png" className="logo" />
          </Link>

          <h1 className="brand-title">
            JYL EVENTOS
          </h1>
        </div>

        {/* MENÚ */}
        <div className="menu">
          <Link href="/cubiertos" className="nav-link">CUBIERTOS</Link>
          <Link href="/platos-base" className="nav-link">PLATOS BASE</Link>
          <Link href="/cristaleria" className="nav-link">CRISTALERÍA</Link>
          <Link href="/manteleria" className="nav-link">MANTELERÍA</Link>
          <Link href="/decoracion" className="nav-link">DECORACIÓN</Link>
          <Link href="/sillas" className="nav-link">SILLAS</Link>
          <Link href="/mesas" className="nav-link">MESAS</Link>
          <Link href="/platos" className="nav-link">PLATOS</Link>
        </div>

      </div>

    </nav>
  );
}