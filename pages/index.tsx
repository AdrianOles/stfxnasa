import Image from 'next/image'
import { Figtree } from 'next/font/google'
import { useEffect, useState } from 'react'
import CircleLoader from 'react-spinners/CircleLoader'
import AuthCode from 'react-auth-code-input';
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from 'next/router';


const figtree = Figtree({ subsets: ['latin'] })

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [gameBegins, setGameBegins] = useState(false);
  const router = useRouter();

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
      {
        loading ? (
          <>
            <div className='w-full h-full flex items-center justify-center z-50 flex-col gap-10'>
              <CircleLoader
                size={300}
                color={"#CE18F2"}
              />
              <div className='text-3xl text-white'>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Teleportation loading...',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Teleportation calibrating...',
                    1000,
                    'Teleportation booting...',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>
          </>
        ) : (
            <>
              {
                !gameBegins && (
                    <div className='text-white text-3xl z-50 max-w-[900px]'>
                      <TypeAnimation
                        style={{ whiteSpace: 'pre-line' }}
                        omitDeletionAnimation={true}
                        speed={50}
                        sequence={[
                          `Welcome scientists, here is the teleportation interface used throughout your travels.
                    Please pay attention, this message will disapear shortly!
                    Within an hour, I will run out of power, leaving you stranded...
                    Please fix my components using your world-class skills, resolving any errors you come across.
                    \nTelelporting in...
                    10............9............8............7............6............5............4............3............2............1`,
                          2000,
                          () => {
                            router.push('cpu');
                          },
                          '',
                        ]}
                      />
                    </div>
                )
              }
            </>
        )
      }

    </div>
  )
}
