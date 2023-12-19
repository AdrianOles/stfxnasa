import Image from 'next/image'
import { Figtree } from 'next/font/google'
import { useEffect, useState } from 'react'
import CircleLoader from 'react-spinners/CircleLoader'
import AuthCode from 'react-auth-code-input';
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from 'next/router';

const figtree = Figtree({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter();
    const loaderProp = ({ src }: any) => { return src }

    const cpuChange = (res: any) => {
        if (res === "100110") {
            //26
            router.push("ram")
        }
    };

    return (
        <div className={`w-[100vw] h-[100vh] flex items-center justify-center relative bg-black ${figtree.className} overflow-hidden`}>
            <div className='bg-[#CFC7C7] h-[300px] w-[300px] absolute bottom-1/2 top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 shape' />
            <div className='bg-[#898787] h-[500px] w-[500px] absolute -top-10 -left-10 rounded-full shape' />
            <div className='bg-[#CFC7C7] h-[300px] w-[300px] absolute top-0 right-0 rounded-full shape' />
            <div className='w-full h-full bg-back absolute' />
            <Image
                src="https://assets.stickpng.com/images/58429400a6515b1e0ad75acc.png"
                alt="NASA logo"
                className='absolute z-50 top-24 right-24 opacity-[70%]'
                width={100}
                height={100}
                loader={loaderProp}
            />

            <div className='text-white z-50 flex flex-col w-full h-full p-24 gap-20'>
                <div>
                    <div className='text-3xl font-semibold'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Storage',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Storage - SSD',
                                5000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <div className='text-xl text-red-500 mt-2 font-semibold'>
                        Error: Corruped Data*
                    </div>
                </div>

                <div className='flex w-full h-full'>
                    <div className='w-full h-full flex items-center justify-center scale-150'>
                        <AuthCode onChange={cpuChange} />
                    </div>
                    <div className='w-full h-full relative'>
                        <Image 
                            src="https://i.pinimg.com/originals/f6/23/a5/f623a53a7d59d223cfab3998a2e6c4ce.gif"
                            fill
                            className='rounded-[20px] image-shadow'
                            alt="CPU animation"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
