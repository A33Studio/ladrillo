import * as React from 'react';

function Button({ text, onClick }) {
    return (React.createElement("button", { type: "button", onClick: onClick }, text));
}

export { Button };
