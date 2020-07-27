import React from "react";

export default function (props) {
    const {} = props;
    const [count, setCount] = React.useState(0);
    const climb = () => {
        setCount(count + 1);
    };
    return (
        <div onClick={() => climb()}>
            <h1 style={{ color: "black" }}>{count}</h1>
        </div>
    );
}
