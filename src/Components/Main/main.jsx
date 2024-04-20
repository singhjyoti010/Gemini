import "./main.css";
import React from "react";
import assetsIcon from "../../Helper/assets";
import {Context} from "../../context/Context";

export default function Main() {

    const {onSent, recentPrompt, showResult, loading, resultData, setUserInput, userInput} = React.useContext(Context)

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assetsIcon.user_profile} alt="user profile"></img>
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, User</span> <br/>How can I help you today?</p>
                </div>
                <div className="suggestion-cards">
                    <div className="card">
                        <p>Ideas to surprise a friend on their birthday</p>
                        <img src = {assetsIcon.explore} alt="explore icon"></img>
                    </div>
                    <div className="card">
                        <p>Suggest the best park to visit in a city with descriptions</p>
                        <img src = {assetsIcon.explore} alt="explore icon"></img>
                    </div>
                    <div className="card">
                        <p>Recommend new types of water sports, including pros & cons</p>
                        <img src = {assetsIcon.explore} alt="explore icon"></img>
                    </div>
                    <div className="card">
                        <p>Create a travel itinerary for a city</p>
                        <img src = {assetsIcon.explore} alt="explore icon"></img>
                    </div>
                </div>
                <div className="bottom">
                    <div className="search-box">
                        <input onChange={(e) => {setUserInput(e.target.value)}} value={userInput} type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assetsIcon.add_photo} alt="add photo" />
                            <img src={assetsIcon.mic} alt="speak ro record your prompt" />
                            <img onClick={()=>{onSent()}} src={assetsIcon.send} alt="send prompt" />
                        </div>
                    </div>
                    <p className="info">
                        Geini may display inaccurate info, including about people, so double-checck its responses. 
                        Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}