import Titulo from "../components/Titulo";

export default function Home() {
  return (
      <div className="">
       
        <Titulo titulo="Bienvenidos a Caffe Brisa" />
        <p className="">
          Donde cada sorbo cuenta. Explorá nuestros cafés de origen, bebidas artesanales,
          blends exclusivos y opciones dulces para cada momento del día.
        </p>
        <p className="">
          🪑 Sentite como en casa. Ya sea para una charla, una pausa o una mañana productiva.
        </p>
        <a
          href="/Menu"
          className=""
        >
          Ver menú
        </a>
      </div>
    
  );
}