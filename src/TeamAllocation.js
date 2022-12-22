
import React from 'react'
import { useState } from 'react';

const TeamAllocation= ({ employee, selectedTeam, setTeam }) => {
    document.title="Team Details";
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employee.filter((employee) => employee.teamName === "Team A");
    var teamA = { team: "Team A", members: teamAMembers, collapsed: selectedTeam === "Team A" ? false : true }
    teams.push(teamA);

    var teamBMembers = employee.filter((employee) => employee.teamName === "Team B");
    var teamB = { team: "Team B", members: teamBMembers, collapsed: selectedTeam === "Team B"? false : true }
    teams.push(teamB);

    var teamCMembers = employee.filter((employee) => employee.teamName === "Team C");
    var teamC = { team: "Team C", members: teamCMembers, collapsed: selectedTeam === "Team C" ? false : true }
    teams.push(teamC);

    var teamDMembers = employee.filter((employee) => employee.teamName === "Team D");
    var teamD = { team: "Team D", members: teamDMembers, collapsed: selectedTeam === "Team D"? false : true }
    teams.push(teamD);

    return teams;

  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
      ? { ...groupedData, collapsed: !groupedData.collapsed }
      : groupedData);
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className="container">
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className='card mt-2' style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team}
                className={item.collapsed === true ? "collapse":""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark" style={{padding:'4px'}}>Full Name: {member.fullName}</span>
                        </h5>
                        <p  style={{padding:'4px'}}>Designation: {member.designation}</p>
                      </div>
                    );
                  })
                }
              </div>
              <hr />
            </div>
          );
        })
      }
    </main>
  )

}
export default TeamAllocation