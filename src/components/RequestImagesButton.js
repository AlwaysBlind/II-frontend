import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

const RequestImagesButton = ({ files, setImages }) => {
    const [isLoading, setLoading] = useState(false);
    const apiUrl = 'https://neverblind.pythonanywhere.com/'

    const classifyVid = (files) => {
        let formData = new FormData()
        setLoading(true)
        formData.append('videofile', files[0], files[0].name)
        formData.append('title', files[0].name)
        axios.post(`${apiUrl}indexedvideos/`,
            formData,
            {
                header: {
                    'accept': 'application/json',
                    'content-type': 'multipart/form-data'
                }
            })
            .then(resp => {
                getImages(resp)
                    .then(
                        imgresp => {
                            console.log(imgresp.data);
                            setImages(imgresp.data)
                        }
                    )
            })
            .catch(err => console.log(err))
            .then(() => { setLoading(false) })
    }

    const getImages = (obj) => {

        return axios.get(`${apiUrl}indexedvideos/${obj.data.id}/images`, {
            headers: {
                'accept': 'application/json'
            }
        });
    }

    return (
        <div>
            {
                files.length > 0 && !isLoading &&
                <Button variant='secondary' size='lg' className='mt-3' onClick={() => classifyVid(files)}> Index Video </Button>
            }
            {
                isLoading &&
                <Spinner animation='border' role='status' className='mt-10'>
                    <span className='sr-only'> Loading... </span>
                </Spinner>
            }
        </div>
    );
}

export default RequestImagesButton;
