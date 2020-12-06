import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

function TestCaseButton({ files, setFiles }) {
    const fetchLocalFile = () => {
        const fetchUrl = process.env.NODE_ENV === "production" ? `https://alwaysblind.github.io/II-frontend/mug-test.mp4` : `${process.env.PUBLIC_URL}/mug-test.mp4`
        return fetch(fetchUrl, {
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
        <Card className='col-2 mt-3' style={{ height: '100%' }}>
            <Card.Body >
                <Player src={process.env.PUBLIC_URL + "/mug-test.mp4"}></Player>
                <Button className='mt-2' variant="dark" onClick={fetchLocalFile}>Or test this video</Button>
            </Card.Body>
        </Card>
    );

}

export default TestCaseButton;