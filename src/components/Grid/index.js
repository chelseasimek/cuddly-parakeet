import React, { useState, useEffect } from 'react';
import Card from '../Card';
import ListRow from '../ListRow';

const Grid = ({query, filter, displayType, options}) => {
    const [ data, setData ] = useState([]);

    useEffect(()=> {
        fetch(process.env.PUBLIC_URL + 'data/plants.json')
        .then(response => response.json())
        .then(json => {
            const { plants } = json;
            setData(plants);
        });
    }, []);

    const getResults = (filter) => {
        if (data) {
            console.log(data);
            if (filter) {
                return <div>Loading...</div>
            }
            return data.map(plant => (
                displayType === 'Grid' ? 
                <Card { ...plant } /> :
                <ListRow { ...plant } />
            ));
        }
        return <div>Loading...</div>
    }

    return (getResults(filter))
}

export default Grid;