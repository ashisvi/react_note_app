import { BiMenu } from "react-icons/bi";
import { FaArchive, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <div className="aside_header">
        <h3>Menu</h3>
        <BiMenu />
      </div>

      <input type="text" role="search" placeholder="Search" />

      <ul className="navbar custom-scrollbar">
        <li className="active">
          <Link to="/" className="td-none">
            <FaHome />
            Home
          </Link>
        </li>
        <li>
          <Link className="td-none">
            <FaArchive />
            Archived
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
