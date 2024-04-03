import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/recipes">All Recipes</Link>
      </li>
    </ul>
  );
};
export default NavBar;
