import { Link } from "react-router-dom"
import "../Styling/Papers.css"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContextProvider"

function Papers(){
    let {chemistry,math,english,beee,eGraphic}=useContext(AuthContext)
    return <>
     <div className="select-subject-container" style={{display:chemistry && !math && !english && !beee && !eGraphic? 'block':'none'}}>
        <h1 className="subject-header">!! CHEMISTRY PAPERS !!</h1>
        <div className="subject-list">
           <Link to='https://drive.google.com/file/d/1Z6v8LOCeg2aBCAAfICTZMkTiwy3o3iz9/view?usp=drive_link' target="_blank"> <button>bt-101-engineering-chemistry-jun-2023</button></Link>
           <Link to='https://drive.google.com/file/d/1cyl6IUr0DOgbnULUFHEqdOiRmGecMG1h/view?usp=drive_link' target="_blank"> <button>bt-101-engineering-chemistry-nov-2022</button></Link>
           <Link to='https://drive.google.com/file/d/1WoBe6xvQPRfGP-I0u8YND_EeO9k1-NkD/view?usp=drive_link' target="_blank"> <button>bt-101-engineering-chemistry-jun-2022</button></Link>
           <Link to='https://drive.google.com/file/d/139PdPCqIATj4DV1qXNdvC1BFjZszLF9c/view?usp=drive_link' target="_blank"> <button>be-101-engineering-chemistry-jun-2020</button></Link>
           <Link to='https://drive.google.com/file/d/12qIaJ5ElAtNIJru41t4OfflzMQw2CKuE/view?usp=drive_link' target="_blank"> <button>bt-101-engineering-chemistry-jun-2020</button></Link>
           <Link to='https://drive.google.com/file/d/1-1nwDJnoxtMi4701RCqS9FDgInySqut1/view?usp=drive_link' target="_blank"> <button>bt-1001-engineering-chemistry-jun-2020</button></Link>
           <Link to='https://drive.google.com/file/d/1s5EgkFQ_e7tP9j7w6-8Hof_t3ALUsMAr/view?usp=drive_link' target="_blank"> <button>bt-101-engineering-chemistry-dec-2020</button></Link>
           <Link to='https://drive.google.com/file/d/1nxSEX8IThsrO-SzEk4a4FY1c53mMzKaA/view?usp=drive_link' target="_blank"> <button>cy-110-chemistry-jun-2020</button></Link>
           <Link to='https://drive.google.com/file/d/1tecxdX8reCcer3_uRaedF3wjOc_2Q8IS/view?usp=drive_link' target="_blank"> <button>cy-112-chemistry-2-jun-2020</button></Link>
           <Link to='https://drive.google.com/file/d/1RHuDE3mGEC34e6bTBlE2j_g1T2_CLP_k/view?usp=drive_link' target="_blank"> <button>bt-101-engineering-chemistry-may-2019</button></Link>
           <Link to='https://drive.google.com/file/d/1FHysS6Fz-m7OwJYW-iTEgcYg8xB37noA/view?usp=drive_link' target="_blank"> <button>bt-1001-engineering-chemistry-may-2019</button></Link>
           <Link to='https://drive.google.com/file/d/17PEfPcb8GvPCo9VNvvnM_2A98Z4NjK32/view?usp=drive_link' target="_blank"> <button>bt-101-engineering-chemistry-nov-2019</button></Link>
           <Link to='https://drive.google.com/file/d/1xEMnluWkHjZFnlaWIbrrsUYZncR_mef6/view?usp=drive_link' target="_blank"> <button>bt-1001-engineering-chemistry-nov-2019</button></Link>
           <Link to='https://drive.google.com/file/d/1weXLomdO2lscHzM4NMJt5-ts-FpL66cx/view?usp=drive_link' target="_blank"> <button>bt-101-engineering-chemistry-nov-2018</button></Link>
           <Link to='https://drive.google.com/file/d/1vSBvK-H2owAKAdEH6YX6twZsUO33QfmL/view?usp=drive_link' target="_blank"> <button>bt-1001-engineering-chemistry-may-2018</button></Link>
           <Link to='https://drive.google.com/file/d/1WL2pa695jsgr4R_3dl9FPoEx9PLAEBVy/view?usp=drive_link' target="_blank"> <button>bt-1001-engineering-chemistry-nov-2018</button></Link>
           <Link to='https://drive.google.com/file/d/1-yF-TE2mvDvpJ1l2wDT5YU2jU70CY0Sa/view?usp=drive_link' target="_blank"> <button>bt-1001-engineering-chemistry-cbgs-dec-2017</button></Link>
           <Link to='https://drive.google.com/file/d/1IwhsfsjeRuDK007sp2JbZHbV4KQDuUeM/view?usp=drive_link' target="_blank"> <button>be-101-engineering-chemistry-dec-2016</button></Link>
           <Link to='https://drive.google.com/file/d/1R7nBS0sgmnuVtyyzIRRbkuqgIgH5XN4e/view?usp=drive_link' target="_blank"> <button>be-101-engineering-chemistry-jun-2016</button></Link>
           <Link to='https://drive.google.com/file/d/1qk1fb2EJXCLosikI_z_UHOOrAkEVpddI/view?usp=drive_link' target="_blank"> <button>cy-110-chemistry-dec-2016</button></Link>
           <Link to='https://drive.google.com/file/d/1SCeRDSFfNBC9Ux1CTjTcMxx4nZUwDYqe/view?usp=drive_link' target="_blank"> <button>cy-110-chemistry-jun-2016</button></Link>
        </div>
       </div>
       <div className="select-subject-container" style={{display:!chemistry && math && !english && !beee && !eGraphic? 'block':'none'}}>
        <h1 className="subject-header">!! MATHEMATICS-1 PAPERS !!</h1>
        <div className="subject-list">
                <Link to='https://drive.google.com/file/d/199lDhHUvZQ5tUA0Iiq4qzEQieHgMQXf6/view?usp=drive_link' target="_blank"> <button>bt-102-mathematics-1-jun-2023</button></Link>
                <Link to='https://drive.google.com/file/d/19NPDq_y24FVq7ScUKBTRMbhYKe3mJBX2/view?usp=drive_link' target="_blank"> <button>bt-1002-mathematics-1-jun-2022</button></Link>
                <Link to='https://drive.google.com/file/d/1hyCgvmmVkpKQ-btoeJk1mT2AifZrG9Xj/view?usp=drive_link' target="_blank"> <button>bt-102-mathematics-1-nov-2022</button></Link>
                <Link to='https://drive.google.com/file/d/1ZDphf5_qJ1jIgewVWNvUfyUuNTFGufkR/view?usp=drive_link' target="_blank"> <button>be-102-engineering-mathematics-1-jun-2020</button></Link>
                <Link to='https://drive.google.com/file/d/12cnFmwkicgHV7qlQ0onA8aSK85Q3xEsT/view?usp=drive_link' target="_blank"> <button>bept-101-engineering-mathematics-1-jun-2020</button></Link>
                <Link to='https://drive.google.com/file/d/1n6CTtH1G6goRk97M_0dcnTyD70psppqQ/view?usp=drive_link' target="_blank"> <button>bt-102-mathematics-1-dec-2020</button></Link>
                <Link to='https://drive.google.com/file/d/13E4dTwnKgZYFgmpRJ1Wd5VnjbbvC-Rgq/view?usp=drive_link' target="_blank"> <button>bt-102-mathematics-1-jun-2020</button></Link>
                <Link to='https://drive.google.com/file/d/1G-JIjj5aNDeIfcLyT2vxGPjUyaZrvx9x/view?usp=drive_link' target="_blank"> <button>bt-1002-mathematics-1-jun-2020</button></Link>
                <Link to='https://drive.google.com/file/d/1zORch7Ujh5_bRsyXF9HorkEcwVRmUFvA/view?usp=drive_link' target="_blank"> <button>ma-110-mathematics-1-jun-2020</button></Link>
                <Link to='https://drive.google.com/file/d/1iQTCN_UUWsEEurKfDZPJFYMt3OX-0SRN/view?usp=drive_link' target="_blank"> <button>bt-102-mathematics-1-may-2019</button></Link>
                <Link to='https://drive.google.com/file/d/1o-zyR0L8U7L8gU3bRjJaPr4j7j_ekSX6/view?usp=drive_link' target="_blank"> <button>bt-102-mathematics-1-nov-2019</button></Link>
                <Link to='https://drive.google.com/file/d/1CZhBKgY0OPxPVHRl32awb--3SjUNNqaE/view?usp=drive_link' target="_blank"> <button>bt-1002-mathematics-1-may-2019</button></Link>
                <Link to='https://drive.google.com/file/d/15o89TxCm2wcm_zcDZ8RzoqRMi3C-G0OF/view?usp=drive_link' target="_blank"> <button>bt-1002-mathematics-1-nov-2019</button></Link>
                <Link to='https://drive.google.com/file/d/1auGrT3XoDK9DlKb8_IU5gBIANNFNqrnB/view?usp=drive_link' target="_blank"> <button>bt-102-mathematics-1-nov-2018</button></Link>
                <Link to='https://drive.google.com/file/d/1Qul890JHRJI2OB8sMDh_GmJrvPnX5d-7/view?usp=drive_link' target="_blank"> <button>bt-1002-mathematics-1-may-2018</button></Link>
                <Link to='https://drive.google.com/file/d/1P2DT35DW8RxjajoQjwoTWa6qDgHiXzcY/view?usp=drive_link' target="_blank"> <button>bt-1002-mathematics-1-nov-2018</button></Link>
                <Link to='https://drive.google.com/file/d/1XI2rylzGbtOs-hOu80mBXgcQnFL0noeJ/view?usp=drive_link' target="_blank"> <button>ma-110-mathematics-1-jun-2017</button></Link>
                <Link to='https://drive.google.com/file/d/1UBGquvRpfK-GlJfKF-8v8LgxdpabyU2X/view?usp=drive_link' target="_blank"> <button>bt-1002-mathematics-1-cbgs-dec-2017</button></Link>
                <Link to='https://drive.google.com/file/d/1oIq8YEgukr4tHXX-eLZ90G_x_dBqAJXB/view?usp=drive_link' target="_blank"> <button>be-102-engineering-mathematics-1-jun-2016</button></Link>
                <Link to='https://drive.google.com/file/d/1SUSN5c0lQYx0c4YdUD4n1JO_dKLqUcEU/view?usp=drive_link' target="_blank"> <button>ma-110-mathematics-1-dec-2016</button></Link>
                <Link to='https://drive.google.com/file/d/1Up4IYiL1Lo5MdC7ZEp1xYzbFaUEpQ3Cy/view?usp=drive_link' target="_blank"> <button>ma-110-mathematics-1-dec-2015</button></Link>
         </div>
       </div>
       <div className="select-subject-container" style={{display:!chemistry && !math && english && !beee && !eGraphic? 'block':'none'}}>
        <h1 className="subject-header">!! ENGLISH-FOR-COMMUNICATION PAPERS !!</h1>
        <div className="subject-list">
                     <Link to='https://drive.google.com/file/d/1sda7owfe7LUD-Z-CoEiKiHEvh9gsEAr6/view?usp=drive_link' target="_blank"> <button>be-103-communication-skills-dec-2015</button> </Link>
                     <Link to='https://drive.google.com/file/d/17nKJkUAMlTTfdjccldq-aaxNG7HBvUZ4/view?usp=drive_link' target="_blank"> <button>be-103-communication-skills-jun-2016</button> </Link>
                     <Link to='https://drive.google.com/file/d/1VE1jWGL-ncYIg_0GQJKdsKcfa_L7IUqD/view?usp=drive_link' target="_blank"> <button>bt-103-english-for-communication-dec-2020</button> </Link>
                     <Link to='https://drive.google.com/file/d/1lQ57tF5H8hPJKLxu4iRivqTTb3WZKYue/view?usp=drive_link' target="_blank"> <button>bt-103-english-for-communication-jun-2020</button> </Link>
                     <Link to='https://drive.google.com/file/d/1jFO_AYbmfv6DxX2KCWrvVAvAfxQaHJrD/view?usp=drive_link' target="_blank"> <button>bt-103-english-for-communication-jun-2022</button> </Link>
                     <Link to='https://drive.google.com/file/d/1E-4odAwiCefSD2ysvG_LXGr6mJP5-i-R/view?usp=drive_link' target="_blank"> <button>bt-103-english-for-communication-jun-2023</button> </Link>
                     <Link to='https://drive.google.com/file/d/1TEG1SglKS3UIojvT1FiozKCtc-d0jyP9/view?usp=drive_link' target="_blank"> <button>bt-103-english-for-communication-may-2019</button> </Link>
                     <Link to='https://drive.google.com/file/d/1Tvni0hnnkVeORM0rXFjtB4WD5DzqM1kZ/view?usp=drive_link' target="_blank"> <button>bt-103-english-for-communication-nov-2018</button> </Link>
                     <Link to='https://drive.google.com/file/d/1EOQ94d6M93GN1iFSpYQMydLkkHaObGQ0/view?usp=drive_link' target="_blank"> <button>bt-103-english-for-communication-nov-2019</button> </Link>
                     <Link to='https://drive.google.com/file/d/1ymca4J24noIAC0N_ckACqtLRWM2Rolm3/view?usp=drive_link' target="_blank"> <button>bt-103-english-for-communication-nov-2022</button> </Link>
                     <Link to='https://drive.google.com/file/d/1YbPpF6r2DyJa6CpHR3X58WlKJ8dNdb4L/view?usp=drive_link' target="_blank"> <button>bt-1003-english-cbgs-dec-2017</button> </Link>
                     <Link to='https://drive.google.com/file/d/1YrqgdKGwJe8TYBwXuGmc9cWD7btwQLV8/view?usp=drive_link' target="_blank"> <button>bt-1003-english-may-2018</button> </Link>
                     <Link to='https://drive.google.com/file/d/1roXosDJ7lo9IPOuMgdy-O6AjHP1VqjHO/view?usp=drive_link' target="_blank"> <button>bt-1003-english-nov-2019</button> </Link>
                     <Link to='https://drive.google.com/file/d/1W1rEnXP1CqBHAf3zsFz7hvcokumRcN8y/view?usp=drive_link' target="_blank"> <button>hu-110-english-jun-2020</button> </Link>
            </div>
       </div>
       <div className="select-subject-container" style={{display:!chemistry && !math && !english && beee && !eGraphic? 'block':'none'}}>
        <h1 className="subject-header">!! BASIC ELECTRICAL AND ELECTRONICS ENGINEERING  PAPERS !!</h1>
        <div className="subject-list">
                    
           </div>
       </div>
       <div className="select-subject-container" style={{display:!chemistry && !math && !english && !beee && eGraphic? 'block':'none'}}>
        <h1 className="subject-header">!! ENGINEERING GRAPHICS/DRAWING  PAPERS !!</h1>
        <div className="subject-list">
                    
           </div>
       </div>
    </>

}
export default Papers