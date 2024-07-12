import { useState, useEffect} from "react";

export default function CompApiRequest() {
    const [data, setData] = useState("CARGANDO...");

    const getData = async () => {
        try {
            const resp = await fetch("https://api.chucknorris.io/jokes/random");
            const json = await resp.json();
            setData(json.value);
        } catch (err: any) {
            setData(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return <div className="carta bg-light text-dark">
        <p>"{data}"</p>
        </div>
}

