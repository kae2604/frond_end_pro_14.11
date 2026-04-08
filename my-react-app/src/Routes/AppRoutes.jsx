import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './appRoutes.css';

import MainLayout from '../templates/MainLayout';
import HomePage from '../Pages/HomePage';
import UsersList from "../Pages/UsersList";
import UserView from "../Pages/UserView";
import {useState} from "react";


const AppRouter = () => {

    const [users, setUsers] = useState([]);
    const [startFetchUsers, setStartFetchUsers] = useState(0);
    const [finishDownload, setFinishDownload] = useState(true);

    return (
        <Router>
            <MainLayout  className="mainLayout">
                <Routes>
                    <Route path="/"
                           element={<HomePage/>} />
                    <Route path="/usersList"
                           element={<UsersList
                               users={users}
                               setUsers={setUsers}
                               startFetchUsers={startFetchUsers}
                               setStartFetchUsers={setStartFetchUsers}
                               finishDownload={finishDownload}
                               setFinishDownload={setFinishDownload}
                           />}
                    />
                    <Route path="/user/:id"
                           element={<UserView/>} />
                    {/*<Route path="/users/:id" element={<UserDetails />} />*/}
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
