import React, { useState, useEffect} from "react";

function CompAPIRequest() {
    const [data, setData] = useState("");

    const getData = async () => {
        try {
            const resp = await fetch("https://api.chucknorris.io/jokes/random");
            const json = await resp.json();
            setData(json);
        } catch (err: any) {
            setData(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default CompAPIRequest;
