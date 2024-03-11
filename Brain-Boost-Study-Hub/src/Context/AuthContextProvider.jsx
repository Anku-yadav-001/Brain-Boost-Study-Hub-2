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

   let [chemistry,setChemistry]=useState(false)
   let [math,setMath]=useState(false)
   let [english,setEnglish]=useState(false)
   let [beee,setBeee]=useState(false)
   let [eGraphic,setEgraphic]=useState(false)

   let [physics,setPhysics]=useState(false)
   let [math2,setmath2]=useState(false)
   let [mechanical,setMechanical]=useState(false)
   let [civil,setCivil]=useState(false)
   let [basic,setBasic]=useState(false)

   let [math3,setMath3]=useState(false)
   let [ada,setAda]=useState(false)
   let [software,setSoftware]=useState(false)
   let [coa,setCoa]=useState(false)
   let [os,setOs]=useState(false)

   let [ml,setMl]=useState(false)
   let [cn,setCn]=useState(false)
   let [cd,setCd]=useState(false)
   let [pm,setPm]=useState(false)
   
    return (
        <>
        <AuthContext.Provider value={{firstSemSub,setFirstSemSub,secondSemSub,setSecondSemSub,thirdSemSub,setThirdSemSub,fourthSemSub,setFourthSemSub,
                                     fifthSemSub,setFiveSemSub,sixSemSub,setSixSemSub,sevenSemSub,setSevenSemSub,eightSemSub,setEightSemSub,ecBranch,setEcBranch ,
                                     csBranch,setCsBranch,ceBranch,setCeBranch ,meBranch,setMeBranch,htmlNotes,setHtmlNotes,
                                     cssNotes,setCssNotes,jsNotes,setJsNotes,reactNotes,setReactNotes,chemistry,setChemistry,math,setMath,
                                     english,setEnglish,beee,setBeee,eGraphic,setEgraphic,math3,setMath3,ada,setAda,software,setSoftware,coa,setCoa,os,setOs,
                                     ml,setMl,cn,setCn,cd,setCd,pm,setPm,physics,math2,mechanical,civil,basic,setPhysics,setmath2,setMechanical,setCivil,setBasic}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
export default AuthContextProvider