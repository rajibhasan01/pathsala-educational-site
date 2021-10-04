import { useEffect, useState } from "react";

const useData = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./data2.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return [items, setItems];
}

export default useData;