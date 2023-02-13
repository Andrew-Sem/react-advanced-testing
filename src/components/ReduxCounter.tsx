import {FC} from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {decrement, increment} from "../store/store";

export const ReduxCounter: FC = () => {
    const count = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()
    return (
        <div>
            <div>
                <button aria-label='Increment value' onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span role={"contentinfo"}>{count.value}</span>
                <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    );
}
