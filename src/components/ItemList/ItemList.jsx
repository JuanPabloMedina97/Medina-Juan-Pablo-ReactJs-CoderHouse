import React from 'react'
import Item from '../Item/Item'


const ItemList = ({data}) => {

 
  return (
    <>
       <div class="row row-cols-1 row-cols-md-3 g-4">
        {
          data.map( (item) => 
            <Item titulo={item.name} tipo={item.type} img={item.url}/>
          )
        }
      </div> 
    </>
  )
}

export default ItemList