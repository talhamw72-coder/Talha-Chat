import {useState} from "react"

function CreatePost(){

const [text,setText] = useState("")

return(

<div className="createPost">

<input
placeholder="What's on your mind?"
onChange={(e)=>setText(e.target.value)}
/>

<button>Post</button>

</div>

)

}

export default CreatePost
