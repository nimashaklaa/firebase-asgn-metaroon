import {useState} from "react";

const UserProfile = ()=>{
    const [fname ,setFname] = useState('');
    const [lname, setLname] = useState('');
    return(
        <div className="userProfile-container">
            <h1>Welcome to Webpage</h1>
            <div className="userpass-container">
                <div className="input-field">
                    <label htmlFor="fname">First Name:</label>
                    <input
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="First Name"
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="lname">Last Name:</label>
                    <input
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button onClick={saveUserData}>Save Profile</button>
            </div>

        </div>

    )
}
export default UserProfile