import { createContext, useState, ReactNode } from "react";

interface ProviderProps {
    children: ReactNode
}

export const AnalyzerContext = createContext<any>(null);

export const AnalyzerProvider = ({ children }: ProviderProps) => {

    const [analyzerTextData, setAnalyzerTextData] = useState({
        bottomBox: {
            longWord: 0,
            avgReadingTime: 0,
        },
        resultBox: {
            numberOfWords: 0,
            numberOfChars: 0,
            numberOfSentences: 0,
            numberOfParagraphs: 0,
            numberOfPronouns: 0,
        }
    })

    return <AnalyzerContext.Provider value={{analyzerTextData, setAnalyzerTextData}}>
        {children}
    </AnalyzerContext.Provider>
}