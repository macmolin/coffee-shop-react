
import { useEffect, useState } from "react";
import { getProductos } from "../services/getProductos";
import Titulo from "../components/Titulo";


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
          className="productoContainer"
        >
          <img
            src={producto.image}
            alt={producto.title}
            className=""
          />
          <h2 className="productoTitulo">{producto.title}</h2>
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
    <div className="">
    <Titulo titulo="Nuestra Tienda"/>      
     
    <div className="productosFlex">
      {renderProductos()}
    </div>

    {carrito.length > 0 && (
      <div className="">
        <h2 className="">🛒 Carrito</h2>
        <ul className="">
          {carrito.map((item, index) => (
            <li key={index}>{item.title} - ${item.price}</li>
          ))}
        </ul>
      </div>
    )}
      
    </div>
  );
}
