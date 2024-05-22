
const Navbar = () => {
  return (
    <div>
      <div  className='flex bg-pink-400 justify-between p-3 font-mono'>
        <div className=' text-xl font-semibold'>Floqer</div>
        <div className='flex space-x-10'>
           <a href="/"><div className=' cursor-pointer font-medium'>See the data</div></a> 
           <a href='/graph'><div className=' cursor-pointer font-medium'>See the Graph</div></a> 
        </div>
      </div>
    </div>
  )
}

export default Navbar
