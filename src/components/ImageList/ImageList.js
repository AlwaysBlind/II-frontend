import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CustomAccordion from './CustomAccordion';

function ImageList({ images }) {
    const imageList = (images) => {
        const grouped = groupBy(images, 'classification_label')
        const keys = Object.keys(grouped)
        const il = keys.map(key => <CustomAccordion images={grouped[key]} name={key} key={key} />);
        return <ListGroup> {il} </ListGroup>
    }

    const groupBy = (objectArray, property) => {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    return (
        <div>
            {imageList(images)}
        </div>
    );
}

export default ImageList;