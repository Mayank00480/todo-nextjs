import { useRef } from "react";

export default  function addItem(){
   const inputData =  useRef()
    const submit = async(e) =>{
      e.preventDefault();
      const obj = {
        description : inputData.current.value
      }
     const data = await fetch('/api/hello',{
        method : 'POST',
        body : JSON.stringify(obj),
        headers : {
            "Content-Type" : "application/json"
        }
      })
      const resp = await data.json();
      console.log(resp);
    }
return <form onSubmit = {submit}>
    <label>Description</label>
    <textarea ref = {inputData} type = "text" rows = "20"cols = "50" required/>
    <input type = "submit" value = "submit"/>
</form>
}
