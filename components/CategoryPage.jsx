import { productos } from "@/data/productos";
import ProductCard from "@/components/ProductCard";

export default function CategoryPage({ categoria, titulo }) {

  const lista = productos.filter(p => p.categoria === categoria);

  return (
    <main>

      <div className="container">

        <div className="page-header">
          <h1 className="page-title">{titulo}</h1>
          <div className="page-line"></div>
          <p className="page-sub">
            Catálogo premium para eventos
          </p>
        </div>

        <div className="grid">
          {lista.map(producto => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>

      </div>

    </main>
  );
}