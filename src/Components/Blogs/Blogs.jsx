import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

function Blogs({ handleFruit, handlePrice }) {

    const [fruits, setFruits] = useState([])

    useEffect(() => {
        fetch("../../../public/furits.json")
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])


    return (
        <div className='w-3/4 grid gird-cols-1 md:grid-cols-2 gap-4'>
            {fruits.map((fruit, index) =>
                <Blog
                    handleFruit={() => handleFruit(fruit)}
                    handlePrice={() => handlePrice(fruit.price)}
                    key={index} fruit={fruit} />
            )}
        </div>
    );
}

export default Blogs;