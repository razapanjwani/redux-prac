"use client"
import { add } from "@/redux/Cartslice"
import { increment,decrement } from "@/reduxTwo/Counterslice"
import { addEmailId,addPassword } from "@/reduxTwo/auth"
import { addTodo,deleteTodo } from "@/reduxTwo/Todoslice"
import { useDispatch,useSelector } from "react-redux"
import data from "src/app/todo.json"
import { useEffect } from "react"
const Home = () =>{
  let dispatch = useDispatch()
  let selctor = useSelector((state)=>state.mycounter)
  let authSelector = useSelector((state)=> state.myauth)
  let todoSelector = useSelector((state)=> state.mytodo)
  const getTodo = () => {
      dispatch(addTodo(data))
      console.log(todoSelector);
  }
  const handleClick = () => {
    dispatch(increment())
  }
  const handleClickTwo = () => {
    dispatch(decrement())
  }
  // const alertt = () => {
  //   let obj ={email:"test123@test.com" ,password:56789}
  //   let objTwo ={email:"test456@test.com" ,password:16789}
  //   dispatch(addEmailId(obj))
  //   dispatch(addEmailId(objTwo))

  // }
  // function handleCheck(event) {
  //   let isChecked = event.target.checked
  //   if(isChecked){
  //         todoSelector.map((items)=>{
  //           let newTodo = JSON.parse(JSON.stringify(items))
  //           newTodo.completed = true
  //           dispatch(deleteTodo(newTodo.completed))
  //         })
  //   }
  // }
  useEffect(()=>{
    localStorage.setItem("auth",JSON.stringify(authSelector))
  },[authSelector])

  function handleSubmit(event) {
    event.preventDefault();
    let email = event.target[0].value
    let pass = event.target[1].value
    let obj = {email:email,pass:pass}
    dispatch(addEmailId(obj))
    event.target.reset()
  }

  return (
    <>
      <h1>home page </h1>
      <button>clickme</button><br />
      {authSelector.map((obj,i)=><div key={i}>{obj.email}</div>)} 
      <button onClick={getTodo}>clk me</button>
      {todoSelector.map((obj) => {
        return <div key={obj.id}>{obj.title}<input type="checkbox" onClick={(event)=>{handleCheck(event)}}></input></div>
      })}
      <form onSubmit={(event)=>{handleSubmit(event)}}>
        <input type="text" placeholder="email" required></input>
        <input type="password" placeholder="password" required></input>
        <button>sub</button>
      </form>
      {authSelector.map((items,i)=>{
        return <div key={i}>Email:{items.email}    <br />    pass:{items.pass}</div>
      })}
    </>
  )
}
export default Home