import {useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { auth, db } from '../config/firebase-config.ts';
import {doc,setDoc,getDoc} from 'firebase/firestore'
import './UserProfile.css'

const UserProfile = ()=>{
    const [fname ,setFname] = useState('');
    const [lname, setLname] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data from Firestore if available
        const fetchUserData = async () => {
            try {
                if(auth.currentUser){
                    const userDoc = doc(db, 'users', auth.currentUser.uid);
                    const userDocSnap = await getDoc(userDoc);

                    if (userDocSnap.exists()) {
                        const userData = userDocSnap.data();
                        setFname(userData.fname || '');
                        setLname(userData.lname || '');
                    }
                }
                else{
                    console.error("User is not authenticated");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []); // Run the effect only once, on component mount

    const saveUserData = async () => {
        try {
            if(auth.currentUser){
                // Save user data to Firestore
                const userDocRef = doc(db, 'users', auth.currentUser.uid);
                await setDoc(userDocRef, { fname, lname });

                console.log("User data saved successfully");

                navigate("/profile");
            }
            else{
                console.error("User is not authenticated");
            }
        } catch (error) {
            console.error("Error saving user data:", error);
        }
    };

    return(
        <div className="userProfile-container">
            <h1>Welcome to Webpage</h1>
            <div >
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