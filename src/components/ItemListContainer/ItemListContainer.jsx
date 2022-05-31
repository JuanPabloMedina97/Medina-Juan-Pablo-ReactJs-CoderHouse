import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const [data, setData] = useState([]); //data es un array vacio

  const getData = async () =>{ // async funcion para obtener los datos

    try {

      const data = await fetch('https://run.mocky.io/v3/84d31b75-5c59-43fa-85c0-502bda4ceb72');
      const res = await data.json()
      setData(res); //setData es una funcion que recibe un parametro, ese parametro es el array que se va a guardar en el state

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { //useEffect es una funcion que se ejecuta cuando el componente se renderiza
    getData(); 
    console.log(data);
  }, []);




  return (
    <>
        <ItemList data= {data}/>
    </>
  )
}

export default ItemListContainer