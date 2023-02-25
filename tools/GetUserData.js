
import { useSelector } from 'react-redux';
import { loginSucessSelector } from '../redux/selectors';

export const GetUserData = () => useSelector(loginSucessSelector)
