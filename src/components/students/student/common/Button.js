import React from 'react';

const Button = (props) => {
    return (
        <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false" style={{
                'margin': '10px',
                'border': '1px solid black',
                'background': '#fff',
                'fontWeight': '700',
                'fontSize': '14px',
            }}>
                {props.name}
            </button>
        </div>
    );
};

export default Button;