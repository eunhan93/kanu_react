import React from 'react';
import Gnb from './Sections/Gnb';

function Navbar() {
    return (
        <div style={style.container}>
            <div style={style.inner}>
                <a href='/'>KANU</a>
                <Gnb />
            </div>
        </div>
    )
}

const style = {
    container : {
        width : "100%",
        height : "80px",
        position : 'fixed',
        top : '0',
        left : '0'
    },
    inner : {
        maxWidth : '1440px',
        height : "100%",
        margin : '0 auto',
        display : 'flex',
        justifyContent : 'space-between'
    }
}

export default Navbar
