import { NavLink } from "react-router-dom";
import { Items } from "./data";
import "./index.css";
import Navbar from "../../components/Navbar";

const AdminPanel = () => {
  return (
    <>
      <div className="container position-relative admin-left-navbar d-flex flex-column ">
        <p className="fs-4 text-white mt-4">ADMIN PANEL</p>
        {Items?.map((item, index) => {
          return (
            <div key={index} className="row ">
              <NavLink
                to={item?.path}
                className="admin-left-navbar-children d-flex justify-content-center  p-2"
              >
                <div className="admin-left-navbar-children w-100  d-flex gap-2  p-2">
                  <img src={item?.icon} alt="" className="" />
                  {item?.name}
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
      <Navbar />
    </>
  );
};

export default AdminPanel;
