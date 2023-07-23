import { useState } from 'react';

import Emoji from './components/Emoji';
import Pagination from './components/Pagination';

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
    setCurrentPage(1);
  }
  //#endregion

  //#region Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const emojisPerPage = 100;

  let indexOfLastEmoji = currentPage * emojisPerPage;
  let indexOfFirstEmoji = indexOfLastEmoji - emojisPerPage;

  let currentVisibleEmojis = categorizedData.length > 0
    ? categorizedData.slice(indexOfFirstEmoji, indexOfLastEmoji)
    : data.slice(indexOfFirstEmoji, indexOfLastEmoji);

  let totalRows = categorizedData.length > 0
    ? categorizedData.length
    : data.length;

  let totalPages = Math.ceil(totalRows / emojisPerPage);

  function handlePagination(pageNumber) {
    setCurrentPage(pageNumber);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.focus();
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.focus();
  }

  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.focus();
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
          currentVisibleEmojis.map((item) => (
            <Emoji key={item.id} item={item} />
          ))
        }
      </div>
      {
        totalRows > 100 &&
        (
          <Pagination
            currentPage={currentPage}
            nextPage={nextPage} paginate={handlePagination} previousPage={previousPage}
            totalPages={totalPages} />
        )
      }
    </>
  );
}
