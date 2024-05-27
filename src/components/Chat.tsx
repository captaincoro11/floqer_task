import axios from 'axios';
import React,{useEffect, useState} from 'react'

const Chat = () => {
    const[query , setQuery] = useState<string>('');
    const [response,setResponse] = useState<any>();
    const [isLoading , setIsLoading] = useState<boolean>(false);
    const [userMessage,setUserMessage] = useState<any>();

    const fetchData = async()=>{
        try {
        const response = await axios.get("http://localhost:3000/getData");
        setUserMessage(response.data)

            
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        fetchData();

    },[])


    const handleClick =async()=>{

        try{
            setIsLoading(true)
            const response = await axios.post('http://localhost:3000/query',{
            query
        },{
            headers:{
                "Content-Type":"application/json"
            }
        });
        setResponse(response.data);

        }

        catch(error:any){
            console.log(error);

        }
        finally{
            setIsLoading(false)
        }
        

    }
  return (
    <div className=''>
        <div className=' flex justify-center mt-20 '>
            
        <div className=' border shadow-gray-400 shadow-lg rounded-md w-3/4 min-h-96 overflow-y-auto'>

            <div className=''>

            </div>
     
           


        </div>
        
        </div>
        <div className=' flex justify-center mt-4'>
        <div  className=' border flex justify-between  shadow-gray-400 shadow-lg rounded-md w-3/4 min-h-20 '>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} className='border border-black w-11/12 h-full rounded-md' />
        <button onClick={handleClick} className='mr-4 bg-pink-400 p-2 text-white font-mono rounded-md h-1/2 mt-4 '>Send</button>

            

    
        </div>
        </div>
        
      
    </div>
  )
}

export default Chat
