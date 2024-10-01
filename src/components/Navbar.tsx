import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Search Bar */}
      <div className='hidden md:flex'>
        <Image src="/search.png" alt='search' width={14} height={14}/>
        <input type="text" placeholder='Search...'/>
      </div>
      {/* Icons and User */}
      <div className='flex items-center gap-6'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt='' height={20} width={20}/>
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/announcement.png" alt='' height={20} width={20}/>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>John Doe</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar