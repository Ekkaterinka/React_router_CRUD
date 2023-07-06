import { Routes, Route} from "react-router-dom";
import './App.css'
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import WatchPost  from "./components/WatchPost ";
import PostEdit from "./components/PostEdit ";

function App() {


  return (
    <>
    <div>
    <Routes>
          <Route path   ='/posts/new'element={<AddPost/>}/>
          <Route path   ='/'element={<Posts/>}/>
          <Route path   ='/posts/:id'element={<WatchPost/>}/>
          <Route path   ='/posts/:id/edit'element={<PostEdit/>}/>
        </Routes>
    </div>
    </>
  )
}

export default App
