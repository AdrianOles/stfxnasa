import Image from 'next/image'
import { Figtree } from 'next/font/google'
import { useEffect, useState } from 'react'
import CircleLoader from 'react-spinners/CircleLoader'
import AuthCode from 'react-auth-code-input';
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from 'next/router';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const figtree = Figtree({ subsets: ['latin'] })

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [gameBegins, setGameBegins] = useState(false);
    const router = useRouter();
    const { width, height } = useWindowSize()

    useEffect(() => {
        const changeLoading = setTimeout(() => {
            setLoading(!loading);
        }, 4000)
    }, []);

    return (
        <div className={`w-[100vw] h-[100vh] flex items-center justify-center relative bg-black ${figtree.className}`}>
            <div className='bg-[#CE18F2] h-[300px] w-[300px] absolute bottom-1/2 top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2' />
            <div className='bg-[#613EFA] h-[500px] w-[500px] absolute -top-10 -left-10 rounded-full' />
            <div className='bg-[#CE18F2] h-[300px] w-[300px] absolute top-0 right-0 rounded-full' />
            <div className='w-full h-full bg-back absolute' />

            <Confetti
                width={width}
                height={height}
            />

            <div className='w-full h-full flex items-center justify-center z-50 flex-col gap-10'>
                <CircleLoader
                    size={300}
                    color={"#CE18F2"}
                />
            </div>
        </div>
    )
}
