import {Billboard  as BillboardTypes} from '@/types'
import React from 'react';


export const revalidate = 0;
interface BillboardProps{
    data : BillboardTypes
}

const Billboard:React.FC<BillboardProps> = ({
    data
}) => {
    return (
        <div className='p-4 sm:p-6 lg:p-8 rounded-xl  overflow-hidden'>
            <div
            className=' mt-16 rounded-xl relative aspect-square md:aspect-[2.4/1] bg-center overflow-hidden bg-no-repeat bg-contain'
            style={{backgroundImage: `url(${data?.imageUrl})`}}
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xs'>
                        {/* {data.label} */}
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Billboard;