import { Outlet } from "react-router-dom";
import icon from "../../assets/icon.svg";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar-parent d-flex ">
      <div className="navbar position-absolute top-0 left-0 px-4 d-flex justify-content-between  ms-4 mt-4">
        <div>
          <img src={icon} alt="logo" />
        </div>
        <div className="text-white navbar-text">WELCOME</div>
      </div>
      <div className="navbar-children-outlet  position-absolute d-flex justify-content-center">
        <Outlet />
        
      </div>
    </div>
  );
};

export default Navbar;
