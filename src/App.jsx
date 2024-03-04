import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [applicants, setApplicants] = useState([])
  const [primaryApplicant, setPrimaryApplicant] = useState(null)



    function handleDelete(applicant,event){
        event.preventDefault();


        if(applicants.length == 1){
            alert("Cannot have less than 1 applicant")
            return false
        }

        const newMap = applicants.filter(ap =>{
            return ap.id != applicant.id
        })

        setApplicants(newMap)
    }
    function handlePrimaryApplicant(applicant,event){
        event.preventDefault();


        setPrimaryApplicant(applicant)
    }


    function handleSubmit(event){
        event.preventDefault();
        const a = {
            id: Date.now(),
            fname: event.target.fname.value,
            lname: event.target.lname.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
        }

        setApplicants([...applicants,a])

    }



  return (
    <>


        <h2>Applicant Form</h2>
        <form onSubmit={handleSubmit}  className={"form"}>
            <div className={"form"}>

            </div>
            <label htmlFor="">First Name</label>
            <input type="text" name={"fname"} />

            <label htmlFor="">Last Name</label>
            <input type="text" name={"lname"} />

            <label htmlFor="">Mobile #</label>
            <input type="text" name={"phone"}/>

            <label htmlFor="">Email</label>
            <input type="text" name={"email"} />

            <button  className={"submit"} type={"submit"}>Submit</button>
        </form>

        <h2>Applicant List</h2>

        <table className={"table"}>
            <thead>
                <th>Primary</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile #</th>
                <th>Email</th>
                <th>Delete</th>
            </thead>
            <tbody>

            { applicants.map((ap,id) =>{
                return (<tr key={id}>

                    <td>
                        {primaryApplicant?.id == ap?.id?
                        <div>Primary</div>
                            :
                            <button onClick={(e) =>handlePrimaryApplicant(ap,e)}>Set Primary</button>
                        }
                    </td>
                    <td>{ap.fname}</td>
                    <td>{ap.lname}</td>
                    <td>{ap.phone}</td>
                    <td>{ap.email}</td>
                    <td><button onClick={(e) => handleDelete(ap,e)}>Delete</button></td>

                </tr>)
            })

            }
            </tbody>
        </table>
    </>
  )
}

export default App
