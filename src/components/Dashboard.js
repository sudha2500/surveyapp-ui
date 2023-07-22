import React from 'react';

function Dashboard(props) {
   let {handleLogout} = props;
    return (
        <div style={{textAlign:"center"}}>
        <h3>This is Dashboard</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;