import React from 'react';

const Bookmark = () => {
    return (
        <div>
            {
                <div>
                    <div className='bg-gray-200 p-4 rounded-lg mb-4'>
                        <h1 className='text-2xl font-bold text-purple-800 text-center'>Spent time on read : { }</h1>
                    </div>
                    <div  className='bg-gray-200 p-4 rounded-lg'>
                        <h1 className='text-2xl font-bold mb-4'>Bookmarked Blogs : </h1>
                        <div className='bg-white p-4 rounded-lg'>
                            <h1 className='text-xl font-semibold'></h1>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Bookmark;