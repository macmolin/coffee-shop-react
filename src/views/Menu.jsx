import { useEffect, useState } from "react";
import axios from "axios";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductos(response.data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al traer productos:", error);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p className="text-center mt-4">Cargando productos...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🛍️ Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <div key={producto.id} className="border rounded-lg shadow p-4">
            <img
              src={producto.image}
              alt={producto.title}
              className="h-40 mx-auto object-contain mb-2"
            />
            <h2 className="font-semibold text-lg">{producto.title}</h2>
            <p className="text-gray-600">${producto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}