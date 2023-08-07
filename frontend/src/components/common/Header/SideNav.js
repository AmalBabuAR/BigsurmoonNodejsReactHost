
import React from "react";
import { Link } from "react-router-dom";
import Progressbar from "../reusable/ProgressBar";
import Button from "../reusable/Button";

function SideNav({ showMenu, closeSidenav }) {
  return (
    <aside className={`sidebar-wrap private ${showMenu ? "show" : "hide"}`}>
      <div className="back-drop" onClick={closeSidenav}></div>
      <div className="sidenav">
        <Link to='/user-dashboard'>Dashboard</Link>
        <Link to='/profile'>Profile</Link>
        <div className="progress">
          <Progressbar number={50} />
          <span>40 Out of 50 files used</span>
        </div>

        <div className="view-plans">
          <p>
            Ready to go beyond current plan? Upgrade to give your ideas and
            designs room to grow without limits.
          </p>
          <Button className="view-plans-button">View Plans</Button>
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
