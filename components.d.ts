export {}
declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': any
    }
    interface Directives {
      submit: (e: any) => void
    }
  }
}
