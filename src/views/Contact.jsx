import Titulo from "../components/Titulo";

export default function Contact() {
  return (
    <div>
        
      <Titulo titulo="Contacto"/>


      <p>¿Querés escribirnos? 📬 Estamos para escucharte. 
        Consultas, sugerencias, pedidos especiales o simplemente decir "hola", ¡nos encanta leerte! <br />
        📧contacto@caffebrisa.com  <br />
        📱 Instagram: @caffebrisa  <br />
        📍 Visitános: Av. Libertador 2540, Buenos Aires</p>
      
      <div className="fotos">
         <img src="/public/assets/telefono.jpg" alt="contactoTelefono" /> 
        
      </div>

      <p>Nuestro corazón late al ritmo del café... y de tu mensaje.</p>
    </div>
  );
}
