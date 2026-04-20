const crearProductos = (
  categoria,
  nombres,
  descripciones,
  recomendaciones,
  diametros,
  caracteristicas,
  basePrecio,
  incremento
) => {
  return nombres.map((nombre, i) => ({
    id: `${categoria}-${i + 1}`,
    categoria,
    nombre,
    precio: basePrecio + i * incremento,
    diametro: diametros[i],
    descripcion: descripciones[i],
    recomendacion: recomendaciones[i],
    caracteristicas: caracteristicas[i],
    imagenes: [
      `/images/${categoria}/${categoria}-${i + 1}-1.jpg`,
      `/images/${categoria}/${categoria}-${i + 1}-2.jpg`,
      `/images/${categoria}/${categoria}-${i + 1}-3.jpg`,
      `/images/${categoria}/${categoria}-${i + 1}-4.jpg`
    ]
  }));
};

export const productos = [

  // ================= PLATOS BASE =================
  ...crearProductos(
    "platos-base",
    [
      "Plato base dorado clásico","Plato base plateado espejo","Plato base negro elegante",
      "Plato base blanco premium","Plato base acrílico moderno","Plato base texturizado luxury",
      "Plato base champagne","Plato base rose gold","Plato base rústico","Plato base premium deluxe"
    ],
    Array.from({ length: 10 }, (_, i) => `Plato base elegante modelo ${i + 1}.`),
    Array.from({ length: 10 }, (_, i) => `Ideal para eventos elegantes (${i + 1}).`),
    ["33 cm","33 cm","33 cm","32 cm","33 cm","34 cm","33 cm","33 cm","32 cm","35 cm"],
    [
      "Plástico rígido dorado","Vidrio efecto espejo","ABS negro","Cerámica premium",
      "Acrílico transparente","Polímero texturizado","Tono champagne","Aleación rose gold",
      "Madera tratada","Porcelana premium"
    ],
    3000,200
  ),

  // ================= CRISTALERIA =================
  ...crearProductos(
    "cristaleria",
    [
      "Copa vino","Copa agua","Copa champagne","Copa cóctel","Copa whisky",
      "Copa cerveza","Copa licor","Copa martini","Copa degustación","Copa premium"
    ],
    Array.from({ length: 10 }, (_, i) => `Copa elegante ${i + 1}.`),
    Array.from({ length: 10 }, (_, i) => `Ideal para bebidas (${i + 1}).`),
    ["350 ml","400 ml","180 ml","250 ml","300 ml","500 ml","120 ml","220 ml","100 ml","450 ml"],
    [
      "Vidrio templado","Vidrio fino","Cristal delgado","Vidrio reforzado","Vidrio grueso",
      "Vidrio cervecero","Cristal fino","Vidrio martini","Vidrio degustación","Cristal premium"
    ],
    2500,150
  ),

  // ================= CUBIERTOS =================
  ...crearProductos(
    "cubiertos",
    [
      "Cubiertos dorados","Cubiertos plateados","Cubiertos negros","Cubiertos oro rosa",
      "Cubiertos plateados importados","Cubiertos oro rosa  premium","Cubiertos plateado base cuadrada","Cubiertos dorados base redonda",
      "Cubiertos plateados nacionales","Cubiertos acero inox"
    ],
    Array.from({ length: 10 }, (_, i) => `Cubierto modelo ${i + 1}.`),
    Array.from({ length: 10 }, (_, i) => `Ideal para mesa (${i + 1}).`),
    ["24 cm","24 cm","24 cm","23 cm","23 cm","25 cm","22 cm","24 cm","23 cm","24 cm"],
    [
      "Acero dorado","Acero pulido","Negro mate","Diseño moderno","Tradicional",
      "Premium reforzado","Minimalista","Luxury espejo","Mate antihuella","Acero industrial"
    ],
    2000,150
  ),

  // ================= MANTELERIA =================
  ...crearProductos(
    "manteleria",
    [
      "Mantel blanco","Mantel negro","Mantel champagne","Mantel satín","Mantel texturizado",
      "Mantel bordado","Mantel premium","Mantel lino","Mantel decorativo","Mantel luxury"
    ],
    Array.from({ length: 10 }, (_, i) => `Mantel elegante ${i + 1}.`),
    Array.from({ length: 10 }, (_, i) => `Ideal para eventos (${i + 1}).`),
    ["2x2 m","2x2 m","2x2 m","2x2 m","2x2 m","2x2 m","2x2 m","2x2 m","2x2 m","2x2 m"],
    [
      "Tela algodón","Tela poliéster","Tela premium","Satín","Texturizado",
      "Bordado","Alta gama","Lino natural","Decorativo","Luxury"
    ],
    5000,300
  ),

  // ================= DECORACION =================
  ...crearProductos(
    "decoracion",
    Array.from({ length: 10 }, (_, i) => `Decoración ${i + 1}`),
    Array.from({ length: 10 }, (_, i) => `Elemento decorativo ${i + 1}.`),
    Array.from({ length: 10 }, (_, i) => `Ideal para ambientación (${i + 1}).`),
    ["30 cm","35 cm","40 cm","25 cm","50 cm","45 cm","38 cm","42 cm","33 cm","48 cm"],
    [
      "Vidrio decorativo","Metal dorado","Cerámica","Plástico premium","Cristal",
      "Madera","Acrílico","Resina","Textil","Mixto"
    ],
    7000,400
  ),

  // ================= SILLAS =================
  ...crearProductos(
    "sillas",
    [
      "Silla tiffany","Silla crossback","Silla ghost","Silla plegable","Silla premium",
      "Silla acolchada","Silla evento","Silla luxury","Silla clásica","Silla moderna"
    ],
    Array.from({ length: 10 }, (_, i) => `Silla elegante ${i + 1}.`),
    Array.from({ length: 10 }, (_, i) => `Ideal para invitados (${i + 1}).`),
    ["45 cm","45 cm","45 cm","45 cm","50 cm","50 cm","45 cm","50 cm","45 cm","48 cm"],
    [
      "Madera","Madera reforzada","Acrílico","Metal","Premium",
      "Acolchada","Evento","Luxury","Clásica","Moderna"
    ],
    8000,500
  ),

  // ================= MESAS =================
  ...crearProductos(
    "mesas",
    [
      "Mesa redonda","Mesa rectangular","Mesa cóctel","Mesa imperial","Mesa premium",
      "Mesa evento","Mesa moderna","Mesa clásica","Mesa alta","Mesa luxury"
    ],
    Array.from({ length: 10 }, (_, i) => `Mesa ${i + 1}.`),
    Array.from({ length: 10 }, (_, i) => `Ideal para montaje (${i + 1}).`),
    ["1.2 m","1.5 m","0.8 m","2 m","1.8 m","1.6 m","1.4 m","1.5 m","1 m","2.2 m"],
    [
      "Madera","Metal","Aluminio","Madera maciza","Premium",
      "Evento","Moderna","Clásica","Alta","Luxury"
    ],
    15000,800
  ),

  // ================= PLATOS =================
  ...crearProductos(
    "platos",
    [
      "Plato entrada","Plato fuerte","Plato postre","Plato hondo","Plato gourmet",
      "Plato premium","Plato clásico","Plato moderno","Plato elegante","Plato deluxe"
    ],
    Array.from({ length: 10 }, (_, i) => `Plato ${i + 1}.`),
    Array.from({ length: 10 }, (_, i) => `Ideal para servicio (${i + 1}).`),
    ["20 cm","25 cm","18 cm","22 cm","27 cm","28 cm","24 cm","26 cm","23 cm","30 cm"],
    [
      "Cerámica","Porcelana","Vidrio","Hondo","Gourmet",
      "Premium","Clásico","Moderno","Elegante","Deluxe"
    ],
    20000,1000
  )

];