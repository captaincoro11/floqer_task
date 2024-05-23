interface MainTableProps {
    year:number,
    average_salary:number,
    no_of_jobs:number,
  
}

const MainTable = ({year,average_salary,no_of_jobs}:MainTableProps) => {

    return (
        <div className='flex justify-evenly cursor-pointer hover:shadow-lg mb-2'>
          
          
            <div className=' text-lg font-mono font-medium '>{year}</div>
            <div className=' text-lg font-mono font-medium '>{no_of_jobs}</div>
            <div className=' text-lg font-mono font-medium '>{Math.floor(average_salary)}$</div>

</div>
      
   
  )
}

export default MainTable
