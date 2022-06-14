import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import s from './Drawer.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {PATH} from "../routes/RoutesComponent";
import {useAppSelector} from "../../b2-bll/store";


export default function SwipeableTemporaryDrawer() {
    const navigate = useNavigate()
    const userID = useAppSelector(state=>state.auth.userID)
    const isLogged = useAppSelector(state => state.auth.isLogin)
    const [state, setState] = React.useState(false);
    const closeDrawer = () => setState(false)
    const openDrawer = () => setState(true)

    const list = () => (
        <Box
            className={s.box}
            sx={{width: 250, backgroundColor: 'red'}}
            role="presentation"
            onClick={closeDrawer}
            onKeyDown={openDrawer}
        >


            <Divider/>

        </Box>
    );

    return (
        <div>
            <div className={s.navigateContainer}>
                <Button variant={'contained'} onClick={openDrawer}>menu</Button>
            </div>

            <SwipeableDrawer
                anchor={'left'}
                open={state}
                onClose={closeDrawer}
                onOpen={openDrawer}
                sx={{'& .MuiPaper-root': {backgroundColor: '#02a7b7'}}}
            >
                {list()}

                <NavLink onClick={closeDrawer} className={s.link} to={'/'}>Home</NavLink>
                {isLogged && <div>
                    <div className={s.link}>
                        <NavLink onClick={closeDrawer} className={s.link} to={PATH.PROFILE + `/${userID}`}>Profile</NavLink>
                    </div>
                    <div className={s.link}>
                        <NavLink onClick={closeDrawer} className={s.link} to={PATH.FRIENDS}>Friends</NavLink>
                    </div>
                </div>}

                <NavLink onClick={closeDrawer} className={s.link} to={PATH.NEWS}>News</NavLink>


            </SwipeableDrawer>

        </div>
    );
}