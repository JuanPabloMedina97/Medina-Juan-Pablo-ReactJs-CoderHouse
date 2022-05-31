import React from 'react'

const Item = ({titulo, tipo, img}) => {

    
  return (
    <>
       {
        <div class="col">
         <div class="card text-center">
           <img src={img} class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">{titulo}</h5>
             <p class="card-text">{tipo}</p>
             <div class="card-footer text-muted">
                2 days ago
            </div>
           </div>
         </div>
        </div>
       }
    </>
  )
}

export default Item