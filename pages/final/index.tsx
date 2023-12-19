import Image from 'next/image'
import { Figtree } from 'next/font/google'
import { useEffect, useState } from 'react'
import CircleLoader from 'react-spinners/CircleLoader'
import AuthCode from 'react-auth-code-input';
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from 'next/router';

const figtree = Figtree({ subsets: ['latin'] })

export default function Home() {
    const [finalStage, setFinalStage] = useState(false);
    const router = useRouter();

    const cpuChange = (res: any) => {
        if (res === "100011") {
            setFinalStage(true);
        }
    };
    const finalChange = (res: any) => {
        console.log(res)
        if (res === "FED10E") {
            console.log("push")
            router.push("congrats")
        }
    };

    return (
        <div className={`w-[100vw] h-[100vh] flex flex-col items-center justify-center relative bg-black ${figtree.className} overflow-hidden`}>
            <div className='bg-[#CE18F2] h-[300px] w-[300px] absolute bottom-1/2 top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 shape' />
            <div className='bg-[#613EFA] h-[500px] w-[500px] absolute -top-10 -left-10 rounded-full shape' />
            <div className='bg-[#CE18F2] h-[300px] w-[300px] absolute top-0 right-0 rounded-full shape' />
            <div className='w-full h-full bg-back absolute' />


            <div className='text-white z-50 flex flex-col w-full pt-24 px-24'>
                <div className='text-3xl font-semibold'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'FPC',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'FPC - Final Protocol Confirmation',
                            5000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                <div className='text-xl text-red-500 my-2 font-semibold'>
                    Reboot code is required to finalize teleportation.
                </div>
            </div>
            <div className=" w-full h-full z-50 text-white max-w-[50vw] mt-20 text-xl text-center mx-auto">
                {
                    finalStage ? (
                        <div className='flex gap-10 items-center mx-auto w-full'>
                            <div className='w-full text-right animate-pulse text-green-400 font-semibold'>
                                Reboot code:
                            </div>
                            <div className='w-full mr-auto'>
                                <AuthCode onChange={finalChange} />
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-10'>
                            <div>
                                <div>
                                    "In the dance of numbers, a curious sight,
                                    Lights flicker, shifting, creating a plight.
                                    Two turns to naught, three to one's realm,
                                    This cryptic shift, a code to overwhelm.
                                </div>
                                <div className='mt-4' />
                                <div>
                                    In this flickering maze, digits align,
                                    Unlock the secret, the answer entwined.
                                    Teleportation's key, within this code's grace,
                                    Crack it well to escape this confined space."
                                </div>
                            </div>
                            <div>
                                <AuthCode onChange={cpuChange} />
                            </div>
                        </div>
                    )
                }
                
            </div>

        </div>
    )
}
