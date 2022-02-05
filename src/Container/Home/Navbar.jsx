import {useState} from 'react';
import './Navbar.css';
import NavList from '../Components/NavList';

export default function Navbar() {
    
    const [selected, setSelected] = useState("contacto")

    const list = [
        {
            id: "inicio",
            title: "Inicio"
        },
        {
            id: "sobreMi",
            title: "Sobre mi"
        },
        {
            id: "portfolio",
            title: "Portafolio"
        },
        {
            id: "contacto",
            title: "Contacto"
        }
    ];

    return (
    <div>
        <ul className="nav justify-content-end bg-mblue py-3 fw-bold px-5">
            {list.map((item) => (
                <NavList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                />
            ))}
        </ul>
    </div>
    )
}
