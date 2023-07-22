import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Login(props) {
  let {handleLogin} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory();


    return (
        <div>      
            <h1>Login</h1>
            <div>
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={()=>handleLogin(username,password)}>Login</button>
      </div>
    );
}

export default Login;