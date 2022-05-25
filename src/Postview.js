// import React, { useEffect, useState } from 'react';
// import Card from './Component/Card';  
// import Nav from './Component/nav';

// import './Postview.css';


// const Postview=()=> {
//   const [users, setUsers]=useState([]);
  
//   useEffect(()=>{
//     async function fun(){
//       let data1=await fetch("http://localhost:3004/user");
//       let data=await data1.json();
//       console.log(data);
//       setUsers([...data]);
//     }
//     fun();
//   },[]);

//   return (
//     <div className="site-container">
//       <Nav/>
//       <div className='container'>
//         {users.length? users.map((obj,idx) =>{
//           return <Card key={"kaustubh" + idx} obj={obj} />
//         }):""}
//       </div>
//     </div>
//   );
// };

// export default Postview;
