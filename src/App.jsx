import React, { useState } from 'react';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';

function App() {
  const [fruits, setFruits] = useState([])
  const [pack, setPack] = useState([])

  const handleRemove = (id) => {
    // find which fruid pack
    const packFruit = fruits.find(fruit => fruit.Id === id)

    // Remove from want to selet fruit table
    const updateFruit = fruits.filter(fruit => fruit.Id !== id)

    setFruits(updateFruit)
    console.log("done", id)
  }

  const handleFruit = (fruit) => {
    const isExist = fruits.find(frt => frt.Id === fruit.Id)
    const newFruits = [...fruits, fruit]
    isExist ? alert("It's already added") : setFruits(newFruits)
  }


  const [prices, setPrices] = useState(0)

  const handlePrice = price => {
    let newPrice = prices + price
    setPrices(newPrice)
  }

  return (
    <div className='w-10/12 mx-auto'>
      <Header />
      <div className='flex my-10 gap-2 md:gap-4'>
        <Blogs handleFruit={handleFruit} handlePrice={handlePrice} />
        <Bookmarks handleRemove={handleRemove} fruits={fruits} prices={prices} />
      </div>
    </div>
  );
}

export default App;