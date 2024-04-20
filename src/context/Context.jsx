import React, {createContext} from "react";
import runChat from "../config/gemini";

export const Context = React.createContext();

function ContextProvider(props) {
    const [userInput, setUserInput] = React.useState("");
    const [recentPrompt, setRecentPrompt] = React.useState("");
    const [prevPrompts, setPrevPrompts] = React.useState([]);
    const [showResult, setShowResult] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [resultData, setResultData] = React.useState("");

    const onSent = async(prompt) =>{
        await runChat(userInput)
    }

    onSent("What is react?")
    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        userInput,
        setUserInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider