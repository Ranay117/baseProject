import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/state';
export const useAppDispatch = () => useDispatch<AppDispatch>();