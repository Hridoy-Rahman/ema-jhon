import React from 'react';
const Header = () => {
    return (
        <div>
            <div className='container mx-auto p-4 border rounded-xl'>

                <div className="border rounded-xl flex flex-col md:flex-row justify-between items-center ">
                    <div className="p-8">
                        <h1 className=' font-bold text-3xl'>Programming Hub</h1>
                    </div>
                    <div className="flex flex-col gap-4 font-bold text-xl p-8 md:flex-row">
                        <a href="/Home">Home</a>
                        <a href="/login">Login</a>
                        <a href="/Blog">Blog</a>
                    </div>
                    
                </div>
                <hr className='border-1 border-info' />
            </div>
        </div>
    );
};

export default Header;