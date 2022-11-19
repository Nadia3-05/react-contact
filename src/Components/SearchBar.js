import React from 'react';


const Card = ({ userInfo }) => {
  const { firstName, lastName, phone } = userInfo;
  return <div style={{ 
    backgroundColor: "rgb(224, 225, 227",
    paddingBottom: 10,
    width: "90%",
    alignItems:'center',
    marginLeft: "5%",
    
    marginTop:"20px"
    }}>
    <h2>{firstName} {lastName} </h2> ({phone})
  </div>;
}
export default Card;