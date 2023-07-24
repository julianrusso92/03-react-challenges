import { useState, useMemo, useCallback } from "react";

const wait = (ms: number) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) now = Date.now();
};

const wrapperFunction = (cb: () => void) => {
    // that function does something expensive
    wait(300);
    return cb;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const SomeComponent = (props: any) => {
    return null;
};

export default function Ej2() {
    const [state, setState] = useState(1);

    const data = useMemo(() =>
        wrapperFunction(() => {
            return [1, 2, 3];
        }),
        []
    );

    const onSubmit = useCallback(()=>
        wrapperFunction(() => {
            // do something here
        }),
        []
    );


    return (
        <div className="App">
            <h1>useMemo vs useCallback example</h1>
            Click the button to re-render
            <button onClick={() => setState(state + 1)}>click me {state}</button>
            <SomeComponent data={data} onSubmit={onSubmit} />
        </div>
    );
}
