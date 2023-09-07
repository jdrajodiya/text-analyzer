import { useContext } from 'react'
import './index.scss'
import { AnalyzerContext } from '../../context'

const ResultBox = () => {
  const { analyzerTextData } = useContext(AnalyzerContext)

  const resultBar = [
    {
      title: 'Words',
      value: analyzerTextData?.resultBox?.numberOfWords,
    },
    {
      title: 'Characters',
      value: analyzerTextData?.resultBox?.numberOfChars,
    },
    {
      title: 'Sentences',
      value: analyzerTextData?.resultBox?.numberOfSentences,
    },
    {
      title: 'Paragraphs ',
      value: analyzerTextData?.resultBox?.numberOfParagraphs,
    },
    {
      title: 'Pronouns',
      value: analyzerTextData?.resultBox?.numberOfPronouns,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
