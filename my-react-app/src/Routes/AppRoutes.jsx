import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from '../templates/MainLayout';


const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    {/*<Route path="/" element={<PostsList />} />*/}
                    {/*<Route path="/posts/create" element={<PostCreate />} />*/}
                    {/*<Route path="/posts/:id" element={<PostEdit />} />*/}
                    {/*<Route path="/users/:id" element={<UserDetails />} />*/}
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
