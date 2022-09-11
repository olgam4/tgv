import Animation from '@components/animation'
import Sand from '@islands/sand'

import Plan from '../assets/Plan.txt'

export default function () {
  return (
    <>
      <Title>T G V</Title>
      <div class="full flex flex-col bg-blue-400">
        <h1 class="absolute uppercase top-1/4 w-full text-center text-yellow-400 text-6xl">
          Building Something Amazing
        </h1>
        <h1 class="absolute uppercase translate-x-1 translate-y-1 top-1/4 w-full text-center text-yellow-400 text-6xl">
          Building Something Amazing
        </h1>
        <div>
          <Sand />
        </div>
        <div class="h-3/5">
          <Animation className="bg-[#ffffe3]" src={Plan} />
        </div>
        <div class="bg-[#ffffe3] flex-grow" />
      </div>
    </>
  )
}
