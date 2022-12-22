import React from 'react'
var style = {
  backgroundColor: "#1f1f2e",
  color:"white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "6px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "40px",
  width: "100%",
};
var today = new Date();
const Footer = () => {
  return (
    <>
    <div style={style}>
              Team Member Allocation - {today.getFullYear()}
            </div>
    </>
  )
}

export default Footer
