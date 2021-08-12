import React from "react";

const Header = ({ onAdd }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button className="btn" onClick={onAdd}>
        Add
      </button>
    </header>
  );
};

export default Header;
