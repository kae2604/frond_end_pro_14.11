import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import './appRoutes.css';

import MainLayout from '../templates/MainLayout';
import HomePage from '../Pages/HomePage';
import UsersList from "../Pages/UsersList";
import UserView from "../Pages/UserView";
import {useState} from "react";
import CreateUser from "../Pages/CreateUser/index.js";
import EditUser from "../Pages/EditUser/index.js";

const AppRouter = () => {

    const [users, setUsers] = useState([]);
    const [startFetchUsers, setStartFetchUsers] = useState(0);
    const [finishDownload, setFinishDownload] = useState(true);
    const [IdNewUser, setIdNewUser] = useState(11);

    return (
        <Router>
            <MainLayout  className="mainLayout">
                <Routes>
                    <Route path="/"
                           element={<HomePage/>} />
                    <Route path="/users-list"
                           element={<UsersList
                               users={users}
                               setUsers={setUsers}
                               startFetchUsers={startFetchUsers}
                               setStartFetchUsers={setStartFetchUsers}
                               finishDownload={finishDownload}
                               setFinishDownload={setFinishDownload}
                           />}
                    />
                    <Route path="/users/user/:id"
                           element={<UserView/>} />
                    <Route path="/users/create-user"
                           element={<CreateUser setUsers={setUsers} IdNewUser={IdNewUser} setIdNewUser={setIdNewUser}/>} />
                    <Route path="/users/edit-user/:id"
                           element={<EditUser users={users} setUsers={setUsers}/>} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
