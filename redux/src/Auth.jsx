import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_IN, SIGN_OUT } from './actions/isLogged';

const Auth = () => {
    const IsAuth = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div>
            IsAuth: {IsAuth ? 'Yes' : 'No'}
            <br />
            {IsAuth ?
                (<button onClick={() => dispatch(SIGN_OUT)}>Sing out</button>) :
                (<button onClick={() => dispatch(SIGN_IN)}>Sign in</button>)
            }
        </div>
    );
};

export default Auth;