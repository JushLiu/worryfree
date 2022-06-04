import { useCallback, useState } from "react";
import { Link } from "react-router-dom";


function Write() {
  const [postData, setPostData] = useState(
    {
      arti_title: "",
      arti_context: "",
    }
  );

  const handlerInput = useCallback(({ target: { name, value } }) => {
    setPostData((data) => ({
      ...data,
      [name]: value
    }))
  }, [])

  const handleClick = useCallback(async () => {
    let res = await fetch("http://localhost:5000/create", {
      method: "POST", body: JSON.stringify(postData), headers: {
        'content-type': 'application/json'
      },
    })
      let response = await res.json()
      alert ("信件已送出", response)
      // .then((response) => response.json()) // 解析json
      // .then((response) => alert("信件已送出", response))
  }, [postData])



    return (
      <>
      <Link to="/">回首頁</Link>
      <div className="f-bg">
      <form>
        <div className="container">
        <h1>寫信</h1>
        <p>寫下心中的煩惱或任何想說的話</p>
      <label htmlFor="title">標題</label>
      <input type="text" placeholder="輸入標題" id="title" required name="arti_title" value={postData.arti_title} onChange={handlerInput}/>
      <label htmlFor="content">內容</label>
      <input type="text" placeholder="輸入內容" id="context" required name="arti_context" value={postData.arti_context} onChange={handlerInput}/>
      <button type="submit" onClick={handleClick}>Submit</button>
      </div>
      </form>
      
      </div>
      </>
    );
  }
  
  export default Write;