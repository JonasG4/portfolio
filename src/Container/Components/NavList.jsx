import React from 'react';
import './NavList.css'

export default function NavList({id, title, active, setSelected}) {
  return (
    <li className="nav-item" onClick={() => setSelected(id)}>
     <a className={active ? 'nav-link nav-active' : "nav-link text-light"} href={`#${id}`}>{title}</a>
    </li>
    );
}
