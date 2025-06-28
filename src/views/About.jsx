import Titulo from "../components/Titulo";

export default function About() {
  return (
    <div className="">
      <Titulo titulo="Sobre Nosotros"/>  

      <p className="">
        Nacimos del amor por el café bien hecho y los momentos que lo acompañan.
      </p>

      <p className="">
        En <span className="">Caffè Brisa</span> buscamos crear espacios que inspiren,
        reconecten y abracen la rutina con sabor y calidez. Seleccionamos granos de calidad,
        trabajamos con productores locales y diseñamos cada bebida con dedicación.
      </p>

      <div className="fotos">
         <img src="/public/assets/cafe-espresso.jpg" alt="cafe" /> 
        
      </div>

      <p className="">
        Más que café. Somos <span className="italic">pausa, compañía y ritual</span>.
      </p>
    </div>
  );
}
