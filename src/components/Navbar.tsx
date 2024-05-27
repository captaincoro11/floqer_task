import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div  className='flex bg-pink-400 justify-between p-3 font-mono'>
        <div className=' text-xl font-semibold'>Floqer</div>
        <div className='flex space-x-10'>
           <Link to="/"><div className=' cursor-pointer font-medium'>See the data</div></Link> 
           <Link to='/graph'><div className=' cursor-pointer font-medium'>See the Graph</div></Link> 
           <Link to='/chat'><div className=' cursor-pointer font-medium'>Chat</div></Link> 

           
        </div>
      </div>
    </div>
  )
}

export default Navbar
