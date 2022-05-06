import React, {useState} from 'react';


const UserForm = (props) => {
    // STATE VARIABLES
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const[newUserObj, setNewUserObj] = useState({});

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        console.log("Welcome", newUser);
        // setNewUserObj
    };

    return(
        <fieldset>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div>
                    <label>Email address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange= {(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange= {(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                Your Form Data <br/>
                
                First Name: {firstName} <br/>
                Last Name: {lastName} <br/>
                Email: {email} <br/>
                Password: {password}<br/>
                Confirm Password: {confirmPassword}<br/>
            </div>

        </fieldset>
        );
};
export default UserForm;