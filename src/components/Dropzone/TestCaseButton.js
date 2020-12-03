import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

function TestCaseButton({ files, setFiles }) {
    const fetchLocalFile = () => {
        return fetch(`https://alwaysblind.github.io/II-frontend/mug-test.mp4`, {
            headers: {
                'Content-Type': 'video/mp4'
            }
        })
            .then(response => response.blob())
            .then(blob => {
                console.log(blob)
                setFiles([new File([blob], "ClassicFile")])
            })
    }

    useEffect(() => {
        console.log(files)
        return () => {
        }
    }, [files]);
    return (
        <Card className='col-1 mt-5' style={{ height: '50%' }}>
            <Card.Img variant='top' src={process.env.PUBLIC_URL + "/testmoviepic.png"} style={{ marginTop: '1rem' }} />
            <Card.Body >
                <Button variant="primary" onClick={fetchLocalFile}>Or test this video</Button>
            </Card.Body>
        </Card>
    );

}

export default TestCaseButton;