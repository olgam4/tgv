import Animation from '@components/animation'
import Wave from '@islands/wave'
import { Motion } from '@motionone/solid'

import Plan from '../assets/Plan.txt'

export default function () {
  const text = 'Building something amazing'
  return (
    <>
      <Title>T G V</Title>
      <div class="full flex flex-col bg-[#ffffe3]">
        <Motion.div
          animate={{ y: [0, 4, 0, -4, 0], transition: { duration: 5, repeat: Infinity }}}
          class="absolute top-20 -translate-y-12 md:translate-y-0 uppercase w-full text-center text-6xl md:text-8xl xl:text-9xl"
        >
          <div class="relative">
            <h1 class="absolute w-full text-yellow-500">
              {text}
            </h1>
            <h1 class="absolute w-full text-yellow-400 translate-x-1 translate-y-1">
              {text}
            </h1>
          </div>
        </Motion.div>
        <div>
          <Wave fill="#D8D8C0"/>
          <div class="-mt-[23%]">
            <Wave fill="white" />
          </div>
          <div class="-mt-[23%]">
            <Wave fill="#60A5FA" />
          </div>
          <div class="-mt-[24%]">
            <Wave fill="#5EA0F3" />
          </div>
          <div class="-mt-[24%]">
            <Wave fill="#5897E5" />
          </div>
        </div>
        <div class="mt-32 sm:mt-0 h-3/5">
          <Animation className="" src={Plan} />
        </div>
        <div class="bg-[#ffffe3] flex-grow" />
      </div>
    </>
  )
}
