import React, { useEffect, useState } from "react";
import axios from "axios"
import Records from "./Records";
import { Link } from "react-router-dom";

function Home() {
    const [data,setdata]=useState([]);
    const [formData, setFormData] = useState({
        name: "",
        prn: "",
        email: "",
      });
    
      const [error,setError]=useState(false);
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formData);
        
        try
        {
             
               const response=await axios.post("http://localhost:4000/api/v1/createStudent",formData);
               console.log("response from post",response.data);
               


              
        }
        catch(err)
        {
            console.log("Error while fteching",err);
        }


    
      };

      async function getdata()
      {
        const res=await axios.get("http://localhost:4000/api/v1/showAll");
        setdata(res.data);
        console.log("response from get",data);
      }


      useEffect(()=>
      {
           getdata();
           getdata();
           console.log(typeof(data));

      },[]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-screen flex-col gap-10">
      <div className="max-w-md w-full p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="prn" className="block text-gray-700">
              PRN:
            </label>
            <input
              type="text"
              id="prn"
              name="prn"
              value={formData.prn}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <h2 className="text-center mx-auto text-4xl font-bold">Students Data</h2>
      
      <div className="flex flex-row flex-wrap w-screen h-[900px]">


        
        
      {
          data.length===0?(
            <div>
            </div>
          ):
          (
            <div className="w-11/12 h-[800px] flex flex-wrap flex-row gap-3 justify-center items-center">
              {
                data.map((record,key)=>
                {
                  return (
                    <div className="w-[280px] h-[180px] flex flex-col  text-black" key={key}>
                      <Link to={`/card/${record._id}`} className="text-black text-[13px]">{
                        record._id
                      }
                      </Link>

                      </div>
                    )
                })
              }

            </div>
          )
        }
      </div>
      
      </div>

  );
}

export default Home;
