import {useState} from "react";
import {createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,FacebookAuthProvider,GithubAuthProvider} from 'firebase/auth'
import './HomeScreen.css'
import {auth} from "../config/firebase-config.ts";
import {useNavigate} from "react-router-dom";


const HomeScreen =()=>{
    const [email ,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSignup =()=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user)
                navigate("/profile");
            })
            .catch((error) => {
                throw new Error(`User sign up failed with error ${error}`)
            });

    };

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);

            // The signed-in user info.
            const user = result.user;
            console.log(user);
            navigate("/profile");
        }catch(error) {
            throw new Error(`User sign up failed with error ${error}`)
        }
    };
    const handleFacebookLogin = async () => {
        try {
            const provider = new FacebookAuthProvider();
            const result = await signInWithPopup(auth, provider);
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            navigate("/profile");
        }catch(error) {
            throw new Error(`User sign up failed with error ${error}`)
        }
    };
    const handleGithubLogin = async () => {
        try {
            const provider = new GithubAuthProvider();
            const result = await signInWithPopup(auth, provider);
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            navigate("/profile");
        }catch(error) {
            throw new Error(`User sign up failed with error ${error}`)
        }
    };
    return (
        <div className="home-container">
            <h1>User Login</h1>
            <div className="userpass-container">
                <div className="input-field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button onClick={handleSignup}>Sign Up</button>

            </div>
            <hr className="separator"/>
            <div className="social-container">
                <button className="social-icon google" onClick={handleGoogleLogin}>
                    Sign up with Google !
                </button>
                <button className="social-icon facebook" onClick={handleFacebookLogin}>
                    Sign up with Facebook
                </button>
                <button className="social-icon facebook" onClick={handleGithubLogin}>
                    Sign up with Github
                </button>
            </div>
        </div>
    );


}
export default HomeScreen;