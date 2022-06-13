import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../a1-main/b1-ui/routes/RoutesComponent";

const Profile = () => {

    return (
        <div>
            <NavLink to={PATH.FRIENDS}>go to friends</NavLink>
        </div>
    );
};

export default Profile;