import React, {  useState , useEffect } from 'react';
import MyContext from './context';

interface Salary {
    work_year: number;
    salary: number;
    no_of_jobs: number;
    job_title: string;
  }

const MyProvider = ( {children }:any) => {
    
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<Salary[] | any>();
    const [calculation, setCalculation] = useState<{ ctr: number[], averageSalary: number[] , year:number[] ,job_titles:string[] , unique_jobs_2024:number[] } | null >(null);
    const [isModalOpen , setIsModalOpen] =useState<boolean>(false);
    const [target , setTarget] = useState<number|null>(2024);
    useEffect(() => {
        if (data) {
          const calculationResult = calculateData(data);
          setCalculation(calculationResult);
        }
      }, [data]);

      const handleOpen = ()=>{
        setIsModalOpen(true);
      
      };
      const handleClose = ()=>{
        setIsModalOpen(false);
      };
      const handleOk = ()=>{
        setIsModalOpen(false);
      };
      const onClickable = (data:number)=>{
        setTarget(data);
    }
    const value:any ={

        isLoading,setIsLoading , data,setData , calculation,setCalculation ,isModalOpen,setIsModalOpen,handleClose,handleOk,handleOpen,target,setTarget,onClickable
    };

    console.log(data);
    console.log(calculation)

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};


const calculateData = (data: Salary[] | any) => {
    let ctr = [0, 0, 0, 0, 0];
    let totalSalary = [0, 0, 0, 0, 0];
    let averageSalary = [];
    let year = [2024,2023,2022,2021,2020];
    let job_titles:any = [];
    let unique_jobs_2024:any = [];
    let unique_jobs_2023:any = [];
    let unique_jobs_2022:any = []
    let unique_jobs_2021:any = []
    let unique_jobs_2020:any = []


  
    for(let i=1;i<data.length;i++){
      for(let j=0;j<job_titles.length;j++){
        if(data[i].job_title!==job_titles[j]){
          job_titles.push(data[i].job_title)
  
        }
      }
    }
  
    for (let i = 0; i < data.length; i++) {
      if (data[i].work_year === 2024) {
        ctr[0] = ctr[0] + 1;
        totalSalary[0] += data[i].salary;
      }
      if (data[i].work_year === 2023) {
        ctr[1] = ctr[1] + 1;
        totalSalary[1] += data[i].salary;
      }
      if (data[i].work_year === 2022) {
        ctr[2] = ctr[2] + 1;
        totalSalary[2] += data[i].salary;
      }
      if (data[i].work_year === 2021) {
        ctr[3] = ctr[3] + 1;
        totalSalary[3] += data[i].salary;
      }
      if (data[i].work_year === 2020) {
        ctr[4] = ctr[4] + 1;
        totalSalary[4] += data[i].salary;
      }
    }
  
    for (let i = 0; i < 5; i++) {
      averageSalary[i] = totalSalary[i] / ctr[i];
    }

    for(let i=0;i<=job_titles.length;i++){
        
        for(let j=0;j<data.length;j++){
            let ctr=0;
            const word = data[j].job_title;
            
            job_titles.map((item:any,index:any)=>(
                (item==word) ? ctr++ : ctr
            ))
            if(job_titles[i++]!==data[j].job_title && ctr ===0 ){
                job_titles.push(data[j].job_title);


            }
            
        }
        
    }

    for(let i=0;i<job_titles.length;i++){
        unique_jobs_2024[i] = 0;
        unique_jobs_2023[i] = 0;
        unique_jobs_2022[i] = 0;
        unique_jobs_2021[i] = 0;
        unique_jobs_2020[i] = 0;

    }


    for(let j=1;j<job_titles.length;j++){
    
        for(let i=0;i<data.length;i++){
            if(data[i].work_year===2024){
                
                    if(job_titles[j]===data[i].job_title){
                        unique_jobs_2024[j]+=1;
                    }
                
    
                 
            }


        }
        for(let i=0;i<data.length;i++){
            if(data[i].work_year===2023){
                
                    if(job_titles[j]===data[i].job_title){
                        unique_jobs_2023[j]+=1;
                    }
                
    
                 
            }


        }
        for(let i=0;i<data.length;i++){
            if(data[i].work_year===2022){
                
                    if(job_titles[j]===data[i].job_title){
                        unique_jobs_2022[j]+=1;
                    }
                
    
                 
            }


        }
        for(let i=0;i<data.length;i++){
            if(data[i].work_year===2021){
                
                    if(job_titles[j]===data[i].job_title){
                        unique_jobs_2021[j]+=1;
                    }
                
    
                 
            }


        }
        for(let i=0;i<data.length;i++){
            if(data[i].work_year===2020){
                
                    if(job_titles[j]===data[i].job_title){
                        unique_jobs_2020[j]+=1;
                    }
                
    
                 
            }


        }

    }



   

    return { ctr, averageSalary ,year,job_titles,unique_jobs_2024,unique_jobs_2020,unique_jobs_2021,unique_jobs_2022,unique_jobs_2023};
  }
  

export default MyProvider;