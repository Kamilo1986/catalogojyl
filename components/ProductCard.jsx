"use client";
import { useState } from "react";

export default function ProductCard({ producto }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % producto.imagenes.length);
  };

  const prev = () => {
    setIndex((index - 1 + producto.imagenes.length) % producto.imagenes.length);
  };

  return (
    <div className="card">

      {/* CARRUSEL */}
      <div className="card-img-container">

        <img
          src={producto.imagenes[index]}
          alt={producto.nombre}
          className="card-img"
        />

        <div className="carousel-controls">
          <button onClick={prev}>‹</button>
          <button onClick={next}>›</button>
        </div>

      </div>

      {/* CONTENIDO */}
      <div className="card-body">

        <p className="card-cat">{producto.categoria}</p>

        <h2 className="card-title">{producto.nombre}</h2>

        <p className="card-price">${producto.precio}</p>

        {/* 🔥 DIÁMETRO */}
        <p className="card-desc">
          <strong>Diámetro:</strong> {producto.diametro}
        </p>

        {/* DESCRIPCIÓN */}
        <p className="card-desc">
          {producto.descripcion}
        </p>

        {/* 🔥 RECOMENDACIÓN PRO */}
        <p className="card-rec">
          {producto.recomendacion}
        </p>

      </div>
    </div>
  );
}