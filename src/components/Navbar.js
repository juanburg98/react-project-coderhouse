import "./Navbar.css";
import CartWidget from "./CartWidget";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <h2>Gaki Grow Shop</h2>
      <button className="buttons">Fertilizantes</button>
      <button className="buttons">Semillas</button>
      <button className="buttons">Sustratos</button>
      <CartWidget />
    </div>
  );
};

export default Navbar;
