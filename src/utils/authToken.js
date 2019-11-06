import axios from 'axios';

const authToken = (token, type = 'Bearer') => {
    const value = token ? `${type} ${token}` : null;
    if (!value){
        //delete auth header
        delete axios.defaults.headers.common['Authorization'];
        return
    }
    //apply to every request ---check the header name from the given end point
    axios.defaults.headers.common['Authorization'] = value;
};

export default authToken;