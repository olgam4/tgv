import type { Component } from "solid-js"

type Props = {
  fill: string
}

const Sand: Component<Props> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={props.fill} fill-opacity="1" d="M0,256L40,261.3C80,267,160,277,240,245.3C320,213,400,139,480,138.7C560,139,640,213,720,224C800,235,880,181,960,138.7C1040,96,1120,64,1200,58.7C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
  )
}

export default Sand
