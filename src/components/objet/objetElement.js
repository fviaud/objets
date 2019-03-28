import React from 'react';

const ObjetElement = ({objet,deleteObjet,TryDelObjet}) => {
   return (
    <li  className="list-group-item d-flex flex-row justify-content-between align-items-center list-group-item-action">
        <span>{objet.name}</span>
        <button onClick={(e) => {
          e.stopPropagation();
          deleteObjet();
        }} className="btn btn-sm btn-danger">delete</button>
    </li>
  )
}
export default ObjetElement