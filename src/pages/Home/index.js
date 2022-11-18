import React, {useState} from 'react';

import {Route, Routes, Link} from 'react-router-dom'

import TodoList from '../TodoList'
import Summary from '../Summary'
import MyPage from '../MyPage'
import TabBar from '../../components/home/TabBar'

function Home (){

    const [page, setPage] = useState('TodoList')

    function handleTabBarClick(active) {
        setPage(active)
    }

    return (
        <div className="Home">
            This is Home...
            {
                page === 'todoList' ? <TodoList /> :
                page === 'summary' ? <Summary /> : <MyPage />
            }
            <TabBar handleTabBarClick={handleTabBarClick}/>
                <Routes>
                    <Route path='todoList' element={<TodoList />}></Route>
                    <Route path='summary' element={<Summary />}></Route>
                    <Route path='myPage' element={<MyPage />}></Route>
                </Routes>
        </div>
    );
}

export default Home;