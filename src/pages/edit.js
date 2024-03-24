import React, { useState,useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import http from '../http';
export default function Edit(props){
   

    const navigate=useNavigate();
    const [inputs,setInputs]=useState({});
    //id mil jaye gi jo hamne url me dli hai kis use ko hame fatch krna wo pta chelega
    const {id}=useParams();
    useEffect(() => {
       fetchUser();
    }, [])
    //empty array se ek he bar chlay ga

    const fetchUser = () => {
      http.get('/users/'+id+'/edit').then((res) => {
        setInputs({
          name: res.data.name,
          email: res.data.email,
        });
      });
    };
    

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    const submitForm=()=>{
        //console.log(inputs);
        http.put('/users/'+id,inputs).then((res)=>{
            navigate('/');
            
        })
    }
    
    return (
    
  
    
        <section className="vh-100 mt-2" style={{ backgroundColor: 'white' }}>
        <div className="container m-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Edit User</p>
                     
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                             name='name'
                             value={inputs.name || ""}
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name='email'
                              value={inputs.email || ""}
                              onChange={handleChange}
                       
                            />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>
                        
                       
                        
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" onClick={submitForm} >Update</button>
                        </div>
                  
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
    
    
    }