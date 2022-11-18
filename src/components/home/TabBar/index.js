import React, { useState } from 'react'
import  {Link} from 'react-router-dom'
import '../../../assets/css/font.css'
import './index.css'


export default function TabBar(props) {

    const [activeTab, setActiveTab] = useState("todoList")
    console.log(activeTab)

    const {handleTabBarClick} = props
    handleTabBarClick(activeTab)

    function handleClick(active) {
        activeTab = setActiveTab(active)
    }

    return (
        <div className="tabBar">
            {/* click item and change state */}
            <div className={"tabBarItem" + (activeTab === "todoList" ? " active" : "")} onClick={() => handleClick("todoList")}>
                {/* render icons based on state */}
                <i className={"iconfont icon-bar-chart-2-" + (activeTab === "hot" ? "fill" : "line")}></i>
                <span className="tabBarSubTitle">Todo</span>
            </div>
            <div className={"tabBarItem" + (activeTab === "summary" ? " active" : "")} onClick={() => handleClick("summary")}>
                <i className={"iconfont icon-book-read-" + (activeTab === "news" ? "fill" : "line")}></i>
                <span className="tabBarSubTitle">Summary</span>
            </div>
            <div className={"tabBarItem" + (activeTab === "myPage" ? " active" : "")} onClick={() => handleClick("myPage")}>
                <i className={"iconfont icon-bookmark-" + (activeTab === "history" ? "fill" : "line")}></i>
                <span className="tabBarSubTitle">My</span>
            </div>
        </div>
    )
}