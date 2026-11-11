import { useState } from 'react'
import './App.css'

type PatientStatus = 'Active' | 'Discharged'

interface Patient {
  id: string
  name: string
  status: PatientStatus
  balance: number
  ward: string
}

const patients: Patient[] = [
  { id: "P101", name: "Santos, Maria", status: "Active", balance: 1500.00, ward: "A" },
  { id: "P102", name: "Reyes, Jose", status: "Discharged", balance: 0.00, ward: "B" },
  { id: "P103", name: "Cruz, Ana", status: "Active", balance: 0.00, ward: "A" },
  { id: "P104", name: "Bautista, Luis", status: "Active", balance: 5200.50, ward: "C" },
  { id: "P105", name: "Garcia, Elena", status: "Discharged", balance: 300.00, ward: "B" }
]

function App() {
  const [hideDischarged, setHideDischarged] = useState(false)

  return (
    <>
      <div className="wrapper">
        <button
          className="toggle-button"
          onClick={() => setHideDischarged(!hideDischarged)}
        >
          { hideDischarged ? 'Show All' : 'Hide Discharged' }
        </button>

        {
          patients.map((patient) => {
            const isDischarged = patient.status === "Discharged"
            if (hideDischarged && isDischarged) return null
          
            return (
              <div
                key={patient.id}
                style={{
                  marginTop: '8px', 
                  padding: '8px',
                  backgroundColor: isDischarged ? '#E0E0E0' : undefined,
                  color: isDischarged ? '#08060D' : undefined,
                  border: patient.balance > 0 && patient.status === "Active" ? '2px solid red' : undefined
                }}
              >
                ID: {patient.id}; Name: {patient.name}; Status: {patient.status}; Balance: {patient.balance}; Ward: {patient.ward}
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
