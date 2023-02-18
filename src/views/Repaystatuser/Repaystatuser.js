import React,{useState ,useEffect} from 'react'
import axios from 'axios'
import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
} from '@coreui/icons'

import avatar2 from 'src/assets/images/avatars/2.jpg'
import { DocsExample } from 'src/components'
// import { useEffect } from 'react'

const Repaystatuser = () => {
    const [myData , setmyData] = useState([]);

    const allData=()=>{
        alert("Data")
        axios({
          method: 'GET',
          url: "http://127.0.0.1:8000/api/ApplicationForm"
        })
        .then((response) => {
          var data= response.data;
           setmyData(data)
           console.log(data)
           
          }, (error) => {
            console.log(error);

            
          });
      }


useEffect(()=>{
    allData()
    alert("ineer")
},myData.length)



    const tableExample = [
        {
            avatar: { src: avatar2 },
            user: {
                name: 'Atta Ullah',
                month: 'may',
                date: '15-4-2021',
                applicationNo: '0000021',
                Paid: '10000',
                BalAmount: '90000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar2 },
            user: {
                name: 'Atta Ullah',
                month: 'june',
                date: '15-6-2021',
                applicationNo: '0000021',
                Paid: '20000',
                BalAmount: '80000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar2 },
            user: {
                name: 'Atta Ullah',
                month: 'July',
                date: '15-7-2021',
                applicationNo: '0000021',
                Paid: '30000',
                BalAmount: '70000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar2 },
            user: {
                name: 'Atta Ullah',
                month: 'august',
                date: '15-8-2021',
                applicationNo: '0000021',
                Paid: '40000',
                BalAmount: '60000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
        {
            avatar: { src: avatar2 },
            user: {
                name: 'Atta Ullah',
                month: 'September',
                date: '15-9-2021',
                applicationNo: '0000021',
                Paid: '50000',
                BalAmount: '50000',
                intRate: '13%',
                intallAmount: '10000'
            },
        },
    ]
    return (
        <>

            <h1>Repayment Statement Of Atta Ullah</h1>
            <h3>Loan Amount = 1,00,000</h3>
            <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                    <CTableRow>
                        <CTableHeaderCell className="text-center">
                            <CIcon icon={cilPeople} />
                        </CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Name</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Application No.</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Total Paid Amount</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Balance Amount</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Installment Amount</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Interest Rate</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Month Of Installment</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Date Of Payment</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">View Reciept</CTableHeaderCell>

                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {myData.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell className="text-center">
                                <CAvatar size="md" src={item.profilePicFile} 
                                
                                 />
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.FirstName} {item.FatherName}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.applicationID}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.applicationID}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.applicationID}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>Rs.{item.AmmountSoughtPKR + item.AverageMonthlyIncome / item.IncomeAmountPreMonth } </div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.IncomeAmountPreMonth}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.DateOfBirth}</div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <div>{item.Education}</div>
                            </CTableDataCell>
                            <CTableDataCell>
                                <div className='a'>
                                    <CButton className="text-center">View </CButton>
                                </div>
                            </CTableDataCell>

                        </CTableRow>

                    ))}

                </CTableBody>


            </CTable>
            <CTableDataCell>
                <div className='abc'>
                    <CButton className="abc">Download Statement</CButton>
                </div>
            </CTableDataCell>
        </>
    )
};
export default Repaystatuser