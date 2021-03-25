import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function BootstrapModal() {
    const [show, setShow] = useState(false);
    
    return (
        <>
            <Modal show={show} >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    )
}
