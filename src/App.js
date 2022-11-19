import CustomerData from './Data.js';
import './App.css';
import Card from './Components/SearchBar.js';
import { useState } from 'react';



function App() {
  const  [tempData, setTempData] = useState(CustomerData);
 
  const onSearchChange = (value) =>{
    console.log(value);
    const newData=CustomerData.filter(cust=>
      cust.firstName.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||cust.lastName.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||cust.phone.includes(value)
      );
    setTempData(newData);
    
  }
  return (
    <div className="App">
      <h2>HW18</h2>
      <h4> ReactJS. Hooks</h4>
      <input 
        type="search" 
        placeholder='Search'
        className='inputStyle'
        onChange={e=>onSearchChange(e.target.value)}
      />
      {tempData.map((customer, index)=>(
      <Card userInfo={customer} key={index} />
      ))}
    </div>
  );
}


export default App;
