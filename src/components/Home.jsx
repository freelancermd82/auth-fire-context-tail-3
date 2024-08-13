import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProviders';

const Home = () => {

    const {user} = useContext(AuthContext);


    return (
        <div>
            <h3>This is home.</h3>
        </div>
    );
};

export default Home;