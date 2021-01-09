import React from 'react';
import Sidebar from "./Sidebar";

function Layout(props) {
    return (
            <div className={"main_container"} >
                <div style={{width:"20%",float:"left"}}>
                    <Sidebar history={props.history}/>
                </div>
                <div style={{width:"80%", float:"right", backgroundColor:"red"}}>
                    {props.children}
                </div>
            </div>
    );
}

export default Layout;