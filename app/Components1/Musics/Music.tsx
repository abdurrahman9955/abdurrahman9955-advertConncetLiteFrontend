'use client'

import { FaSearch } from 'react-icons/fa';
import Search from "./Search";
import Music1 from './Music1';
import Music2 from './Music2';
import Music3 from './Music3';
import React, { useState, useEffect } from 'react'
import Back from "./Back";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setQuery } from '@/app/app/searchSlice';



const Music = () => {
 
  const [SearchVisible, setSearchVisible] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string>('Music1');

  const handleSearch = ()=>{
    setSearchVisible(!SearchVisible);

  };      const  closeSearch = ()=> {
    setSearchVisible(false);  
       };

       const dispatch = useDispatch();
       const [searchQuery, setSearchQuery] = useState('');
     
       useEffect(() => {
         const storedSearchQuery = sessionStorage.getItem('searchQuery');
         if (storedSearchQuery) {
           setSearchQuery(storedSearchQuery);
         }
       }, []);
     
       const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         setSearchQuery(event.target.value);
       };
     
       const handleSearch1 = () => {
         dispatch(setQuery(searchQuery));
         sessionStorage.setItem('searchQuery', searchQuery);
        
       };


  return (
    <div className=" w-full ">
        <div className="border-2 border-indigo-900 max-sm:py-1 py-2 w-full  ">

       

        <div className="flex justify-items-center  max-lg:justify-between overflow-x-auto  ">
              
                
               <button onClick={() => setSelectedRoute('Music1')}
                type="button" className="text-lime-100 bg-indigo-950
                ml-3 rounded-sm h-7  max-sm:h-6 text-sm w-auto pl-5 pr-5 mr-5
                lg:px-7 hover:bg-neutral-700  ">MusicInstruments</button>
                
                
                <input type="text" className="  bg-white  
                flex-1 border-2 border-blue-950 
                px-28 max-md:px-20 md:text-sm
                sm:rounded-l-full
                max-sm:px-5 max-sm:rounded-r-full max-sm:hidden  "
                placeholder="search for here  " 
                value={searchQuery}
                onChange={handleInputChange} /> 
                
                <button type="submit" 
                className="bg-red-900
                 ml-0 text-slate-200 hover:bg-green-950
                rounded-r-full px-4 max-sm:hidden"
                onClick={handleSearch1}
                >search</button>

             <button  onClick={handleSearch}  className='text-2xl text-blue-950 
            sm:hidden mr-5 '>

                {SearchVisible ? (
             <span  onClick={closeSearch} 
             ><Back  /></span>  ) : (
             <FaSearch  />  )}
            
            </button>

            <div  >
            {SearchVisible && 
            
            
            (<Search />)
               
               }
               </div>

               <button onClick={() => setSelectedRoute('Music3')}
                 type="button" className="text-lime-100 bg-indigo-950
                ml-3 rounded-sm h-7 max-sm:h-6 text-sm   mr-2  w-auto pl-5 pr-5
                hover:bg-neutral-700 
                 ">Filters</button>

             
           </div>
           </div>
        <div>
            <div  >
            
            </div>
             
              
          {selectedRoute === 'Music1' && <Music1 />}
           {selectedRoute === 'Music2' && <Music2 />}
           {selectedRoute === 'Music3' && <Music3 />}
           
          
          

          </div>      
    </div>
  )
}

export default Music




