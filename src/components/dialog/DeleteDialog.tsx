import  { memo, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const DeleteDialog = (props) => {
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => props.setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={(id) => props.handleDeleteRecipe(id)} autoFocus />
        </div>
    );


    return (
        <div className="card flex justify-content-center">
            <Dialog header="Header" visible={props.visible} style={{ width: '50vw' }} onHide={() => props.setVisible(false)} footer={footerContent}>
                <p className="m-0">
                   are you sure u want to delete this recipe
                </p>
            </Dialog>
        </div>
    )
}
export default memo(DeleteDialog) 