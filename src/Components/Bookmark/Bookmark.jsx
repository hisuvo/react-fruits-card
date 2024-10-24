import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

function Bookmark({ fruit, handleRemove }) {

    const { Id, fruits_image, fruits_name, price } = fruit;

    return (
        <div className='flex justify-between items-center p-2 bg-gray-50 rounded-lg mt-2 text-lg font-semibold'>
            <img className='h-[4rem] rounded-lg' src={fruits_image} alt="" />
            <h2>{fruits_name}</h2>
            <h3>${price}</h3>
            <button onClick={handleRemove} className='hover:text-purple-900 text-4xl'><MdDeleteOutline /></button>
        </div>
    );

}

export default Bookmark;