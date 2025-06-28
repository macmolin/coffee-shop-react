
import { useEffect, useState } from "react";
import { getProductos } from "../services/getProductos";


export default function Shop() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [carrito, setCarrito] = useState([]);


  useEffect(() => {
    async function cargarDatos() {
      const datos = await getProductos();
      setProductos(datos);
      setCargando(false);
    }
    cargarDatos();
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };
  

  if (cargando) return <p className="text-center mt-6">Cargando productos...</p>;

  const renderProductos = () => {
    const elementos = [];
    for (let i = 0; i < productos.length; i++) {
      const producto = productos[i];
      elementos.push(
        <div
          key={producto.id}
          className=""
        >
          <img
            src={producto.image}
            alt={producto.title}
            className=""
          />
          <h2 className="">{producto.title}</h2>
          <p className="">
            {producto.description}
          </p>
          <p className="">{producto.price}</p>
          <button className="" onClick={() => agregarAlCarrito(producto)}>
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
    {carrito.length > 0 && (
      <div className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">🛒 Carrito</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {carrito.map((item, index) => (
            <li key={index}>{item.title} - ${item.price}</li>
          ))}
        </ul>
      </div>
    )}
      
    </div>
  );
}
