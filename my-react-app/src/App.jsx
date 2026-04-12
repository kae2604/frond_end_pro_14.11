import AppRoutes from './routes/AppRoutes';
import {useState} from "react";

const App = () => {

    const [users, setUsers] = useState([]);
    const [startFetchUsers, setStartFetchUsers] = useState(0);
    const [finishDownload, setFinishDownload] = useState(true);
    const [IdNewUser, setIdNewUser] = useState(11);
    const [isAuth, setIsAuth] = useState(false);

    return (
            <AppRoutes users={users}
                       setUsers={setUsers}
                       startFetchUsers={startFetchUsers}
                       setStartFetchUsers={setStartFetchUsers}
                       finishDownload={finishDownload}
                       setFinishDownload={setFinishDownload}
                       IdNewUser={IdNewUser}
                       setIdNewUser={setIdNewUser}
                       isAuth={isAuth}
                       setIsAuth={setIsAuth}/>
    )
}
export default App;