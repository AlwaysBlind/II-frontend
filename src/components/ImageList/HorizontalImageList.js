import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ResultCard from './ResultCard';
import './HorizontalImageList.css'

const HorizontalImageList = ({ images }) => {
    const items = images.map(img =>
        <ListGroup.Item key={img.id}>
            <ResultCard className="card" img={img} />
        </ListGroup.Item >)

    return (
        <ListGroup horizontal className='justify-content-md-center listgroup'>
            {items}
        </ListGroup>
    );
}

export default HorizontalImageList;