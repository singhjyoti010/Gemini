import React from "react";
import './sidebar.css';
import assetsIcon from "../../Helper/assets";

export default function Sidebar() {
    const [collapsed, setCollapsed] = React.useState(true)
    function changeCollapse() {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className="sidebar">
            <div className="top">
                <div className="menu" onClick={changeCollapse}>
                    <img src={assetsIcon.menu} alt="menu"/>
                </div>
                <div className="new-chat">
                    <img src={assetsIcon.add} alt="new chat" />
                    { !collapsed ? <p>New Chat</p> : null }
                </div>
                { !collapsed ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-item">
                            <img src={assetsIcon.chat} alt="recent"></img>
                            <p>What is react ...</p>
                        </div>
                    </div> : 
                    null
                }
            </div>
            <div className="bottom">
                <div className="help">
                    <img src={assetsIcon.help} alt="help"></img>
                    {!collapsed ? <p>Help</p> : null}
                </div>
                <div className="activity">
                    <img src={assetsIcon.history} alt="history"></img>
                    {!collapsed ? <p>Activity</p> : null}
                </div>
                <div className="settings">
                    <img src={assetsIcon.settings} alt="settings"></img>
                    {!collapsed ? <p>Settings</p> : null}
                </div>
            </div>
            {/* {!collapsed ? <div className="promotion">
                upgrade to gemini advance
            </div> : null} */}
        </div>
    )
} 