import * as React from 'react';

const Button = ({ text, onClick, }) => {
    return (React.createElement("button", { type: "button", onClick: onClick }, text));
};

export { Button };
