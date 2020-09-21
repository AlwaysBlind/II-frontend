import React from 'react';
import { Card, Image } from "react-bootstrap";

function ResultCard({ img }) {
    return (
        <Card>
            <Image className="card" src={img.imagefile} />
        </Card>
    );
}

export default ResultCard;