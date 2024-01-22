import { useEffect, useState } from "react";


const useItems = () => {
    const [item, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            });
    })
    return [item, loading]
};

export default useItems;