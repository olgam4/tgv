// @refresh reload
import { Body, FileRoutes, Head, Html, Link, Meta, Scripts, Title } from 'solid-start'
import { ErrorBoundary } from 'solid-start/error-boundary'
import { Routes } from '@solidjs/router'
import { Suspense } from 'solid-js'
import { Toaster } from 'solid-toast'

import './assets/global.css'

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="manifest" href="/manifest.webmanifest" />
        <Meta name="description" content="SolidJS Animations" />
        <Link rel="icon" href="/favicon.ico" type="image/png" sizes="16x16" />
        <Link rel="apple-touch-icon" href="/pwa-192x192.png" sizes="192x192" />
        <Meta name="theme-color" content="#5897E5" />
        <Title>tgv</Title>
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <Routes>
              <FileRoutes />
            </Routes>
            <Toaster
              position="top-right"
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                className: 'bg-white text-gray-400',
                duration: 5000,
              }}
            />
            <div class="absolute bottom-5 sm:bottom-1 left-1/2 -translate-x-1/2 text-gray-200 text-sm">
              built with ❤️ using <u><a href="https://bat.glo.quebec">🦇</a></u>
            </div>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  )
}
