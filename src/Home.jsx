import { useState } from 'react';

import Emoji from './components/Emoji';

export default function Home({ data }) {
  //#region Category
  const [category, setCategory] = useState('all');

  let categorizedData = data.filter((item) => {
    if (category === 'all')
      return true;
    else
      return item.category === category;
  });

  function changeCategory(e) {
    setCategory(e.target.value);
  }
  //#endregion

  return (
    <>
      <div className='flex justify-center'>
        <select onChange={(e) => { changeCategory(e) }} className='p-2 rounded-md w-3/4'>
          <option selected disabled>Choose a cateogry</option>
          <option value='all'>All</option>
          <option value='smileys and people'>Smileys and People</option>
          <option value='food and drink'>Food and Drink</option>
          <option value='animals and nature'>Animals and Nature</option>
          <option value='travel and places'>Travel and Places</option>
          <option value='activities'>Activities</option>
          <option value='objects'>Objects</option>
          <option value='symbols'>Symbols</option>
          <option value='flags'>Flags</option>
        </select>
      </div>

      <div className='flex flex-wrap'>
        {
          categorizedData.map((item) => (
            <Emoji key={item.id} item={item} />
          ))
        }
      </div>
    </>
  );
}
