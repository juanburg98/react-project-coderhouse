import "./Navbar.css";
import CartWidget from "./CartWidget";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <h2>Bag Store</h2>
      <button className="buttons">Carteras</button>
      <button className="buttons">Mochilas</button>
      <button className="buttons">Billeteras</button>
      <CartWidget />
    </div>
  );
};

export default Navbar;
