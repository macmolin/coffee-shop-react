
import { useEffect, useState } from "react";
import { getProductos } from "../services/getProductos";

export default function Tienda() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      const datos = await getProductos();
      setProductos(datos);
      setCargando(false);
    }
    cargarDatos();
  }, []);

  if (cargando) return <p className="text-center mt-6">Cargando productos...</p>;

  const renderProductos = () => {
    const elementos = [];
    for (let i = 0; i < productos.length; i++) {
      const producto = productos[i];
      elementos.push(
        <div
          key={producto.id}
          className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white"
        >
          <img
            src={producto.image}
            alt={producto.title}
            className="h-40 object-contain mb-2"
          />
          <h2 className="font-semibold text-center text-lg mb-1">{producto.title}</h2>
          <p className="text-gray-600 text-sm text-center mb-2 line-clamp-2">
            {producto.description}
          </p>
          <p className="text-amber-600 font-bold text-lg">{producto.price}</p>
          <button className="mt-3 bg-amber-500 hover:bg-amber-600 text-white px-4 py-1 rounded-md transition">
            Agregar al carrito
          </button>
        </div>
      );
    }
    return elementos;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-amber-800">🛍️ Nuestra Tienda</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderProductos()}
      </div>
    </div>
  );
}
