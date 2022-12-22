
import React from 'react'
import femaleprofile from './Images/femaleprofile.png';
import maleprofile from './Images/maleprofile.png';

const Employees = (props) => {
      return(
        <main className='container'>
        <div className='row justify-content-center mt-3 mb-3'>
            <div className='col-8'>
                <div className='optionsTab'>
              <select className='form-select form-slect-lg my-3' value={props.selectedTeam} 
              onChange={props.handleTeam}
              style={{backgroundColor:"ButtonHighlight"}}>
                <option><b>Team A</b></option>
                <option><b>Team B</b></option>
                <option><b>Team C</b></option>
                <option><b>Team D</b></option>
              </select>
                </div>
                <div className='card-collection'>
         {
            props.employee.map( (employee) => {
                return(
              <div key={employee.id} id={employee.id} className={(employee.teamName === props.selectedTeam?'card m-2 yes':'card m-2')} onClick={props.handleclick} style={{width:'12-rem',cursor:'pointer'}}>
                {employee.gender==="male"?<img src={maleprofile} alt="male" style={{height:'200px'}} className='card-img-top'/>:<img src={femaleprofile} alt="female" className='card-img-top'/>}
              
               <div className='card-body'>
                <h5 className='card-title'>Full Name: {employee.fullName}</h5>
               <p className='card-text'><b>designation:</b> {employee.designation}</p>
               </div>
              </div>
                )
            })
        
         }
         </div>
         </div>
        </div>
        </main>
      )
        }
    export default Employees;