import Navbar from "./components/Navbar"
import LeftSidebar from "./components/LeftSidebar"
import Feed from "./components/Feed"
import RightSidebar from "./components/RightSidebar"
import "./App.css"

function App(){

return(

<div>

<Navbar/>

<div className="layout">

<LeftSidebar/>

<Feed/>

<RightSidebar/>

</div>

</div>

)

}

export default App
