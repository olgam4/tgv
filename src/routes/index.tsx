import Animation from '@components/animation'
import Sand from '@islands/sand'

import Plan from '../assets/Plan.txt'

export default function () {
  return (
    <>
      <Title>T G V</Title>
      <div class="full flex flex-col bg-blue-400">
        <div class="absolute top-3/4 -translate-y-12 md:translate-y-0 md:top-1/4 uppercase w-full text-center text-yellow-400 text-6xl">
          <div class="relative">
            <h1 class="absolute w-full">
              Building Something Amazing
            </h1>
            <h1 class="absolute w-full translate-x-1 translate-y-1">
              Building Something Amazing
            </h1>
          </div>
        </div>
        <div>
          <Sand />
        </div>
        <div class="h-3/5">
          <Animation className="-mt-4 md:mt-0 bg-[#ffffe3]" src={Plan} />
        </div>
        <div class="bg-[#ffffe3] -mt-4 flex-grow" />
      </div>
    </>
  )
}
