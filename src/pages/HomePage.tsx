import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';

const HomePage = () => {

    const dispatch = useDispatch()

    const {isAuth, email} = useAuth()

    if(!isAuth) {
        return (
            <Navigate to='/login'/>
        )
    }

    return (
        <div className="">
            <h1>Welcome</h1>
            <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
        </div>
    )
};

export default HomePage;
