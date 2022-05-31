import React, { useState, useEffect } from "react";





const NavBar = ({tittle}) => {



  const [data, setData] = useState([]);

  const obtenerDatos = async () => {
    const data = await fetch("https://run.mocky.io/v3/d3ad108c-df6d-4b19-96f5-5a08a8e5a3f9");
    const res = await data.json();
    setData(res);
  };

  useEffect(() => {
    obtenerDatos();
    console.log(data)
  }, []);


  
  
  return (
    <>
      <h1 className="text-center">{tittle}</h1>
      <nav className="navbar navbar-expand-lg bg-black " >
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto" >
                    {
                        data.map( item =>(
                            <li className="nav-item" key={item.id}>
                                <a className="nav-link active">
                                    {<img src={item.img} width="50px" height="50px"/>}  {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
    </nav>
    </>
  );
};

export default NavBar;
