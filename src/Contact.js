import { SiFacebook } from "react-icons/si"

function Contact() {
  return (
    <div className="pb-4 text-white text-center bg-dark">
      <h1>Nous joindre</h1>
      <div>(514) 348-4977</div>
      <div>nadeausystemeinterieur@gmail.com</div>
      <div>125, Desautels</div>
      <div>St-Jean-sur-Richelieu, J3B8M8</div>
      <p>RBQ : 5789-9783-01</p>
      <a href="https://www.facebook.com/profile.php?id=100068229096550">
        <SiFacebook className=" text-white fs-2" />
      </a>
    </div>
  );
}

export default Contact;
