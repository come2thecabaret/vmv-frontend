import React, { useState, useEffect } from 'react';

const WineList = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [vinoData, setVinoData] = useState([]);
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
                    setVinoData(result.data);
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
        console.log(vinoData)
        return (
            <ul className={'wine-card__container'}>
                {vinoData.wines.map(item => (
                    <li key={item.id}>
                        <h3 className={'dark'}>{item.name}</h3>
                        <img src={item.img} alt="item.name" />
                        <p>{item.description}</p>
                        <div>{item.bottleSize.ml} ml / {item.abv}% abv</div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default WineList
