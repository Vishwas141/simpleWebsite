import axios from "axios";
import React, { useEffect, useState } from "react";

function Card() {
  const [id, setId] = useState(null);

  async function getdata() {
    try {
      const url = `http://localhost:4000/api/v1/show/${id}`;
      const res = await axios.get(url);
      console.log(res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  }


  useEffect(() => 
  {
    const url = window.location.href;
    const regex = /\/card\/(\w+)$/;
    const match = url.match(regex);
    const extractedId = match ? match[1] : null;
    setId(extractedId);
    if (id) {
      getdata();
    }
  }, [id]); // Trigger the 'getdata' function when 'id' changes

  return (
    <div className="w-screen bg-slate-500 min-h-screen">
      {id}
    </div>
  );
}

export default Card;
