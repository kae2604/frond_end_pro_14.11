import UsersList from "./UsersList";
export default UsersList

export const handleFetchError = (error, setIsErrorHttp, setIsErrorNetwork, setErrorText, setErrorStatus, setIsLoading, setFinishDownload) => {
    setFinishDownload(true);
    setTimeout(() => {
        if (error.type === 'http') {
            setErrorText('Failed to load data from the server');
            setErrorStatus(`Status: ${error.status}`);
            setIsErrorHttp(true);
        } else if (error.type === 'network') {
            setErrorText('Server not found');
            setIsErrorNetwork(true);
        }
        setIsLoading(false);
    }, 1000);
};

