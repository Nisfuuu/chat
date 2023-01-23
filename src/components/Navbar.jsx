import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Satelit chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/10879155/pexels-photo-10879155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Jhon</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
