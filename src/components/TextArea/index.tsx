import { useContext, useEffect, useRef } from 'react'
import './index.scss'
import { pronouns } from '../../data/pronouns';
import { AnalyzerContext } from '../../context';

const TextArea = () => {
  const { analyzerTextData, setAnalyzerTextData } = useContext(AnalyzerContext);
  const textAreaRef: any = useRef(null);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  const analyzeText = (e: any) => {
    const { value } = e?.target;

    const resultBox = { ...analyzerTextData?.resultBox };
    const bottomBox = { ...analyzerTextData?.bottomBox };

    const numberOfWords = value?.split(' ').filter((word: string) => word !== '');
    const numberOfChars = value?.length;
    const numberOfSentences = value?.split(/[.?]/).filter((word: string) => word !== '');
    const numberOfParagraphs = value ? value?.split(/\n+/)?.length : 0;
    
    let allWords = value?.toLowerCase()?.split(/[.? ]/);

    const numberOfPronouns = allWords?.filter((word: string) => pronouns.includes(word))?.length;
    
    const longWord = allWords?.reduce((prev: string, acc: string) => prev.length > acc.length ? prev : acc, '');
    const avgReadingTime = allWords?.length / 225;

    resultBox['numberOfWords'] = numberOfWords?.length
    resultBox['numberOfChars'] = numberOfChars
    resultBox['numberOfParagraphs'] = numberOfParagraphs
    resultBox['numberOfSentences'] = numberOfSentences?.length
    resultBox['numberOfPronouns'] = numberOfPronouns

    bottomBox['longWord'] = longWord;
    bottomBox['avgReadingTime'] = avgReadingTime;

    setAnalyzerTextData({
      ...analyzerTextData,
      resultBox,
      bottomBox
    });
  }

  return <textarea className="text-area" ref={textAreaRef} placeholder="Paste your text here..." onChange={analyzeText} />
}

export default TextArea