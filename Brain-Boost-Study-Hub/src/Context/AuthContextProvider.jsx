import { createContext, useState } from "react"

export let AuthContext=createContext()
function AuthContextProvider({children}){
   let [firstSemSub,setFirstSemSub]=useState(false)
   let [secondSemSub,setSecondSemSub]=useState(false)
   let [thirdSemSub,setThirdSemSub]=useState(false)
   let [fourthSemSub,setFourthSemSub]=useState(false)
   let [fifthSemSub,setFiveSemSub]=useState(false)
   let [sixSemSub,setSixSemSub]=useState(false)
   let [sevenSemSub,setSevenSemSub]=useState(false)
   let [eightSemSub,setEightSemSub]=useState(false)

   let [csBranch,setCsBranch]=useState(false)
   let [ecBranch,setEcBranch]=useState(false)
   let [ceBranch,setCeBranch]=useState(false)
   let [meBranch,setMeBranch]=useState(false)
   
   let [htmlNotes,setHtmlNotes]=useState(false)
   let [cssNotes,setCssNotes]=useState(false)
   let [jsNotes,setJsNotes]=useState(false)
   let [reactNotes,setReactNotes]=useState(false)

    return (
        <>
        <AuthContext.Provider value={{firstSemSub,setFirstSemSub,secondSemSub,setSecondSemSub,thirdSemSub,setThirdSemSub,fourthSemSub,setFourthSemSub,
                                     fifthSemSub,setFiveSemSub,sixSemSub,setSixSemSub,sevenSemSub,setSevenSemSub,eightSemSub,setEightSemSub,ecBranch,setEcBranch ,
                                     csBranch,setCsBranch,ceBranch,setCeBranch ,meBranch,setMeBranch,htmlNotes,setHtmlNotes,
                                     cssNotes,setCssNotes,jsNotes,setJsNotes,reactNotes,setReactNotes}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
export default AuthContextProvider