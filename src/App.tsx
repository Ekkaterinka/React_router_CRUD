import { Routes, Route, NavLink, Link } from "react-router-dom";
import './App.css'
import Posts from "./components/Posts";
import New from "./components/New";
import Post from "./components/Post";
import EditPost from "./components/EditPost";

function App() {


  return (
    <>
    <div>
    <NavLink to="/"></NavLink>
    <Link to="/new"> <button>Создать пост </button> </Link> 
    <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/new' element={<New/>} />
        <Route path='/post/:rId' element={<Post/>} />
        <Route path='/edit' element={<EditPost/>} />
    
        </Routes>
    </div>
    </>
  )
}

export default App
