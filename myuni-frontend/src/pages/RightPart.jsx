import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const RightPart = () => {
    const handleChangeTheme=()=>{
        console.log("handle change theme")
    }
  return (
    <div className='py-5 stick top'>
        <div className='relative flex items-center'>
        <input type="text" className='py-3 rounded-fill text-gray-500 w-full pl-12'/>
        <div className='absolute top-0 left-0 pl-3 pt-3'>
        <SearchIcon className='text-gray-500'/>
        </div>
        <Brightness4Icon className="ml-3 cursor-pointer" onClick={handleChangeTheme}/>
        </div>
        <section className='my-5'>
            <h1 className='font-bold my-2'>Subscribe to our newsletter</h1>

        </section>
        <section className='mt-7 space-y-5'>
            <h1 className='font-bold text-xl py-1'>What's happening</h1>
            <div>
                <p className='text-sm'>
                    Carrer Workshop . LIVE
                </p>
            </div>
            <MoreHorizIcon/>

        </section>
    </div>
  )
}

export default RightPart