import { useContext } from 'react'
import './index.scss'
import { AnalyzerContext } from '../../context'

const BottomResultBox = () => {
  const { analyzerTextData } = useContext(AnalyzerContext);
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: analyzerTextData?.bottomBox?.avgReadingTime < 1 ? '~1 minute' : analyzerTextData?.bottomBox?.avgReadingTime,
    },
    {
      title: 'Longest word:',
      value: analyzerTextData?.bottomBox?.longWord || '-',
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
