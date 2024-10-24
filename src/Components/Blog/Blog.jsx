import React from 'react';

function Blog({ fruit, handleFruit, handlePrice }) {

    const { fruits_image, fruits_name, description, price } = fruit
    return (
        <div className='border bg-gray-50 p-4 rounded-lg space-y-2'>
            <figure className='h-[20rem] w-full'>
                <img className='h-full w-full rounded-xl' src={fruits_image} alt="" />
            </figure>
            <h3 className='text-2xl font-bold '>{fruits_name}</h3>
            <p>{description}</p>
            <p className='text-lg font-semibold'>Price: {price} $</p>
            <div className='flex gap-2'>
                <button onClick={handleFruit} className='px-4 py-2 border-2 border-blue-600 bg-blue-50 text-blue-700 rounded-lg'>Buy Now</button>
                <button onClick={handlePrice} className='px-4 py-2 border-2 border-blue-600 bg-blue-50 text-blue-700 rounded-lg'>Add Price</button>
            </div>
        </div>
    );
}

export default Blog;
