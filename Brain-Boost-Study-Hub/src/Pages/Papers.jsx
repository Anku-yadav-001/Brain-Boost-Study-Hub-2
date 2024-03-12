import { Link } from "react-router-dom"
import "../Styling/Papers.css"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContextProvider"

function Papers(){
    let {chemistry,math,english,beee,eGraphic,physics,math2,mechanical,civil,basic}=useContext(AuthContext)
    return <>
     <div className="select-subject-container" style={{display:chemistry && !math && !english && !beee && !eGraphic && !physics && !math2 && !mechanical && !civil && !basic? 'block':'none'}}>
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
       <div className="select-subject-container" style={{display:!chemistry && math && !english && !beee && !eGraphic && !physics && !math2 && !mechanical && !civil && !basic? 'block':'none'}}>
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
       <div className="select-subject-container" style={{display:!chemistry && !math && english && !beee && !eGraphic && !physics && !math2 && !mechanical && !civil && !basic? 'block':'none'}}>
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
       <div className="select-subject-container" style={{display:!chemistry && !math && !english && beee && !eGraphic && !physics && !math2 && !mechanical && !civil && !basic? 'block':'none'}}>
        <h1 className="subject-header">!! BASIC ELECTRICAL AND ELECTRONICS ENGINEERING  PAPERS !!</h1>
        <div className="subject-list">
                   <Link to='https://drive.google.com/file/d/1-03IYvG7M7P60TW3pknVx0zxMp8nU73i/view?usp=drive_link' target="_blank"> <button>ee-111-fundamentals-of-electrical-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1h6rB0QMwUX1_ZQmXt37JHbA2SqWrpsBZ/view?usp=drive_link' target="_blank"> <button>ee-111-fundamentals-of-electrical-engineering-jun-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1FXuBBxuvtqcLDzRhs2X0C12RuRxHKxOo/view?usp=drive_link' target="_blank"> <button>ec-111-fundamentals-of-electronics-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1GEDs7a73O9gN0lO-JS5GOraT48Jiypbt/view?usp=drive_link' target="_blank"> <button>bt-1004-basic-electrical-and-electronics-engineering-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1Q7ddd5XMMcVXz4gguatdvYgrme5IUJlV/view?usp=drive_link' target="_blank"> <button>bt-1004-basic-electrical-and-electronics-engineering-may-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1sNh00LNjt_CvnaPzL3BLXUs3gCz4FAJS/view?usp=drive_link' target="_blank"> <button>bt-1004-basic-electrical-and-electronics-engineering-may-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1A7YDR1_i6W0MXb3Z-7eCthghZxnlQKMM/view?usp=drive_link' target="_blank"> <button>bt-1004-basic-electrical-and-electronics-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1tc6RaPdBiDCNjbtKtAepyc_7oOsMwzDd/view?usp=drive_link' target="_blank"> <button>bt-1004-basic-electrical-and-electronics-engineering-cbgs-dec-2017</button></Link>
                   <Link to='https://drive.google.com/file/d/1S5Qt_yqyRzrOP3d4DLjMlwmmBiSl9MX-/view?usp=drive_link' target="_blank"> <button>bt-104-basic-electrical-and-electronics-engineering-nov-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/1suUXXDsLpf-d2eal2miNo9jLOoTUcfjX/view?usp=drive_link' target="_blank"> <button>bt-104-basic-electrical-and-electronics-engineering-nov-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1E4GfFR_YUmWoJnGbKrwCovszaNxsUEAS/view?usp=drive_link' target="_blank"> <button>bt-104-basic-electrical-and-electronics-engineering-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/18TOsWLHcNTcuuZPzOS4dT3rPjG0CMSiK/view?usp=drive_link' target="_blank"> <button>bt-104-basic-electrical-and-electronics-engineering-may-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1x_wL4DfZLdmqKfhDh87uRxT0-teq2iLN/view?usp=drive_link' target="_blank"> <button>bt-104-basic-electrical-and-electronics-engineering-jun-2023</button></Link>
                   <Link to='https://drive.google.com/file/d/1SXfHBd7U7Q6YiAJyX1UAw0i0R-b5ylO3/view?usp=drive_link' target="_blank"> <button>bt-104-basic-electrical-and-electronics-engineering-jun-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/1xKk2ojrICUN3WNQeddJ_L-JHm5RlKJXg/view?usp=drive_link' target="_blank"> <button>bt-104-basic-electrical-and-electronics-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1rbxkIzVBENY6VsiWHF2hOOuCu2WgGRFq/view?usp=drive_link' target="_blank"> <button>be-104-basic-electrical-and-electronics-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1KBJuR6eMyVOUlfVksq2XENf4WVsZ8pbR/view?usp=drive_link' target="_blank"> <button>be-104-basic-electrical-and-electronics-engineering-jun-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1G-JYlfNquLkjfuZBrZk_GyZyFOHWQTBb/view?usp=drive_link' target="_blank"> <button>be-104-basic-electrical-and-electronics-engineering-jun-2015</button></Link>
                   <Link to='https://drive.google.com/file/d/1U0HvCvDNxRGu6ZxkG6vbcgjXTIF-k6uj/view?usp=drive_link' target="_blank"> <button>be-104-basic-electrical-and-electronics-engineering-dec-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1lGB4IYUTRhNYYhR7b2sYzP0X_IFKWkWr/view?usp=drive_link' target="_blank"> <button>be-104-basic-electrical-and-electronics-engineering-dec-2015</button></Link>
           </div>
       </div>
       <div className="select-subject-container" style={{display:!chemistry && !math && !english && !beee && eGraphic && !physics && !math2 && !mechanical && !civil && !basic? 'block':'none'}}>
        <h1 className="subject-header">!! ENGINEERING GRAPHICS/DRAWING  PAPERS !!</h1>
        <div className="subject-list">
                   <Link to='https://drive.google.com/file/d/1PAlZWlTlLl0_5sPbiCYMP6g_E31pGXRI/view?usp=drive_link' target="_blank"> <button>me-111-engineering-graphics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1BVBsAAsU7KgPmY_7fVHchRnTILCIWCnl/view?usp=drive_link' target="_blank"> <button>me-111-engineering-graphics-jun-2017</button></Link>
                   <Link to='https://drive.google.com/file/d/1krhsQY7kmLK9Amd3-KRfI-Q1szlNfW6y/view?usp=drive_link' target="_blank"> <button>me-111-engineering-graphics-jun-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1SfdmN8csgX4tpVxrPXc3cgtyLPPgK7Ys/view?usp=drive_link' target="_blank"> <button>me-111-engineering-graphics-dec-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1tqeSsRHY41iRoPA2_h7ToIoctJUfFeAo/view?usp=drive_link' target="_blank"> <button>me-111-engineering-graphics-dec-2015</button></Link>
                   <Link to='https://drive.google.com/file/d/1I3MdD1BzzTW_KPLHuiTjXcOzd41daPJk/view?usp=drive_link' target="_blank"> <button>bt-1005-engineering-graphics-nov-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1Eb6vklQGk3Qt95PXNJYeQhTvM4o0E9Ib/view?usp=drive_link' target="_blank"> <button>bt-1005-engineering-graphics-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1QbPgMRkqz3k5DrZdkPz2aT0t6pLNmCuw/view?usp=drive_link' target="_blank"> <button>bt-1005-engineering-graphics-may-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1BAinU2q6v4QWUH4sTD4pLtaXfmbzIX06/view?usp=drive_link' target="_blank"> <button>bt-1005-engineering-graphics-may-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1uYtkg7iKZLtACYjWKbLU5e1MghC8Lpi9/view?usp=drive_link' target="_blank"> <button>bt-1005-engineering-graphics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1y8mjigxS3jPx3fZAAymPXjkNL6n8llv-/view?usp=drive_link' target="_blank"> <button>bt-1005-engineering-graphics-cbgs-dec-2017</button></Link>
                   <Link to='https://drive.google.com/file/d/1BrK7rLW1CJQbD4Vg2m89X387c0fBALmx/view?usp=drive_link' target="_blank"> <button>bt-105-engineering-graphics-nov-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/1mb8yBrpFAxXC-Sn1H3oqfKYZShcZTKBX/view?usp=drive_link' target="_blank"> <button>bt-105-engineering-graphics-nov-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1vNiJ5G_T3nN-AXUpleeqp4wOnzpoEqOc/view?usp=drive_link' target="_blank"> <button>bt-105-engineering-graphics-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1c31dpYfpj53E9rx-xKQ3Set402Ch9PLo/view?usp=drive_link' target="_blank"> <button>bt-105-engineering-graphics-may-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1KGi-8moHJoCiozKBMvqx-2Upt8s4eCji/view?usp=drive_link' target="_blank"> <button>bt-105-engineering-graphics-jun-2023</button></Link>
                   <Link to='https://drive.google.com/file/d/1GY1wHi0AaVppIgtBdFbNVUMgybADqLhU/view?usp=drive_link' target="_blank"> <button>bt-105-engineering-graphics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/18JRvvwKf-jpeNy137prHcTT3Kiigl85M/view?usp=drive_link' target="_blank"> <button>be-105-engineering-graphics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1bN8nrt3dmu2vTUoPEgY2q2KUIRE1Uzsc/view?usp=drive_link' target="_blank"> <button>be-105-engineering-graphics-jun-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1rbaw34eNsb0cBpanV_VTi8hfHnGbzunr/view?usp=drive_link' target="_blank"> <button>be-105-engineering-graphics-jun-2015</button></Link>
                   <Link to='https://drive.google.com/file/d/1qCNJwulloDHyFBwLZprwKZd8hhxHDf3B/view?usp=drive_link' target="_blank"> <button>be-105-engineering-graphics-dec-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1xLNL1wklJuUbvnSY385KPrxxLbvC74dc/view?usp=drive_link' target="_blank"> <button>be-105-engineering-graphics-dec-2015</button></Link>
           </div>
       </div>

       <div className="select-subject-container" style={{display:!chemistry && !math && !english && !beee && !eGraphic && physics && !math2 && !mechanical && !civil && !basic? 'block':'none'}}>
        <h1 className="subject-header">!! ENGINEERING PHYSICS  PAPERS !!</h1>
        <div className="subject-list">
                   <Link to='https://drive.google.com/file/d/1xg9HP6nuYchUruHbDGpsgX8qGj69F5An/view?usp=drive_link' target="_blank"> <button>ph-110-physics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1P2jk7YMAE3TsFiMo1kLyJL7OtGW9hzMT/view?usp=drive_link' target="_blank"> <button>ph-110-physics-jun-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1YYGT2Mis-o2ZKZ7oFxqGgphzRadMEP7f/view?usp=drive_link' target="_blank"> <button>ph-110-physics-dec-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1NhpJa7zR-V3sk7Tq9eMk3lw4VQ8YOFho/view?usp=drive_link' target="_blank"> <button>ph-110-physics-dec-2015</button></Link>
                   <Link to='https://drive.google.com/file/d/1FhixXwoTCR5fJDIzWgJlHAEta3ouKUpq/view?usp=drive_link' target="_blank"> <button>bt-2001-engineering-physics-nov-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1yzMGio6PCaa3UEuqHHacbhGrGAxJoSFy/view?usp=drive_link' target="_blank"> <button>bt-2001-engineering-physics-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1ztqYHBuGUZWL9mQ0CoMBt2IB5t_A3go3/view?usp=drive_link' target="_blank"> <button>bt-2001-engineering-physics-may-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1PZp84gCsAu0bG8Yye4Tv9olHzO496AdX/view?usp=drive_link' target="_blank"> <button>bt-2001-engineering-physics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1K3qMH_wma2ODKEcZJk5NiTgBcdQ3qA-z/view?usp=drive_link' target="_blank"> <button>bt-2001-engineering-physics-cbgs-dec-2017</button></Link>
                   <Link to='https://drive.google.com/file/d/1JbpFapH51LCYlxSHqThPVcn8dJle_l7V/view?usp=drive_link' target="_blank"> <button>bt-201-engineering-physics-nov-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/18_H6_ac7sjFNg-XgEbKDhGnPQwE-6HYW/view?usp=drive_link' target="_blank"> <button>bt-201-engineering-physics-nov-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1pOjTVszqonyzumnJS_fTH9hgT-X1x1WU/view?usp=drive_link' target="_blank"> <button>bt-201-engineering-physics-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1u9hGbm5PAbI4WQSqwI0McAAbLUWiCgZP/view?usp=drive_link' target="_blank"> <button>bt-201-engineering-physics-may-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1v26gdpYSkFhemztizC5KFZEMm7HfLeEY/view?usp=drive_link' target="_blank"> <button>bt-201-engineering-physics-jun-2023</button></Link>
                   <Link to='https://drive.google.com/file/d/1osFiKxh4q5qMI_x4kN-9MTR4rF255lH_/view?usp=drive_link' target="_blank"> <button>bt-201-engineering-physics-jun-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/1Gg023NiBqmazs01qPnHukRdare6NuL7w/view?usp=drive_link' target="_blank"> <button>bt-201-engineering-physics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/15X4Zok_eMgJ-H5vY5HSaU5LRJ5G3dOC7/view?usp=drive_link' target="_blank"> <button>bt-201-engineering-physics-dec-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1XajgvNrxDPLSR6b916DdcukP_Yh1nmHT/view?usp=drive_link' target="_blank"> <button>be-201-engineering-physics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1AI2sLx5qpvV4ONMirQ2kU5StVBjb8cPX/view?usp=drive_link' target="_blank"> <button>be-201-engineering-physics-jun-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1P5z1dObDM9sVMkqYnqPNQuA_WxXJUrAh/view?usp=drive_link' target="_blank"> <button>be-201-engineering-physics-jun-2015</button></Link>
                   <Link to='https://drive.google.com/file/d/1VztHIB93MJIDiWCa2CpJ8nXVZE2kzd2t/view?usp=drive_link' target="_blank"> <button>be-201-engineering-physics-dec-2015</button></Link>
           </div>
       </div>
       <div className="select-subject-container" style={{display:!chemistry && !math && !english && !beee && !eGraphic && !physics && math2 && !mechanical && !civil && !basic? 'block':'none'}}>
        <h1 className="subject-header">!! ENGINEERING MATHEMATICS-2  PAPERS !!</h1>
        <div className="subject-list">
                   <Link to='https://drive.google.com/file/d/1DLXw2vuWwGxlKigh3cUfCyMPNm3FkyKu/view?usp=drive_link' target="_blank"> <button>ma-111-mathematics-2-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1hcp557JlzZfK0YydWYYJHIeoh07AUGIX/view?usp=drive_link' target="_blank"> <button>ma-111-mathematics-2-jun-2017</button> </Link>
                   <Link to='https://drive.google.com/file/d/1ArQiAE5oO4LxAsI0gg6ONw8yucxZ-hv0/view?usp=drive_link' target="_blank"> <button>ma-111-mathematics-2-jun-2016</button> </Link>
                   <Link to='https://drive.google.com/file/d/1QdRPW9OOzbK8cZICpSKTtjO27BsEezMV/view?usp=drive_link' target="_blank"> <button>bt-2002-mathematics-2-nov-2018</button> </Link>
                   <Link to='https://drive.google.com/file/d/1yv6ni9B5VYcqFS330O50dFfSg2A5bkMr/view?usp=drive_link' target="_blank"> <button>bt-2002-mathematics-2-may-2019</button> </Link>
                   <Link to='https://drive.google.com/file/d/1IHJCOoipHPOjoGN7nRZTW8lgtn2GMe-G/view?usp=drive_link' target="_blank"> <button>bt-2002-mathematics-2-may-2018</button> </Link>
                   <Link to='https://drive.google.com/file/d/1zKdi95v50DqFqoKr98Fj_Gcbty0snYjJ/view?usp=drive_link' target="_blank"> <button>bt-2002-mathematics-2-jun-2020</button> </Link>
                   <Link to='https://drive.google.com/file/d/1ZtFjn0VqFL9ZRCmxJH2rj3v1PREh2HD1/view?usp=drive_link' target="_blank"> <button>bt-202-mathematics-2-nov-2022</button> </Link>
                   <Link to='https://drive.google.com/file/d/1luAH6XOHO5zNVTV8SHWrKiO8XB82Y6Iz/view?usp=drive_link' target="_blank"> <button>bt-202-mathematics-2-nov-2019</button> </Link>
                   <Link to='https://drive.google.com/file/d/1TDhhHiRcpinWrwKrvVFiIiHi4_-KGKls/view?usp=drive_link' target="_blank"> <button>bt-202-mathematics-2-may-2019</button> </Link>
                   <Link to='https://drive.google.com/file/d/1nUh3-DRNPk7SNXpdsPd-ZSXnI4Dp1wWF/view?usp=drive_link' target="_blank"> <button>bt-202-mathematics-2-jun-2023</button> </Link>
                   <Link to='https://drive.google.com/file/d/1eHfWMMQ4ktQvE6ASOi5tffLz9-S9mVzm/view?usp=drive_link' target="_blank"> <button>bt-202-mathematics-2-jun-2022</button> </Link>
                   <Link to='https://drive.google.com/file/d/1-LT9rWamm594nZ6CO6Hgnd9uUpvjzXTd/view?usp=drive_link' target="_blank"> <button>bt-202-mathematics-2-jun-2020</button> </Link>
           </div>
       </div>
       <div className="select-subject-container" style={{display:!chemistry && !math && !english && !beee && !eGraphic && !physics && !math2 && mechanical && !civil && !basic? 'block':'none'}}>
        <h1 className="subject-header">!! BASIC MECHANICAL ENGINEERING  PAPERS !!</h1>
        <div className="subject-list">
                   <Link to='https://drive.google.com/file/d/1d37uTrPVlSCs5u57xOeS5q4nEGJH35Yn/view?usp=drive_link' target="_blank"> <button>me-114-fundamentals-of-mechanical-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1IcrXR4_k7qwQnORWR7d9-A95BKWKyiqe/view?usp=drive_link' target="_blank"> <button>me-114-fundamentals-of-mechanical-engineering-jun-2017</button></Link>
                   <Link to='https://drive.google.com/file/d/1GXyxpTmGu7M5_qI89b5AQS2390Iwo9hn/view?usp=drive_link' target="_blank"> <button>me-114-fundamental-of-mechanical-engineering-jun-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1sAsOg9R4oqKa-HHl5nNZj6n9pSs-F9W7/view?usp=drive_link' target="_blank"> <button>me-114-fundamental-of-mechanical-engineering-dec-2015</button></Link>
                   <Link to='https://drive.google.com/file/d/1f1s3YJ1RIBWutBZMHM2-X5RjWmX_Aimh/view?usp=drive_link' target="_blank"> <button>ce-110-engineering-mechanics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1v6buvqF046bSG_UO1xD4h4ZwXzDwTaic/view?usp=drive_link' target="_blank"> <button>bt-2003-basic-mechanical-engineering-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1irUZR9jx2KKDh0tyWM9AW2bpqq2pqFdc/view?usp=drive_link' target="_blank"> <button>bt-2003-basic-mechanical-engineering-may-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1m3WyEe7Rp6tmt4WlRhOYPpLekqvx0-e5/view?usp=drive_link' target="_blank"> <button>bt-2003-basic-mechanical-engineering-may-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/19bdfd_IPHQTR70enlxbEHQO_Vw-F1RJq/view?usp=drive_link' target="_blank"> <button>bt-2003-basic-mechanical-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1z8-4PdtBKvgBb8t0U-ixeirN_XmPeB7U/view?usp=drive_link' target="_blank"> <button>bt-2003-basic-mechanical-engineering-cbgs-dec-2017</button></Link>
                   <Link to='https://drive.google.com/file/d/19ZaDKwLxQv-tNQFTkmdA6Q2Gflod_7Pv/view?usp=drive_link' target="_blank"> <button>bt-203-basic-mechanical-engineering-nov-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/1UTxpUEKmgudFMtsfSGUsGcMQvBl-jnBZ/view?usp=drive_link' target="_blank"> <button>bt-203-basic-mechanical-engineering-nov-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1hKJHaDwuJST0lvjRnUJ-NiTjGiQ2tOnr/view?usp=drive_link' target="_blank"> <button>bt-203-basic-mechanical-engineering-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1PHU3XvPiQGo1ALV27jxL9U2DLxD2pyhv/view?usp=drive_link' target="_blank"> <button>bt-203-basic-mechanical-engineering-may-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/11-O3SNdPveX7rqfIEGyORzCWnFmn0sQm/view?usp=drive_link' target="_blank"> <button>bt-203-basic-mechanical-engineering-jun-2023</button></Link>
                   <Link to='https://drive.google.com/file/d/1XS0PzbtzjyZVWHL4Y5OcZbaTQ6k6xTrd/view?usp=drive_link' target="_blank"> <button>bt-203-basic-mechanical-engineering-jun-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/1z0szu6Q-d4h5P7nq8xmASvoAVhusRyvQ/view?usp=drive_link' target="_blank"> <button>bt-203-basic-mechanical-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1cEArwXQdmPbI0y6s21NqjAd-ZHQrwWdR/view?usp=drive_link' target="_blank"> <button>bt-203-basic-mechanical-engineering-dec-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1HAhjoUvXoFy514qfoB3zRkImlA9z5LT6/view?usp=drive_link' target="_blank"> <button>be-203-basic-mechanical-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1yIgvJf_S4bO5vLgj4wQ5W1OdDd6x9VOM/view?usp=drive_link' target="_blank"> <button>be-203-basic-mechanical-engineering-jun-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1SauN64FOBvb5QRZFqI9RxJqvre67d1by/view?usp=drive_link' target="_blank"> <button>be-203-basic-mechanical-engineering-jun-2015</button></Link>
                   <Link to='https://drive.google.com/file/d/1YaKEoTwvSmc6gMo4vy-ex6kYTgrsEGBv/view?usp=drive_link' target="_blank"> <button>be-203-basic-mechanical-engineering-dec-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1ktJx3B320Z2idlJ803YK88jGCBf8j-nb/view?usp=drive_link' target="_blank"> <button>be-203-basic-mechanical-engineering-dec-2015</button></Link>
           </div>
       </div>
       <div className="select-subject-container" style={{display:!chemistry && !math && !english && !beee && !eGraphic && !physics && !math2 && !mechanical && civil && !basic? 'block':'none'}}>
        <h1 className="subject-header">!! BASIC CIVIL ENGINEERING  PAPERS !!</h1>
        <div className="subject-list">
                   <Link to='https://drive.google.com/file/d/1sYIg_6jGrym4LaEFKG94RNup06_PY9qA/view?usp=drive_link' target="_blank"><button>ce-113-fundamentals-of-civil-engineering-jun-2020</button></Link>     
                   <Link to='https://drive.google.com/file/d/1Yv8nHDNgX6UAfG9NqPF4nOlrIxpo1FZY/view?usp=drive_link' target="_blank"> <button>bt-2004-basic-civil-engineering-and-engineering-mechanics-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1AxY8RIWh-isTFdgSoyGFelFJgdphEWnS/view?usp=drive_link' target="_blank"> <button>bt-2004-basic-civil-engineering-and-engineering-mechanics-cbgs-dec-2017</button></Link>
                   <Link to='https://drive.google.com/file/d/1avGLJ3rwqHtyfWW5965wM7pH3xvYo2dA/view?usp=drive_link' target="_blank"> <button>bt-2004-basic-civil-engg-and-engg-mechanics-nov-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1mEBhqYm9JlTrMC18NdzYfhiESiacGabz/view?usp=drive_link' target="_blank"> <button>bt-2004-basic-civil-engg-and-engg-mechanics-may-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1mfObzA33sSOu1UhG0szUT-XIx-HAAyF9/view?usp=drive_link' target="_blank"> <button>bt-2004-basic-civil-engg-and-engg-mechanics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1c0zCTa-M9dGe__q1kUftcmBWhesc8xOO/view?usp=drive_link' target="_blank"> <button>bt-204-basic-civil-engineering-and-mechanics-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1jL-OqDjQAdpmucy4vZ6WXuGgkuB1_W13/view?usp=drive_link' target="_blank"> <button>bt-204-basic-civil-engineering-and-engineering-mechanics-nov-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/18kKxw3aT7QLEo6WYI09XJ2OFE4keW2lp/view?usp=drive_link' target="_blank"> <button>bt-204-basic-civil-engineering-and-engineering-mechanics-nov-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1bgwBv3IksDmgrEd8yzFxBp2eCnGRxkg1/view?usp=drive_link' target="_blank"> <button>bt-204-basic-civil-engineering-and-engineering-mechanics-may-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1Lfj1PNlDQfEMm44i-GnWaLO7iAtSs1lU/view?usp=drive_link' target="_blank"> <button>bt-204-basic-civil-engineering-and-engineering-mechanics-jun-2023</button></Link>
                   <Link to='https://drive.google.com/file/d/1CLki8zcBLq2gsLdL8LJkRK1nPtFleSkA/view?usp=drive_link' target="_blank"> <button>bt-204-basic-civil-engineering-and-engineering-mechanics-jun-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/1WQFFX8ok2CXpoh3WFL_rVnnMSVYO-BAX/view?usp=drive_link' target="_blank"> <button>bt-204-basic-civil-engineering-and-engineering-mechanics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1EgDnneafjJBW-F-LTSwVFRk2Mq1rrLm6/view?usp=drive_link' target="_blank"> <button>be-204-basic-civil-engineering-and-engineering-mechanics-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1oSSSpBtQ5DdhoFUZbSu0swMY5jjXWI2r/view?usp=drive_link' target="_blank"> <button>be-204-basic-civil-engineering-and-engineering-mechanics-jun-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1b4vz6zsGFXAL9RRGhtX1pmaGlpYsi2tX/view?usp=drive_link' target="_blank"> <button>be-204-basic-civil-engineering-and-engineering-mechanics-jun-2015</button></Link>
                   <Link to='https://drive.google.com/file/d/1kAeSn1Gakt_MsAYqNRGD9ddJtt_F5qw9/view?usp=drive_link' target="_blank"> <button>be-204-basic-civil-engineering-and-engineering-mechanics-dec-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1lZ63kj29d7cnNuBxejCVVKPcoF-xrrkL/view?usp=drive_link' target="_blank"><button>be-204-basic-civil-engineering-and-engineering-mechanics-dec-2015</button></Link>
           </div>
       </div>
       <div className="select-subject-container" style={{display:!chemistry && !math && !english && !beee && !eGraphic && !physics && !math2 && !mechanical && !civil &&  basic? 'block':'none'}}>
        <h1 className="subject-header">!! BASIC COMPUTER ENGINEERING  PAPERS !!</h1>
        <div className="subject-list">
                   <Link to='https://drive.google.com/file/d/1hjRj3CLOW5C6VXB9Bu4GQZq_B9qIyOer/view?usp=drive_link' target="_blank"><button>cs-112-fundamentals-of-computer-science-and-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1V23pQt7OAUx1aD2FqLSte_iByL-HX9Rq/view?usp=drive_link' target="_blank"><button>cs-112-fundamentals-of-computer-science-and-engineering-jun-2017</button></Link>
                   <Link to='https://drive.google.com/file/d/1bTq6byL4LkNA4IAr92ElrrQaR8p_Ihyp/view?usp=drive_link' target="_blank"><button>cs-112-fundamentals-of-computer-science-and-engineering-dec-2015</button></Link>
                   <Link to='https://drive.google.com/file/d/1trygaxnvVcwReIU1iSBK6DjRjh4wR9Sg/view?usp=drive_link' target="_blank"><button>bt-2005-basic-computer-engineering-nov-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1h2TA1940voXivmNbCce1etdJfuGs72JG/view?usp=drive_link' target="_blank"><button>bt-2005-basic-computer-engineering-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1gxAvPiUoht11M6xqBIJwY3k7qD5RpmWv/view?usp=drive_link' target="_blank"><button>bt-2005-basic-computer-engineering-may-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1s0C_B2xNokMXFcrmHH3NjRE6lkwga4Wj/view?usp=drive_link' target="_blank"><button>bt-2005-basic-computer-engineering-may-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1JWgzGTXP7hH8K2z1cJwzcjLn8UuSiuj-/view?usp=drive_link' target="_blank"><button>bt-2005-basic-computer-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1dwNngFpptB_6ejMQ1QNmm0FuEwve-ZfP/view?usp=drive_link' target="_blank"><button>bt-2005-basic-computer-engineering-cbgs-dec-2017</button></Link>
                   <Link to='https://drive.google.com/file/d/1AqtjL8hZnRU1pdONrCVbyLFJXLFSKyBw/view?usp=drive_link' target="_blank"><button>bt-205-basic-computer-engineering-nov-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/1KX_DfNEtxmHNiQU2wsNh3w5if8mOpoIE/view?usp=drive_link' target="_blank"><button>bt-205-basic-computer-engineering-nov-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1i_nijwReNIHs-ks9pPTnas6PVn4tHlqV/view?usp=drive_link' target="_blank"><button>bt-205-basic-computer-engineering-nov-2018</button></Link>
                   <Link to='https://drive.google.com/file/d/1OCQlDqeIgxnKcUEE8fvY4jWmpQmXvkrL/view?usp=drive_link' target="_blank"><button>bt-205-basic-computer-engineering-may-2019</button></Link>
                   <Link to='https://drive.google.com/file/d/1dvBWBbMoKnbZoTmE6VLwxTSBeERQy8ku/view?usp=drive_link' target="_blank"><button>bt-205-basic-computer-engineering-jun-2023</button></Link>
                   <Link to='https://drive.google.com/file/d/1FN_2VJgO_qMO75WKYNz-fKzai3H6AwjH/view?usp=drive_link' target="_blank"><button>bt-205-basic-computer-engineering-jun-2022</button></Link>
                   <Link to='https://drive.google.com/file/d/1tSMN2e91COgbFp_dxVDzWY9In4-MIdiF/view?usp=drive_link' target="_blank"><button>bt-205-basic-computer-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/16KxX1NuQ50khcyqDLYSkLQ1mle4jtHpw/view?usp=drive_link' target="_blank"><button>be-205-basic-computer-engineering-jun-2020</button></Link>
                   <Link to='https://drive.google.com/file/d/1M3IMF98-imm7sOGhon_r38vxvHwD8hu_/view?usp=drive_link' target="_blank"><button>be-205-basic-computer-engineering-jun-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1JZ80znXLG9jrZinLfSZoS69VC0a976dm/view?usp=drive_link' target="_blank"><button>be-205-basic-computer-engineering-jun-2015</button></Link>
                   <Link to='https://drive.google.com/file/d/1XLsFCndbLm8dQHs-vdNrm8zTfNKdv2TO/view?usp=drive_link' target="_blank"><button>be-205-basic-computer-engineering-dec-2016</button></Link>
                   <Link to='https://drive.google.com/file/d/1d_c2M5L_cULW25HAq9OiKZvfoaY5lKzi/view?usp=drive_link' target="_blank"><button>be-205-basic-computer-engineering-dec-2015</button></Link>
           </div>
       </div>
    </>

}
export default Papers