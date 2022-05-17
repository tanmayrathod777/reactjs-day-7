import './App.css';
import React , {useState} from 'react';
import moment from 'moment';

import validator from 'validator';
import { mockComponent } from 'react-dom/test-utils'; 
function App() {
  const [data,  setData] = useState("");
  const [pass , setPass] = useState("");
  const [city , setCity] = useState('');
  const [date , setDate] = useState('');
  const [year , setYear] = useState('');
  const [month , setMonth] = useState('');
  const [day , setDay] = useState('');
  const [guardian , setGuardian] = useState('');
  const [submit , setSubmit] = useState(false);

  const getData =(event) => {
    setData(event.target.value)
    
  }
  const getDate = (event) => {
   const m = event.target.value
    setDate(event.target.value);
    
    console.log(m)
  }
  const getPass = (event) => {
    setPass(event.target.value)
    if(validator.isEmail(pass) === true) {
      console.log('must be filled');
    }
  }
  
  
  if(validator.isNumeric(pass)) {
    // const show = console.log('password is valid');
    // console.log(show);
  }
  const submitEvent = (event) =>{
    event.preventDefault()
    const obj = {
      name : data , 
      relation : pass ,
      city : city ,
      date : date ,
      year : year ,
      month : month ,
      day : day ,
      guardian : guardian
    }
    console.log(obj);
  }
const getCity = (event) => {
  setCity(event.target.value) ;
}
const getMonth = (event) => {
  setMonth(event.target.value)
  if(event.target.value > 13){
    
  }
}
const getDay = (event) => {
  setDay(event.target.value)
}
const getGuardian = (event) =>{
  setGuardian(event.target.value)

}
const getYear = (event) =>{
  setYear(event.target.value)
  const YearIs = event.target.value

  
  if(YearIs < 2004){
    console.log('valid');

  }
  else {
    console.log('Invalid');
    
  }
}




  return (
    <div className="App">
    <form onSubmit={submitEvent}>
      <h1>Form</h1>
      <lable>Enter Your Name </lable>
      <input type='text' onChange={getData} name = {data} required></input><br />
      <lable>Enter Your Relat </lable>
      <input type='text' onChange={getPass} name = {pass} required></input> <br />
      <lable>Enter City Name </lable>
      <input type='text' onChange={getCity} name = {city} required></input><br />
      <lable>Enter Date Of Birth</lable>
      <input type="date" onChange={getDate} name = {date} ></input> <br/>
      <input type = 'number' name = {year} onChange ={getYear} placeholder='year' required ></input>
      <input type = 'number' name = {month} onChange={getMonth} placeholder = 'month' required></input> 
      <input type = 'number' name = {day} onChange ={getDay} placeholder = 'day' required></input><br />
      <lable className='hidden'>Enter Your guardian</lable>
      <input type= 'hidden' className='guardian' name = {guardian} onChange={getGuardian} ></input><br />
      <button type='submit'>Submit</button>
      <h2>
        {submitEvent}
      </h2>
      </form>
    </div> 
  );
}

export default App;