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
   
    return (
        <>
        <AuthContext.Provider value={{firstSemSub,setFirstSemSub,secondSemSub,setSecondSemSub,thirdSemSub,setThirdSemSub,fourthSemSub,setFourthSemSub,
                                     fifthSemSub,setFiveSemSub,sixSemSub,setSixSemSub,sevenSemSub,setSevenSemSub,eightSemSub,setEightSemSub   }}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
export default AuthContextProvider