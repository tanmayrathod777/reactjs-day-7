import React, {useEffect , useState} from "react";
import './App.css'
const Employee = () => {
  const [data , setData] = useState(10);
  const [count , setCount] = useState(100);
  useEffect(() => {
    console.log('called with data state');
    
  } ,[data]) ;
  useEffect(() =>{
    console.log('called count is ' + count);
  } , [count])
  return (
    <div>
      <h1>count : {count}</h1>
      <h1>data : {data}</h1>
      <button onClick={() => setData(data +1)}>data</button>
      <button onClick={() => setCount(count + 1)}>button</button>
    </div>
  )
}

export default Employee;













































































































































































































































// const initialfValues = {
//     id : 0 ,
//     fullname : '' ,
//     email : '',
//     mobile : '',
//     age :  '' ,
//     birthDate : '' ,

// }
// export default function Employee() {
    
//     const [values , setValues] = useState(initialfValues) ;
// const fullname = (event) => {
//   setValues(event.target.value)
// }
//   return (
      
// <div>
   
// <div class="form-group">
 
//     <label for="exampleInputEmail1">Name</label>
//     <input type="name" class="form-control"
//      id="exampleInputEmail1" aria-describedby="emailHelp"
//       placeholder="Enter Name" onChange={values.fullname}>
//     </input>

//     <label for="exampleInputEmail1">Relation</label>
//   </div>    
  
  
// </div>
//   )
// }

















