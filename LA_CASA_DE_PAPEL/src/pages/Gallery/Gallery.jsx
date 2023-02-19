import { NavLink } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  return <main class="gallery">
  <NavLink to="/atracadores">
    <div className="divAtracadores">
    Atracadores
    </div>
    </NavLink>
    <NavLink to="/policias">
    <div className="divPolicias">
    Policias / Militares
    </div>
    </NavLink>
    <NavLink to="/rehenes">
    <div className="divRehenes">
    Rehenes
    </div>
    </NavLink>
  </main>
};

export default Gallery;
