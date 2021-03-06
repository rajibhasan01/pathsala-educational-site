import { useEffect, useState } from "react";

const useData1 = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return [courses, setCourses];
}

export default useData1;