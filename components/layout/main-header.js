import Link from 'next/link'

function MainHeader() {
  return (
    <nav className=' flex items-center flex-wrap bg-gray-900 p-6 '>
      <div className='flex items-center flex-no-shrink text-red-600  mr-6'>
        <img className='h-8 w-8 mr-2 ml-52' src='/logo.png' />
        <Link href='/'>
          <a className='font-semibold  text-2xl tracking-tight'>Next Movies</a>
        </Link>
      </div>
      <div className='w-full block lg:flex lg:items-center lg:w-auto lg:flex-grow items-center text-xl text-white'>
        <Link href='/'>
          <a className='block  mr-4'>Movies List</a>
        </Link>
        <div className='ml-10 text-lg flex items-center '>
          <input
            className='  border-2 border-red-600 rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='Movie'
            type='text'
            placeholder='Search Movie'
          />
        </div>
      </div>
    </nav>
  )
}

export default MainHeader
