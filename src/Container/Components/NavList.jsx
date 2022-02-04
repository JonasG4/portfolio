import React from 'react';
import './NavList.css'

export default function NavList({id, title, active, setSelected}) {
  return (
    <li className="nav-item" onClick={() => setSelected(id)}>
     <a className={active ? 'nav-link active' : "nav-link text-light"} href="#inicio">{title}</a>
    </li>
    );
}
