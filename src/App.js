
import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import TeamAllocation from './TeamAllocation';
import AddTeam from './AddTeam';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Employees from './Employees';
function App() {
  const [selectedTeam,setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'Team A');
  const [employee,setemployee] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "Team A"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "Team B"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "Team C"
  }])

    useEffect(()=>{
    localStorage.setItem('employeeList',JSON.stringify(employee));
    },[employee])

    useEffect(()=>{
      localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));
      },[selectedTeam])

      function addT (name,des,gen,team){
         let p = employee.length;
          let da = {id:p+1,fullName:name,designation:des,gender:gen,teamName:team};
          console.log(da);
          setemployee([...employee,da]);
      }
    function handleTeam (event) 
    {
      setTeam(event.target.value)
    }
    function handleclick(event)
    {
      const transformedEmployee = employee.map((employee) => 
        employee.id === parseInt(event.currentTarget.id)? 
        (employee.teamName === selectedTeam)?{...employee,teamName:''}
        :{...employee,teamName:selectedTeam}:employee
        );
        setemployee(transformedEmployee);
      }
  return (
   <div>
    <Router>
      <NavBar/>
     <Routes>
      <Route path='/' element={<><Header
      selectedTeam={selectedTeam} 
      employee={employee}/><Employees employee={employee} 
    selectedTeam={selectedTeam}
     handleclick={handleclick}
      handleTeam={handleTeam}/></>} exact>
    </Route>
    <Route path="/TeamAllocation" element= {<><Header
      selectedTeam={selectedTeam} 
      employee={employee}/><TeamAllocation employee={employee}
     selectedTeam={selectedTeam} setTeam={setTeam}/></>}> 
    </Route>
    <Route path="/AddTeam" element={<AddTeam employee={employee} setemployee={setemployee} addT={addT} />}>
    </Route>
  </Routes>
   
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
