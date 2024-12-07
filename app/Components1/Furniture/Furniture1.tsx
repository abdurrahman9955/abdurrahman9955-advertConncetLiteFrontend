import React from "react";
import { useState } from "react";
import Furniture2 from "./Furniture2";
import Furniture4 from "./Furniture4";
import Furniture5 from "./Furniture5";

const Furniture1 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Furniture2');


  return (
    <div className='flex flex-col   pt-1 sm:pt-2 w-full 
     border-2 border-blue-950 h-auto'>

        <div className='flex justify-center overflow-x-auto '>
          <div>
            <button onClick={() => setSelectedRoute('Furniture2')}
            className='text-sm text-white max-sm:h-6 w-20 h-7 bg-blue-950 mr-2 
            hover:bg-blue-800 rounded-sm overflow-visible'>Photos</button>
          </div>

          <div>
            <button onClick={() => setSelectedRoute('Furniture4')}
            className='text-sm text-white max-sm:h-6 w-20 h-7 bg-blue-950 mr-2 
            hover:bg-blue-800 rounded-sm'>Banner</button>
          </div>

          <div>
            <button onClick={() => setSelectedRoute('Furniture5')}
            className='text-sm text-white w-20 h-7 max-sm:h-6 bg-blue-950 mr-2 
            hover:bg-blue-800 rounded-sm'>Videos</button>
          </div>
      
        </div>

       <div className='flex justify-center flex-wrap  border-2
        border-blue-950 h-auto sm:m-2 bg-white
       w-5xl overflow-y-auto p-1 gap-4 max-md:mt-1
       '>
      
           {selectedRoute === 'Furniture2' && <Furniture2 />}
           {selectedRoute === 'Furniture4' && <Furniture4 />}
           {selectedRoute === 'Furniture5' && <Furniture5 />}
           

       </div>
    </div> 
  )
}

export default Furniture1


