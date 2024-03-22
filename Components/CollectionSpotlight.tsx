import React from 'react'
import image1 from '../asset/two/1.jpeg'
import image2 from '../asset/two/2.jpeg'
import Image from 'next/image'
export default function CollectionSpotlight() {


    type ApiData = {
        imageUrl: any,
        title: String,
        time: String,
        location: String,
    }

    const Data: Array<ApiData> = [
        {
            imageUrl: image1,
            title: 'Las Vegas Aviators',
            time: 'Oct 15 | Sun | 4:30 PM',
            location: 'Las Vegas Ballpark, Las Vegas, Nevada',
        },
        {
            imageUrl: image2,
            title: 'Sacramento River Cats',
            time: 'Oct 15 | Sun | 4:30 PM',
            location: 'Sutter Health Park, Sacramento, California',
        },
        {
            imageUrl: image1,
            title: 'Las Vegas Aviators',
            time: 'Oct 15 | Sun | 4:30 PM',
            location: 'Las Vegas Ballpark, Las Vegas, Nevada',
        },
        {
            imageUrl: image2,
            title: 'Sacramento River Cats',
            time: 'Oct 15 | Sun | 4:30 PM',
            location: 'Sutter Health Park, Sacramento, California',
        },

    ]

    return (
        <div className='flex items-center justify-center flex-col mt-10 bg-[#F9F8FF] p-5 rounded-md'>
            <h1 className='text-4xl font-semibold mb-4 text-center'>Collection Spotlight</h1>
            <p className='text-center max-w-[900px] mb-3 text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam facere ducimus harum molestiae possimus amet nostrum quidem sequi, a odio eum consectetur quis reprehenderit, deserunt tenetur eaque minus beatae. Cupiditate?</p>

            <div id='scrollbar' className='flex md:w-[740px] max-md:w-full max-sm:mx-2 overflow-y-hidden overflow-x-scroll'>

                {Data.map((e, i) => {
                    return <div key={i} className='w-[230px] h-[550px] flex items-center justify-between flex-col shadow rounded-md p-1 pt-2 bg-white m-2 flex-shrink-0 relative'>
                        <div className='h-[370px] overflow-hidden shadow-md rounded'>
                            <Image
                                src={e.imageUrl}
                                alt=''
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='w-[25px] h-[25px] absolute bg-[#F9F8FF] rounded-full top-[388px] -right-[10px]'></p>
                        <p>--------------------------</p>
                        <p className='w-[25px] h-[25px] absolute bg-[#F9F8FF] rounded-full top-[388px] -left-[10px]'></p>
                        <div className='w-full text-center'>
                            <p className='my-3 px-1 font-medium'>{e.title}</p>
                            <p className='mb-2 font-light text-sm px-1'>{e.time}</p>
                            <p className='mb-3 px-1 text-sm text-slate-600/90'>{e.location}</p>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}
