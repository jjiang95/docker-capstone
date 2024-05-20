import React from 'react';

function Item({ item, onDelete }) {

    function onDeleteClick() {
        fetch(`http://127.0.0.1:5000/items/${item.id}`, {
            method: "DELETE",
        })
        .then(() => onDelete(item.id))
    }

    return (
        <>
            <div className='item'>
                <p>{item.text}</p>
            </div>
                <button id='delete' onClick={onDeleteClick}>Delete</button>
        </>
    )
}

export default Item;