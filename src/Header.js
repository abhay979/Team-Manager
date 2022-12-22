import React from 'react'
const Header = (props) => {
  const count = props.employee.filter( (employee) => {
    return (employee.teamName === props.selectedTeam)
  }).length; 
  let s =""
  count ===1?s="member":s="members";
  return (
    <div> 
        <header>
          <h1 style={{textAlign:"center"}}> TEAM ALLOCATION </h1>
        <h3 style={{textAlign:"center"}}> {props.selectedTeam} has {count} {s}</h3>
          </header> 
        
    </div>
  )
}

export default Header