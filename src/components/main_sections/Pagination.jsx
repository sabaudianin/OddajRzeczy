import React, {useState} from 'react';

const Pagination = ({data, itemsOnPage, showData}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const lastItem = currentPage * itemsOnPage;
    const firstItem = lastItem - itemsOnPage;
    const currentItems = data.slice(firstItem, lastItem);
    const totalPages = data.length / itemsOnPage;

    const paginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`px-4 py-2 mx-1 border rounded active:border-medium duration-200 ${i === currentPage && 'bg-lightes font-semibold '} `}>
                    {i}
                </button>
            )
        }
        return buttons
    }


    return (
        <div>
            {currentItems.map((item, index) => (
                <div key={index}>
                    {showData(item, index)}
                </div>
            ))}

            {itemsOnPage < data.length &&

                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-1 border-2 rounded disabled:opacity-40"
                    >
                        Previous
                    </button>
                    {paginationButtons()}
                    <button
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-1 border rounded disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>
            }
        </div>
    );
};

export default Pagination;