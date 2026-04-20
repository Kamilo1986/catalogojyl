export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
        Alquiler de Menaje y Decoración para Eventos
      </h1>

      <p className="text-gray-300 max-w-2xl mb-8">
        Especialistas en alquiler de vajilla, cristalería, mesas, sillas y decoración premium para eventos corporativos y sociales.
      </p>

      <div className="flex gap-4">
        <a href="/vajilla" className="btn-primary">
          Ver Catálogo
        </a>

        <a href="#" className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          WhatsApp
        </a>
      </div>

    </main>
  );
}