import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{background: "#020617", borderBottom: "1px solid rgba(255,255,255,0.05)"}}>

      <div className="container" style={{paddingTop: "20px", paddingBottom: "20px"}}>

        {/* LOGO */}
        <div style={{textAlign: "center", marginBottom: "15px"}}>

          {/* 👉 AQUÍ VA TU LOGO */}
          <img src="/logo.png" style={{height: "180px"}} />

          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              letterSpacing: "8px",
              fontSize: "22px"
            }}
          >
            JYL EVENTOS
          </h1>

        </div>

        {/* MENÚ */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "25px",
            fontSize: "11px",
            letterSpacing: "3px",
            color: "#9ca3af"
          }}
        >

          <Link href="/cubiertos" className="nav-link">CUBIERTOS</Link>
          <Link href="/platos-base" className="nav-link">PLATOS BASE </Link>
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