import React from 'react';
import { ListGroup } from 'react-bootstrap';

const FileList = ({ files }) => {
    return (
        <ListGroup>
            {files.map(file =>
                <ListGroup.Item key={file.name} > file: {file.name}</ListGroup.Item>)
            }
        </ListGroup >
    );
}

export default FileList;    