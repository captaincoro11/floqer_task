import { Modal, Spin } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import MyContext from '../context/context';
import MainTable from './MainTable';
interface Salary {
  work_year: number;
  salary: number;
  no_of_jobs: number;
  job_title: string;
}

const Calculation:React.FC = () => {

  const context:any = useContext(MyContext)

  const {isLoading,handleOpen, setIsLoading ,data, setData ,calculation, setCalculation,setIsModalOpen,isModalOpen,handleOk,handleClose,target,setTarget} = context



  
 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Salary[]>("https://script.googleusercontent.com/macros/echo?user_content_key=1m-VYBEmpW9a2yd5-PUbwOpXAEhSsQmi1lNKSovJlpcu_U8NGKRMSjkW_2oLJ2Af9Ke7D-wDir-bXEehbLTC2in0jMSEPZXpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDYdI3Ic54TtQ0dA-9IhGGPldTS1lP9GKRKbhpm5HuUGityrtvGL8GK4q7qRRGkbe5yzPJH-B7t8m0j2qd9QR8UUKufpUXtSMw&lib=M8WiUXEatz1TgLIex5GctuCUOZ8ec8_J3");
        const arr = Object.entries(response.data);
        const newarr = arr[0][1];
        setData(newarr);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


 

  if (isLoading) {
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15%"}}><Spin size='large'/></div>;
  }


  return (
    <div className="App">
      {
        data && calculation &&(
          <div className='flex justify-center items-center mt-52'>
           
              <div className='border shadow-lg rounded-md sm:w-1/2 w-4/5 '>
              <div className='text-center mb-4 font-mono text-2xl font-semibold mt-4'>Floqer</div>
              <div className='flex justify-evenly  '>

                <div className='text-xl font-semibold font-mono'>year</div>
                <div className='text-xl font-semibold font-mono'>Jobs</div>
                <div className='text-xl font-semibold font-mono'>Salary</div>
              </div>
            
              
                <div>{
                   calculation.averageSalary.map((item:any,index:any)=>(
                    <>

                    <div onClick={handleOpen}>
                      <div onClick={()=>setTarget(calculation.year[index])}>
                    <MainTable year={calculation.year[index]} average_salary={calculation.averageSalary[index]} no_of_jobs={calculation.ctr[index]}/>
                    </div>
                    

                   </div>
                     <Modal open={isModalOpen} onOk={handleOk} onCancel={handleClose}>
                    <div className='flex'>
                      <div id='right'>
                        {
                          calculation.job_titles.map((item:any,index:any)=>(
                            <div>
                              {item}

                            </div>
                          ))
                          
                        }
                        
                      </div>

                      <div id='left'>
                        {
                          target===2024?(
                            calculation.unique_jobs_2024.map((item:any,index:any)=>(
                              <div>
                                {item}
                              </div>
                            ))
                          ):(
                            
                              target===2023?(
                                calculation.unique_jobs_2023.map((item:any,index:any)=>(
                                  <div>
                                    {item}
                                  </div>
                                ))

                              ):(
                                target===2022?(
                                  calculation.unique_jobs_2022.map((item:any,index:any)=>(
                                    <div>
                                      {item}
                                    </div>
                                  ))
                               

                              ):(
                                target===2021?(
                                  calculation.unique_jobs_2021.map((item:any,index:any)=>(
                                    <div>
                                      {item}
                                    </div>
                                  ))

                              ):(
                                target===2020?(
                                  calculation.unique_jobs_2020.map((item:any,index:any)=>(
                                    <div>
                                      {item}
                                    </div>
                                  ))

                              ):(
                                <div>
                                  hello
                                </div>
                              )
                            
                            )
                          )
                        )
                      )
                        
                          
                        }


                      </div>
                    </div>
                  </Modal>
</>
                   

                    
                    
                  ))
                
              
                  }
                   

                  
                  </div>
                 
                  
                 
                   
                
         
              
             
          
          </div>
          </div>
        
          
         

        )
      

      }
   
    </div>
  )
}

export default Calculation
