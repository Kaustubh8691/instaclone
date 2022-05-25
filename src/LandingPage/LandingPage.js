import React,{useEffect,useState} from 'react'
// import '../App.css';
import '../Postview.css';
import Card from '../Component/Card.js';
import Nav from '../Component/nav.js';



const LandingPage=()=> {
    // const users=data.user;
    const [people, setPeople] = useState([]);

    const getUserData = async () => {
      const response = await fetch("https://instaclone-back-10x.herokuapp.com/user/post")
      const data = await response.json();
      setPeople(data.user);
    }
    useEffect(() => {
      getUserData();
    }, [])

  return (
    <>
    <Nav/>
    <div className='site-container'>
        
        <Card people={people}/>
       
         </div></>
    
  )
}
export default LandingPage;