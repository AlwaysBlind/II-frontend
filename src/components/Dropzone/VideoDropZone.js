import React, { useCallback } from 'react'
import './VideoDropZone.css'
import { useDropzone } from 'react-dropzone'

function VideoDropZone({ setFiles }) {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        setFiles(acceptedFiles)
    }, [setFiles])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onDrop, accept: "video/*", minSize: 0, maxSize: 5242880 })

    return (
        <section className='container'>
            <div {...getRootProps({ className: 'videodropzone back' })}>
                <input {...getInputProps()} />
                <i className="fas fa-file-video" style={{ fontSize: 100 }}></i>
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files
                        Max 5 Mb
                        </p>
                }
            </div>
        </section>
    )
}

export default VideoDropZone;