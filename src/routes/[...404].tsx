import { Link } from '@solidjs/router'

export default function() {
  return (
    <>
      <Title>404</Title>
      <div class="full flex-center flex-col bg-gray-100/75 text-blue-400">
        <h1 class="text-4xl font-extrabold">404</h1>
        <div class="flex space-x-1 mt-1">
          <h1 class="text-2xl font-extrabold">Page Not Found</h1>
          <div class="pt-1">
            <div class="i-carbon-face-dissatisfied-filled h-4 w-4" />
          </div>
        </div>
        <Link href="/" class="flex items-center space-x-1 mt-4 transition hover:(text-gray-400/40)">
          <div class="i-carbon-arrow-left h-7 w-7" />
          <span class="font-extrabold">
            <h1>Go Back</h1>
          </span>
        </Link>
      </div>
    </>
  )
}
