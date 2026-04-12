import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import './appRoutes.css';
import MainLayout from '../templates/MainLayout';
import HomePage from '../Pages/HomePage';
import UsersList from "../Pages/UsersList";
import UserView from "../Pages/UserView";
import CreateUser from "../Pages/CreateUser";
import EditUser from "../Pages/EditUser";
import DeleteUser from "../Pages/DeleteUser";
import Login from "../Pages/Login";
import ProtectedRoute from "../routes/ProtectedRoute";

const AppRouter = ({users,
                   setUsers,
                   startFetchUsers,
                   setStartFetchUsers,
                   finishDownload,
                   setFinishDownload,
                   IdNewUser,
                   setIdNewUser,
                   isAuth,
                   setIsAuth
                   }) => {

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
                               setFinishDownload={setFinishDownload}/>}
                    />
                    <Route path="/users/user/:id"
                           element={<UserView/>
                    }/>
                    <Route path="/users/create-user"
                           element={
                               <ProtectedRoute isAuth={isAuth}>
                                    <CreateUser
                                           setUsers={setUsers}
                                           IdNewUser={IdNewUser}
                                           setIdNewUser={setIdNewUser}/>
                               </ProtectedRoute>
                    } />
                    <Route path="/users/edit-user/:id"
                           element={<EditUser
                           users={users}
                           setUsers={setUsers}/>} />
                    <Route path="/users/delete-user/:id"
                           element={<DeleteUser
                           users={users}
                           setUsers={setUsers}/>
                    } />
                    <Route path="/login"
                           element={<Login setIsAuth={setIsAuth} />
                    } />
                </Routes>
            </MainLayout>
        </Router>
    );
};
AppRouter.propTypes = {
    users: PropTypes.array.isRequired,
    setUsers: PropTypes.func.isRequired,
    startFetchUsers: PropTypes.number.isRequired,
    setStartFetchUsers: PropTypes.func.isRequired,
    finishDownload: PropTypes.bool.isRequired,
    setFinishDownload: PropTypes.func.isRequired,
    IdNewUser: PropTypes.number.isRequired,
    setIdNewUser: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired,
    setIsAuth: PropTypes.func.isRequired,
};
export default AppRouter;
