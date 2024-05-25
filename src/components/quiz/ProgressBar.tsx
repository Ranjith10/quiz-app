import { Line } from 'rc-progress'

const ProgressBar = ({ progressPercent }: { progressPercent: number }) => {
  return (
    <>
      <Line
        percent={progressPercent}
        strokeWidth={1}
        strokeColor='#7e3ff2'
        trailColor={'#D9D9D9'}
      />
    </>
  )
}

export default ProgressBar
