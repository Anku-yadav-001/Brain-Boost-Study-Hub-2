import { Link } from "react-router-dom"
import "../Styling/Papers.css"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContextProvider"

function CsPapers(){
    let {math3,ada,software,coa,os,ml,cn,cd,pm}=useContext(AuthContext)
    return <>
        <div className="select-subject-container" style={{display:math3 && !ada && !software && !coa && !os && !ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! ENGINEERING MATHEMATICS-3 PAPERS !!</h1>
        <div className="subject-list">
                   <Link to='https://drive.google.com/file/d/1PNNY-CTy6ig8eGUQlHCSATYv6Xr3trNE/view?usp=drive_link' target="_blank"> <button>ad-ag-an-at-ci-cs-ct-co-ee-ex-ft-it-mi-mm-bt401-mathematics-3-jun-2023</button> </Link>
                   <Link to='https://drive.google.com/file/d/1v4PmVNQOR4Wd9jAcrqCMAfSLUGVzxwP-/view?usp=drive_link' target="_blank"> <button>ad-ag-at-ci-cs-ct-co-ee-ex-ft-it-mi-mm-bt-401-mathematics-3-jun-2022</button> </Link>
                   <Link to='https://drive.google.com/file/d/1_2W11BMDi7PH6n6N-pvp9UNR50LJAMFd/view?usp=drive_link' target="_blank"> <button>ad-ag-at-ci-cs-ct-co-ee-ex-ft-it-mi-mm-bt-401-mathematics-3-nov-2022</button> </Link>
                   <Link to='https://drive.google.com/file/d/1Z5IwOZVgvCRST1PU72qZ9xxLdt3ovnzB/view?usp=drive_link' target="_blank"> <button>at-cs-ee-ex-ei-ft-it-mi-bt-401-mathematics-3-may-2019</button> </Link>
                   <Link to='https://drive.google.com/file/d/1jrlyWC2rhQwjxxwGFTNp4mEkN2v93Dn1/view?usp=drive_link' target="_blank"> <button>bt-401-mathematics-3-jun-2023</button> </Link>
                   <Link to='https://drive.google.com/file/d/1OWVE0CGeYJIhq_vqxX8GeJBWR_k0yJm4/view?usp=drive_link' target="_blank"> <button>btech-4-sem-engineering-mathematics-3-dec-2015</button> </Link>
                   <Link to='https://drive.google.com/file/d/1NyfIQ77IfXS5XBQCBzr1TWZTef1PhQjK/view?usp=drive_link' target="_blank"> <button>btech-4-sem-engineering-mathematics-3-jun-2015</button> </Link>
                   <Link to='https://drive.google.com/file/d/1lznd4l08WGzzf5VsBixk5Webzk_R9edT/view?usp=drive_link' target="_blank"> <button>btech-4-sem-engineering-mathematics-3-jun-2016</button> </Link>
                   <Link to='https://drive.google.com/file/d/1ILhIQXmBjQtBnC-DyfW1KOR44DbxkMNG/view?usp=drive_link' target="_blank"> <button>btech-4-sem-mathematics-3-dec-2016</button> </Link>
                   <Link to='https://drive.google.com/file/d/1cbY-K7mW1GByHz3IFUNbM9vsHJXKObDT/view?usp=drive_link' target="_blank"> <button>btech-4-sem-mathematics-3-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1YjR212SnbI4CPeLwIQh5jXNjk_GOh3bG/view?usp=drive_link' target="_blank"> <button>cs-ee-ex-it-mi-bt-401-mathematics-3-dec-2020</button> </Link>
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && ada && !software && !coa && !os && !ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! ANALYSIS AND DESIGN OF ALGORITHM PAPERS !!</h1>
        <div className="subject-list">
                    <Link to='https://drive.google.com/file/d/1lN27RYaxFv06fl95rY89qSt7iSQ7yQ8Q/view?usp=drive_link' target="_blank"> <button>cs-4-sem-228-analysis-and-design-of-algorithm-jun-2017</button> </Link>
                   <Link to='https://drive.google.com/file/d/1ztoIQSoEpA1J6ASEudazGRVfWOLnfLRF/view?usp=drive_link' target="_blank"> <button>cs-4-sem-228-analysis-and-design-of-algorithm-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1Y-gKHKw3D-lV-73SZESYRHoLjOhLXCbR/view?usp=drive_link' target="_blank"> <button>cs-402-analysis-design-of-algorithm-jun-2022</button> </Link>
                   <Link to='https://drive.google.com/file/d/1OqJvTSOCpgTTiiloqRHJdtw0E4UYbUdT/view?usp=drive_link' target="_blank"> <button>cs-402-analysis-design-of-algorithm-jun-2023</button> </Link>
                   <Link to='https://drive.google.com/file/d/1WqD3HFFNVupQSMVIgM6xorCNuN85ylbv/view?usp=drive_link' target="_blank"> <button>cs-402-analysis-design-of-algorithm-may-2019</button> </Link>
                   <Link to='https://drive.google.com/file/d/1uYbBxUwVhALKS6UEt8tVsqWU8IKtqGHd/view?usp=drive_link' target="_blank"> <button>cs-402-analysis-design-of-algorithm-nov-2019</button> </Link>
                   <Link to='https://drive.google.com/file/d/1OJD-GcJBNgfYHBLle22iE4uuyW1S8Qkv/view?usp=drive_link' target="_blank"> <button>cs-402-analysis-design-of-algorithm-nov-2023</button> </Link>
                   <Link to='https://drive.google.com/file/d/1Qp5i4uKkL644gZ3SxR6al4HYQHyV4T5x/view?usp=drive_link' target="_blank"> <button>cs-402-analysis-design-of-algorithms-dec-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1FO3Leyie8SnKS0R62QMgjXLKMyBII6Mf/view?usp=drive_link' target="_blank"> <button>cs-402-analysis-design-of-algorithms-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/15_dhXFsCkBHc9EIkkddITKvbW7WRsH1C/view?usp=drive_link' target="_blank"> <button>cs-404-analysis-and-design-of-algortihms-dec-2016</button> </Link>
                   <Link to='https://drive.google.com/file/d/1rgafLrWVrUOXJLSg0upktfd6DDM69xay/view?usp=drive_link' target="_blank"> <button>cs-4004-analysis-and-design-of-algorithm-dec-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1MDQbwYHPoxyS2CF5NIvBwIsY9gjDb2qx/view?usp=drive_link' target="_blank"> <button>cs-4004-analysis-and-design-of-algorithm-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1L069pwvnW03NCZ3H0nsPcrx9tWklFEtv/view?usp=drive_link' target="_blank"> <button>cs-4004-analysis-and-design-of-algorithm-may-2018</button> </Link>
                   <Link to='https://drive.google.com/file/d/1qI_sELk51NLPeDgzcBLsCkd3vcgPyxHf/view?usp=drive_link' target="_blank"> <button>cs-4004-analysis-and-design-of-algorithm-nov-2019</button> </Link>
                   <Link to='https://drive.google.com/file/d/1ALxsEb3jFL81cMKdcz_x4bxK5ZrSrxpo/view?usp=drive_link' target="_blank"> <button>cs-it-404-analysis-and-design-of-algorithm-dec-2015</button> </Link>
                   <Link to='https://drive.google.com/file/d/1SPuqUxmgLZBxZZTIW2fppafaPUHY21zZ/view?usp=drive_link' target="_blank"> <button>cs-it-404-analysis-and-design-of-algorithm-jun-2015</button> </Link>
                   <Link to='https://drive.google.com/file/d/1wHN84jw85a6bdjL8Dwr1RnboxE2kmhGd/view?usp=drive_link' target="_blank"> <button>cs-it-404-analysis-and-design-of-algorithms-jun-2020</button> </Link>
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && software && !coa && !os && !ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! SOFTWARE ENGINEERING PAPERS !!</h1>
        <div className="subject-list">
                    <Link to='https://drive.google.com/file/d/1tfbtp_oKSAgjbMOWWC5lNOYEpO2ybQqf/view?usp=drive_link' target="_blank"> <button>al-cd-cs-ct-co-403-software-engineering-jun-2022</button> </Link>
                   <Link to='https://drive.google.com/file/d/1ATcMp7wV2hY3U6-1KYVqPITamEOHV13O/view?usp=drive_link' target="_blank"> <button>al-cd-cs-ct-co-403-software-engineering-jun-2023</button> </Link>
                   <Link to='https://drive.google.com/file/d/1h3K8-5vrl9PFBS7bTJ4MKr2npeJwrZh8/view?usp=drive_link' target="_blank"> <button>cs-403-software-engineering-dec-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1AV0lTvcGQvmoEIJ1LXqp413Cv36H0k1Y/view?usp=drive_link' target="_blank"> <button>cs-403-software-engineering-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1G1Q6t5169PEgaqvDRBcMIlhS2fiApiBw/view?usp=drive_link' target="_blank"> <button>cs-403-software-engineering-may-2019</button> </Link>
               </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && coa && !os && !ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! COMPUTER ORGANIZATION AND ARCHITECTURE PAPERS !!</h1>
        <div className="subject-list">
                    <Link to='https://drive.google.com/file/d/1dQ2zha50-0qVl_Yhgt6DFn1S1lgzUYEF/view?usp=drive_link' target="_blank"> <button>al-ci-cs-ct-co-io-is-404-computer-organization-and-architecture-jun-2023</button> </Link>
                   <Link to='https://drive.google.com/file/d/1IrZbBgRnuaitkRmDLp-OmHR5TQEgk2Wo/view?usp=drive_link' target="_blank"> <button>ci-cs-ct-co-al-io-is-404-computer-organization-and-architecture-jun-2022</button> </Link>
                   <Link to='https://drive.google.com/file/d/1wkWQ6L4ChpLj4wnN8iDx1ecng4w2X2-G/view?usp=drive_link' target="_blank"> <button>cs-4-sem-225-computer-system-organization-jun-2017</button> </Link>
                   <Link to='https://drive.google.com/file/d/1o6wQPhunpoJILhsYeljf76hjNmfYSen6/view?usp=drive_link' target="_blank"> <button>cs-4-sem-225-computer-system-organization-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1eLetdS8To9qear2YFY-x2lQ-K2VxFGOm/view?usp=drive_link' target="_blank"> <button>cs-4-sem-225-computer-system-orgnisation-jun-2017</button> </Link>
                   <Link to='https://drive.google.com/file/d/1wihqHIdhqs1Aw8Q2YgdtkfeMN2DpK3z1/view?usp=drive_link' target="_blank"> <button>cs-404-computer-organisation-and-architecture-dec-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1N4WfIBFYgxmTMgGfa_eUP5SUCjxfXCKN/view?usp=drive_link' target="_blank"> <button>cs-404-computer-organisation-and-architecture-may-2019</button> </Link>
                   <Link to='https://drive.google.com/file/d/11WxWU6W794lk2WW8CkEv3G8dSSK80gMt/view?usp=drive_link' target="_blank"> <button>cs-4002-computer-system-organization-dec-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1tWCOwTpxsyFxHSGYxo4Y1SFAnSyNUZ5w/view?usp=drive_link' target="_blank"> <button>cs-4002-computer-system-organization-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1IcQ0rKCTpEi9ssnZnNivFuny3WHYPk3o/view?usp=drive_link' target="_blank"> <button>cs-4002-computer-system-organization-may-2018</button> </Link>
                   <Link to='https://drive.google.com/file/d/1qRJykgcuk_QFtGnZmujVxjGNbq6OEuoU/view?usp=drive_link' target="_blank"> <button>cs-4002-computer-system-organization-nov-2019</button> </Link>
                   <Link to='https://drive.google.com/file/d/1gEIuQgQmjoMrNSsm_jTblChOwJgHO0mS/view?usp=drive_link' target="_blank"> <button>cs-ci-404-computer-organisation-and-architecture-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1lZw33xDROQtEdXX_fgfN2-4adhpXwgDD/view?usp=drive_link' target="_blank"> <button>cs-it-402-computer-system-organization-dec-2015</button> </Link>
                   <Link to='https://drive.google.com/file/d/1anab2iYO-oqTBlZPP2pS2lBlsLVoxIGZ/view?usp=drive_link' target="_blank"> <button>cs-it-402-computer-system-organization-dec-2016</button> </Link>
                   <Link to='https://drive.google.com/file/d/19aUSeQ8cLc7QtzCOaNuHthdF0Zn4lx0r/view?usp=drive_link' target="_blank"> <button>cs-it-402-computer-system-organization-jun-2015</button> </Link>
                   <Link to='https://drive.google.com/file/d/16umqK-El8rm77R1bkBLR-uwu15YHa5Im/view?usp=drive_link' target="_blank"> <button>cs-it-402-computer-system-organization-jun-2016</button> </Link>
                   <Link to='https://drive.google.com/file/d/1yoVaoadSh_XoyOUo-pVbEN_CBJZlpQNa/view?usp=drive_link' target="_blank"> <button>cs-it-402-computer-system-organization-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/18iz4txnuQEV-Mv7X-FOZSAJEk_0CvQjF/view?usp=drive_link' target="_blank"> <button>cs-it-402-computer-system-organization-nov-2019</button> </Link>
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && !coa && os && !ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! OPERATING SYSTEM PAPERS !!</h1>
        <div className="subject-list">
                    <Link to='https://drive.google.com/file/d/1DUQuwzC5Kfa6vmL2gUULIC4nZ-Rd6W99/view?usp=drive_link' target="_blank"> <button>ad-cd-cs-405-operating-systems-jun-2023</button> </Link>
                   <Link to='https://drive.google.com/file/d/1AhT5Sk67Acirc7AQ-ui0jFKUkP36TIUQ/view?usp=drive_link' target="_blank"> <button>cs-405-operating-system-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1R6oQNZYlJDpbzpWDa9tNDbu752Tby8BP/view?usp=drive_link' target="_blank"> <button>cs-405-operating-system-nov-2019</button> </Link>
                   <Link to='https://drive.google.com/file/d/1hzD5mzW8J9Jwb64PusV2pZmONUmdSQra/view?usp=drive_link' target="_blank"> <button>cs-405-operating-systems-may-2019</button> </Link>
           </div>
       </div>
       
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && !coa && !os && ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! MACHINE LEARNING  PAPERS !!</h1>
        <div className="subject-list">
                   <Link to='https://drive.google.com/file/d/1LimfhlMtJsaL4OQYnYbtYTKrCvh7mxUX/view?usp=drive_link' target="_blank"><button>cs-601-machine-learning-dec-2020</button></Link> 
                   <Link to='https://drive.google.com/file/d/1RnduRfea4HKJpLB8wUEW4FGOg-56jiOv/view?usp=drive_link' target="_blank"><button>cs-601-machine-learning-may-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/14bYB8Y2heVFDrZriOEQLZvfpyHIXRIKJ/view?usp=drive_link' target="_blank"><button>cs-601-machine-learning-may-2023</button></Link>
               </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && !coa && !os && !ml && cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! COMPUTER NETWORK PAPERS !!</h1>
        <div className="subject-list">
                    <Link to='https://drive.google.com/file/d/1wn3ILn24nGYmIV3v3IA5Piqgp16qaDff/view?usp=drive_link' target="_blank"><button>cd-cs-602-computer-networks-may-2023</button></Link> 
                   <Link to='https://drive.google.com/file/d/1xgpFQaMuqFxsCWeOm8OA5w_Gl02Iv7o_/view?usp=drive_link' target="_blank"><button>cs-602-computer-networks-dec-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1cirOfTIaYWbX1V64g4atxRbtIbaVq-mP/view?usp=drive_link' target="_blank"><button>cs-602-computer-networks-may-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/1ufXnhIwHH9IBEDTaqEdjEegfezsJaPdx/view?usp=drive_link' target="_blank"><button>cs-604-computer-networking-cn-jun-2016</button></Link> 
                   <Link to='https://drive.google.com/file/d/18kjLIcDNQRqkX2C6NXsNWymDajKQE1CE/view?usp=drive_link' target="_blank"><button>cs-604-computer-networking-dec-2016</button></Link> 
                   <Link to='https://drive.google.com/file/d/1U8NoVsJf0-vSoUrYbyL-2560IVPHWqvw/view?usp=drive_link' target="_blank"><button>cs-604-computer-networking-dec-2017</button></Link>
                   <Link to='https://drive.google.com/file/d/1L9WVz8NSZtVeyeWbgSbjNQUCeQknhj0m/view?usp=drive_link' target="_blank"><button>cs-604-computer-networking-jun-2017</button></Link>
                   <Link to='https://drive.google.com/file/d/1aVcYMv2oFeEiwdaLAW12NeBpbLRAWNB5/view?usp=drive_link' target="_blank"><button>cs-604-computer-networking-jun-2020</button></Link> 
                   <Link to='https://drive.google.com/file/d/17Hkq4By3CvxX6HVQDGnTpVUOMHFPFp1l/view?usp=drive_link' target="_blank"><button>cs-604-computer-networking-may-2018</button></Link> 
                   <Link to='https://drive.google.com/file/d/13VcoUElPJB4r7cgLHfbleqkkq17VIzpG/view?usp=drive_link' target="_blank"><button>cs-6004-computer-networking-dec-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1CXyh7NLj69xkHNcqKMwLbWZZShqs-FSr/view?usp=drive_link' target="_blank"><button>cs-6004-computer-networking-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1oIPQUYvV1vKiKWO447RugrDHIkSe_vS8/view?usp=drive_link' target="_blank"><button>cs-6004-computer-networking-may-2019</button></Link> 
                   <Link to='https://drive.google.com/file/d/1-bBvYWIJFUhQ7JOZBmT57puEAeCg5u71/view?usp=drive_link' target="_blank"><button>cs-6004-computer-networks-may-2018</button></Link> 
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && !coa && !os && !ml && !cn && cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! COMPILER DESIGN PAPERS !!</h1>
        <div className="subject-list">
                    <Link to='https://drive.google.com/file/d/1k_M-_Xvh57Twgbj4fZN1Qj2PYym1zHaO/view?usp=drive_link' target="_blank"><button>cs-603-c-compiler-design-may-2023</button></Link>
                   <Link to='https://drive.google.com/file/d/1QJJeY86TdM4qc8KfZ3VhAVfCoH1Ovtwh/view?usp=drive_link' target="_blank"><button>cs-603-c-compiler-design-may-2022</button></Link> 
                   <Link to='https://drive.google.com/file/d/1l5X17eaJo6BdqRVj5nNIqbmbymu4wivX/view?usp=drive_link' target="_blank"><button>cs-603-c-compiler-design-dec-2020</button></Link>                   
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && !coa && !os && !ml && !cn && !cd && pm? 'block':'none'}}>
        <h1 className="subject-header">!! PROJECT MANAGEMENT PAPERS !!</h1>
        <div className="subject-list">
                   <Link to='https://drive.google.com/file/d/1qOCbOecCDVYq7VMRj35EFtRIa_v6bnBS/view?usp=drive_link' target="_blank"><button>cs-604-b-project-management-may-2023</button></Link> 
                   <Link to='https://drive.google.com/file/d/1etfsppLdZpQ4SQLckdqZC5vJ5xE6dvwA/view?usp=drive_link' target="_blank"><button>cs-604-b-project-management-may-2022</button></Link> 
                   <Link to='https://drive.google.com/file/d/1YSAeivhA_serhLyjCEZh7e_EHzQCcVT_/view?usp=drive_link' target="_blank"><button>cs-604-b-project-management-dec-2020</button></Link>     
           </div>
       </div>
    </>
}
export default CsPapers