import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Reply() {
  const [data,setData] = useState([]);
  const [reply,setReply] = useState([])
  const [showCon,setShowCon] = useState([])
  const [showRep,setShowRep] = useState([])

  async function getData(){
    const res = await fetch("http://localhost:5000/getTitle")
    const data = await res.json()
    setData(data)
  }

  async function getReply(){
    const res = await fetch("http://localhost:5000/getReply")
    const data = await res.json()
    setReply(data)
  }


  useEffect(()=>{
    getData();
    getReply()
  },[])

  function showContext ({target:{value , name}}){
    setShowCon(name)
    console.log(name)
    console.log(value)
    console.log(reply[0].rep_of_arti)
    let i = reply.filter(prevDate => prevDate.rep_of_arti === parseInt(value))
    console.log(i)
    setShowRep(i)
  }


    return (
      <>
      <Link to="/">回首頁</Link>

      <p>Reply</p>
      <div>
      {data.map(title =>(
          <div key={title.arti_id}>
            <button value={title.arti_id} name={title.arti_context} onClick={showContext}>{title.arti_title}</button>
        </div>
       ))}
      </div>

      <div>
        {showCon}
      </div>
      <div>{showRep.map(title =>(
          <div key={title.rep_id}>
            <p>{title.rep_message}</p>
          </div>
       ))}</div>

        <div >
          <p>新增回覆</p>
        <input type="text" placeholder="回覆內容"/>
        <button>送出</button>
        </div>

      </>
    );
  }
  
  export default Reply;