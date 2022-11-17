import React from 'react';

import s from './LoadingSpinner.module.scss'

const LoadingSpinner = () => {
    return (
        <div className={s.spinner}>
            <div className={s.spinnerOverlay}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        margin: "auto",
                        background: "transparent"
                    }}
                    width="200px"
                    height="200px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    display="block"
                    className={s.spinnerImage}
                >
                    <circle cx={30} cy={50} fill="#f7bf50" r={20}>
                        <animate
                            attributeName="cx"
                            repeatCount="indefinite"
                            dur="1s"
                            keyTimes="0;0.5;1"
                            values="30;70;30"
                            begin="-0.5s"
                        />
                    </circle>
                    <circle cx={70} cy={50} r={20}>
                        <animate
                            attributeName="cx"
                            repeatCount="indefinite"
                            dur="1s"
                            keyTimes="0;0.5;1"
                            values="30;70;30"
                            begin="0s"
                        />
                    </circle>
                    <circle cx={30} cy={50} fill="#f7bf50" r={20}>
                        <animate
                            attributeName="cx"
                            repeatCount="indefinite"
                            dur="1s"
                            keyTimes="0;0.5;1"
                            values="30;70;30"
                            begin="-0.5s"
                        />
                        <animate
                            attributeName="fill-opacity"
                            values="0;0;1;1"
                            calcMode="discrete"
                            keyTimes="0;0.499;0.5;1"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>
            </div>
        </div>
    );
};

export default LoadingSpinner;