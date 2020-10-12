import React from 'react'
import './Gnb.css';

function Gnb() {
    return (
        <ul>
            <li >HOME</li>
            <li >
                BRAND
                <div className="hidden">
                    <a href="/introduction">브랜드 소개</a>
                    <a href="/features">브랜드 특징</a>
                </div>
            </li>
        </ul>
    )
}


export default Gnb
