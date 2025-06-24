
export default function Home() {
  return (
      <div className="bg-black/60 p-8 rounded-xl shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">☕ Bienvenidos a Caffè Brisa</h1>
        <p className="text-lg mb-4">
          Donde cada sorbo cuenta. Explorá nuestros cafés de origen, bebidas artesanales,
          blends exclusivos y opciones dulces para cada momento del día.
        </p>
        <p className="mb-6">
          🪑 Sentite como en casa. Ya sea para una charla, una pausa o una mañana productiva.
        </p>
        <a
          href="/Menu"
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Ver menú
        </a>
      </div>
    
  );
}