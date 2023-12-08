
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0);
  const [year,setYear] = useState(0);

  const[validPrinciple,setValidprinciple] = useState(true);
  const[validRate,setValidRate] = useState(true);
  const[validYear,setValidYear] = useState(true);

  const reset =()=>{
    setPrinciple(0);
    setInterest(0);
    setRate(0);
    setValidRate(true);
    setValidprinciple(true);
    setYear(0);
    setValidYear(true);
  }

  console.log(principle);
  const validateInputs = (e) =>{

    const {name,value}=e.target
    console.log(`${name},${typeof value}`);
    console.log(!!value.match(/^\d+(\.\d+)?$/
    ));
    if(!!value.match(/^\d+(\.\d+)?$/ )){
      if(name==='principle'){
        setPrinciple(value)
        setValidprinciple(true)
      }else if(name==='rate'){
        setRate(value);
        setValidRate(true)
      }else{
        setYear(value);
        setValidYear(true)
      }
    }else{
      if(name==='principle'){
        setPrinciple(value)
        setValidprinciple(false)
      }else if(name==='rate'){
        setRate(value);
        setValidRate(false)
      }else{
        setYear(value);
        setValidYear(false)
      }
    }

  }
  const handleCalculate = (e) =>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert("please fill the form completely")
  }else{
    setInterest(principle*rate*year/100)
  }
  }
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center  '>
     <div style={{width:'600px'}} className='bg-light p-5 rounded shadow '>
     <h3 >Simple Interest Calculator</h3>
     <p>Calculate your simple interest easily</p>
     <div style={{width:'100%',height:'150px'}} className="d-flex justify-content-center align-items-center bg-warning mt-5 text-light shadow rounded  flex-column ">
      <h1>₹ {interest}</h1>
      <p className="fw-bolder ">Total Simple Interest</p>
     </div>
     <form onSubmit={handleCalculate}  className="mt-5">
      <div className="mb-3">
      <TextField onChange={e=>validateInputs(e)} className='w-100 ' id="outlined-basic-principle" name='principle' label="₹ Principle Amount" variant="outlined" value={principle || ""}/>
      </div>
      {!validPrinciple&&<div className="mb-3 text-danger fw-bolder ">Invalid Principle Amount</div>}
      <div className="mb-3">
      <TextField onChange={e=>validateInputs(e)} className='w-100' id="outlined-basic-rate" name='rate' label="Rate of Interest (%)" variant="outlined" value={rate || ""} />
      </div>
      {!validRate&&<div className="mb-3 text-danger fw-bolder ">Invalid rate</div>}
      <div className="mb-3">
      <TextField onChange={e=>validateInputs(e)} className='w-100 ' id="outlined-basic-time" name='year' label="Time period (Yr)" variant="outlined" value={year || ""} />
      </div>
      {!validYear&&<div className="mb-3 text-danger fw-bolder ">Invalid year</div>}
      <Stack direction={'row'} spacing={2}>
      <Button disabled={validPrinciple&&validRate&&validYear?false:true} type='submit' style={{height:'70px',width:'50%'}} className='bg-black ' variant="contained">Calculate</Button>
      <Button onClick={reset} style={{height:'70px',width:'50%'}} className='text-dark ' variant="outlined">Reset</Button>
      </Stack>
     </form>
     </div>
    </div>
  )
}

export default App
