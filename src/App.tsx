import { Routes, Route } from "react-router-dom";
import Listplanet from './component/Listplanet';
import Detailplanet from './component/Detailplanet';
import Wishlist from './component/Wishlist';
import Navbar from './component/Navbar';
import { DataResults } from './component/Data';
import { useState } from 'react';

function App() {
  const [wish, setWish] = useState<DataResults[]>([]);

  const handleTes = (data: DataResults) => {
    const newData = [{ ...data }];
    setWish(prev => {
      const isWishExist = prev.find(item => item.name === data.name);

      if (isWishExist) {
        return prev.filter(item => 
           item.name !== data.name
        )
      }

      return [...prev, ...newData];
    })
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listplanet />} />
        <Route path="/detailplanet/:id" element={<Detailplanet handle={handleTes} data={wish}/>} />
        <Route path="/wishlist" element={<Wishlist dataWish={wish} />} />
      </Routes>
    </div>
  );
}

export default App;
