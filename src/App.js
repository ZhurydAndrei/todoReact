import React, {useState} from "react"
import './styles/App.css'
import PostItem from './components/PostItem'

function App() {
  const [post, setPost] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'}
  ])

  return (
    <div className="App">
      {post.map(post => <PostItem post={post} key={post.id}/>)}
    </div>
  )
}

export default App
