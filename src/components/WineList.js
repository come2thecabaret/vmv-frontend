import React, { useState, useEffect } from 'react';
import WineCard from "../components/WineCard"
import useVinoshipperApi from '../hooks/useVinoshipperApi';

const WineList = (props) => {
    const [wines, setWines] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    let sortedWines = wines.sort(function (a, b) {
        if (a.type === 'WHITE' && b.type === 'RED') {
            return -1;
        }
        if (a.type === 'RED' && b.type === 'WHITE') {
            return 1;
        }
        if (a.type === 'RED' && b.type === 'RED' && a.name > b.name) {
            return 1;
        }
        if (a.type === 'RED' && b.type === 'RED' && a.name < b.name) {
            return -1;
        }
        if (a.type === 'WHITE' && b.type === 'WHITE' && a.name > b.name) {
            return 1;
        }
        if (a.type === 'WHITE' && b.type === 'WHITE' && a.name < b.name) {
            return -1;
        }
        return 0;
    });
    //get vinoshipper data and load into state
    useEffect(() => {
        const url = "/.netlify/functions/get-vinos";
        //async fetch of Netlify function
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setWines(json.data.wines)
                setIsLoaded(true);
            } catch (error) {
                setIsLoaded(true);
                setError(error);
            }
        };
        fetchData();
        // Note: the empty deps array [] means
        // this useEffect will run once
        // similar to componentDidMount()
    }, []);
    if (error) {
        return (
            <div>We had an error loading our wine selection. Please try refreshing the page. Thank you!</div>
        )
    } else if (!isLoaded) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <>
                <div className="wine-sublist--dominion">
                    <h2 className={'dark'}>Dominion Series</h2>
                    <p className={'text-subheading'}>Fun, unique, and creative blends. The Dominion Series highlights the variety and quality of our grapes.</p>
                    <ul className={'o-flexGrid wine-list--dominion'}>
                        {sortedWines.filter(wine => wine.wineMakerNote === "Dominion").map(item => (
                            <WineCard item={item}></WineCard>
                        ))}
                        {/* {JSON.stringify(wines)} */}
                    </ul>
                </div>
                <div className="wine-sublist--estate">

                    <h2 className={'spaced-top dark'}>Estate Series</h2>
                    <p className={'text-subheading'}>The Estate Series represents the best of <br />Virginia Mountain Vineyards.</p>
                    <ul className={'wine-card__container  wine-list--estate'}>
                        {sortedWines.filter(wine => wine.wineMakerNote === "Estate").map(item => (
                            <WineCard item={item}></WineCard>
                        ))}
                        {/* {JSON.stringify(wines)} */}
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div>placeholder</div>
    )
}
export default WineList

// import React, { useState, useEffect } from 'react';

// const WineList = (props) => {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [vinoData, setVinoData] = useState([]);
//     // Note: the empty deps array [] means
//     // this useEffect will run once
//     // similar to componentDidMount()
//     useEffect(() => {
//         fetch("/.netlify/functions/get-vinos", {
//             mode: 'no-cors'
//         })
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     setIsLoaded(true);
//                     setVinoData(result.data);
//                 },
//                 // Note: it's important to handle errors here
//                 // instead of a catch() block so that we don't swallow
//                 // exceptions from actual bugs in components.
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             )
//     }, [])
//     if (error) {
//         return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//         return <div>Loading...</div>;
//     } else {
//         console.log(vinoData)
//         return (
//             <ul className={'wine-card__container'}>
//                 {vinoData.wines.map(item => (
//                     <li key={item.id}>
//                         <h3 className={'dark'}>{item.name}</h3>
//                         <img src={item.img} alt="item.name" />
//                         <p>{item.description}</p>
//                         <div>{item.bottleSize.ml} ml / {item.abv}% abv</div>
//                     </li>
//                 ))}
//             </ul>
//         );
//     }
// }

// export default WineList
