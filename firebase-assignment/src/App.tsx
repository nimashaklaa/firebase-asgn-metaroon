import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen.tsx";
import './App.css'
import UserProfile from "./screens/UserProfile.tsx";
function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/profile" element={<UserProfile/>} />
            </Routes>

        </Router>
    )
}
export default App