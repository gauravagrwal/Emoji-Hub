export default function Pagination({ currentPage, nextPage, paginate, previousPage, totalPages }) {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='flex flex-wrap p-8 justify-center -space-x-px'>
            <button className='px-5 py-2 border rounded-l-full hover:bg-gray-200' onClick={previousPage}>⏪</button>

            {
                pageNumbers.map((pageNumber) => (
                    <button key={pageNumber} onClick={() => paginate(pageNumber)}
                        className={
                            pageNumber === currentPage
                                ? 'px-4 py-2 bg-blue-200 text-blue-600 hover:bg-blue-300 hover:text-blue-700'
                                : 'px-4 py-2 border hover:bg-gray-200 hover:text-gray-600'
                        }>
                        {pageNumber}
                    </button>
                ))
            }

            <button className='px-5 py-2 border rounded-r-full hover:bg-gray-200' onClick={nextPage}>⏩</button>
        </nav>
    );
}
