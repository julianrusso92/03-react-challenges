import React, { useMemo, useEffect, ReactNode, useState } from "react";

type Data = { some: string };

const Child = ({ data }: { data: Data }) => {
    useEffect(() => {
        console.log("re-render");
    });
    return <div>I'm a child! {data.some}</div>;
};

const Parent = ({ children }: { children: (data: Data) => ReactNode }) => {
    const [counter, setCounter] = useState(1);

    // assume it's coming from REST or GraphQL endpoint here
    const data = { some: "data" };

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>
                Click me! {counter}
            </button>
            {children(data)}
        </>
    );
};

const ParentMemo = React.memo(Parent);

export default function Ej3() {
      const memoChild = useMemo(() => (data: Data) => <Child data={data} />, []);

    return <ParentMemo>{memoChild}</ParentMemo>;
}
