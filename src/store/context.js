import { createContext, useState } from "react";
import runChat from "./Api";


export const GlobalData = createContext({
  handelFetch:()=>{},
  newChat:()=>{}
})



const GlobalDataProvider = ({ children }) => {
  const[input, setInput] = useState();
  const [recentInput, setRecentInput] = useState("")
  const [preInput , setPreInput] = useState([])
  const [loading, setLoading]  = useState(false)
  const[showResult, setShowResult] = useState(false)
  const [result, setResult] = useState("")


  const newChat = ()=>{
    setLoading(false);
    setShowResult(false);
  }

  
  const handelFetch = async (prompt) => {
    setResult("");          
    setShowResult(true);   
    setLoading(true);   
    setRecentInput(prompt);
    
    try {
      const finalOutput = await runChat(prompt); 

      // Only add to preInput if it's a new input
      setPreInput(pre => {
        if (!pre.includes(prompt)) {
          return [...pre, prompt];
        }
        return pre;
      });

      let responseArray = finalOutput.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += '<b>' + responseArray[i] + '</b>';
        }
      }
      let newResponse2 = newResponse.split("*").join("<br/>");
      setResult(newResponse2);    
      
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); 
    }

    setInput("");   
}


  
  
  
  return (
    <GlobalData.Provider value={{handelFetch,setInput,input,showResult,recentInput,result,loading,preInput,newChat}}>
      {children}
    </GlobalData.Provider>
  );
};


export default GlobalDataProvider