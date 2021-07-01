import React, { useState, useEffect } from 'react';

const WineList = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("/.netlify/functions/get-vinos", {
            mode: 'no-cors'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            // <ul>
            //   {items.map(item => (
            //     <li key={item.id}>
            //       {item.name} {item.price}
            //     </li>
            //   ))}
            // </ul>
            <div>{JSON.stringify(items)}</div>
        );
    }
}

export default WineList
