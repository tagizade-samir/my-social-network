import React from 'react'
import Classes from './DialogList.module.css';
import Dialog from './Dialog/Dialog.jsx';

const DialogList = (props) => {
    return(
        <div className={Classes.dialogList}>
            <Dialog name='Samir' link='dialogs/samirChat'/>
            <Dialog name='Saida' link='dialogs/saidaChat'/>
            <Dialog name='Farida' link='dialogs/faridaChat'/>
            <Dialog name='Eldar' link='dialogs/eldarChat'/>
            <Dialog name='Guney' link='dialogs/guneyChat'/>
            <Dialog name='Izzet' link='dialogs/izzetChat'/>
            <Dialog name='Roza' link='dialogs/rozaChat'/>
        </div>
    )
}

export default DialogList