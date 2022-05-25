import React, {useState} from 'react';
import axios from "axios";
import "./form.css";
import { useNavigate } from 'react-router-dom';


const Form = () => {
  const [user,setUser]=useState({
    // userfile:'',
    userName:"",
    userAddress:"",
    userDesc:"",
  });
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData();

    const file = e.target.elements.userFile.files[0];

    formData.append('file',file);
    formData.append("userName",user.userName);
    formData.append("userAddress",user.userAddress);
    formData.append("userDesc",user.userDesc);
    formData.append("date",new Date().toLocaleDateString());
    
    console.log(formData.get("file"));
    console.log(formData.get("userName"));
    console.log(formData.get("userAddress"));
    console.log(formData.get("userDesc"));

    try{
      console.log(formData);
      const response=await axios.post(
        'https://instaclone-back-10x.herokuapp.com/user/post/add',
        formData
      );
      navigate("/landpage");
      console.log(response);

    }catch(err){
      console.log(err);
    }
  };

  return (
    <>
    <div className='form-wrapper'>
      <div className='form'>
        <form action='' onSubmit={handleSubmit}>
          <div className="file">
            <input type="file" name='userFile' id='userFile' accept='.jpg' required/>

          </div>
          <div className='author'>
            <input type='text' placeholder='Author' name='userName' id='userName' value={user.userName} onChange={(e)=> setUser({...user, userName: e.target.value})} required/>
            <input type='text' placeholder='Location' name='userAddress' id='userAddress' value={user.userAddress} onChange={(e)=> setUser({...user,userAddress:e.target.value})} required/>

          </div>
          <div className='desc'>
            <input type='text' placeholder="Description" name='userDesc' id='userDesc' value={user.userDesc} onChange={(e)=> setUser({...user, userDesc:e.target.value})} required/>

          </div>
          <div className='post'>
            <button type='submit'>POST</button>
          </div>

        </form>
      </div>
      </div>
      </>
  );
};

export default Form