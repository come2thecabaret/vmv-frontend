import React, { useState, useEffect } from 'react';
const useVinoshipperApi = () => {
    const [data, setData] = useState();
    const [url, setUrl] = useState(
        '/.netlify/functions/get-vinos',
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let fetchData = async () => {
            console.log(url)
            let response = await fetch(url);
            let result = await response.json();
            console.log(result);
            setData(result);
        }
    });
    return data;
}
export default useVinoshipperApi;


// const useHackerNewsApi = () => {
//     const [data, setData] = useState({ hits: [] });
//     const [url, setUrl] = useState(
//         '/.netlify/functions/get-vinos',
//     );
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             setIsError(false);
//             setIsLoading(true);

//             try {
//                 const result = await axios(url);

//                 setData(result.data);
//             } catch (error) {
//                 setIsError(true);
//             }

//             setIsLoading(false);
//         };

//         fetchData();
//     }, [url]);

//     return [{ data, isLoading, isError }, setUrl];
// }