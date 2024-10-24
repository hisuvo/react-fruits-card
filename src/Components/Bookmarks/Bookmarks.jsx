import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

function Bookmarks({ fruits, prices, handleRemove }) {
    return (
        <div className='w-1/4'>
            <div className='bg-gray-200 rounded-md p-4'>
                <div className=' bg-gray-100 rounded-md p-2'>
                    <h2 className='text-xl font-semibold'>Fruits Add Cart : {fruits.length}</h2>
                    <h2 className='text-xl font-semibold'>Total Price: $ {prices.toFixed(2)}</h2>
                </div>


                {fruits.map((fruit, index) => <Bookmark handleRemove={() => handleRemove(fruit.Id)} key={index} fruit={fruit} />)}
            </div>

        </div>
    );
}

export default Bookmarks;