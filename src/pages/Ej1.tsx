import React, { useCallback, useState } from "react";

type ButtonProps = {
    onClick: () => void;
    text: string;
};

const Button = ({ onClick, text }: ButtonProps) => {
    console.log("boton render");
    return <button onClick={onClick}>{text}</button>;
};

const ButtonMemo = React.memo(Button);

export default function Ej1() {
    const [state, setState] = useState(1);
    console.log("Render app");

    const onClick = useCallback(() => {
        console.log("Render click");
        setState(state + 1);
    }, [state]);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            State updated: {state}
            <br />
            <br />
            <ButtonMemo onClick={onClick} text={`click to update state`} />
            <br />
        </div>
    );
}
