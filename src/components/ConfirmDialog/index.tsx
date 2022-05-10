import { ButtonProps, Dialog } from "@mui/material";
import { ReactElement, useState,cloneElement } from "react";
import './index.scss'
type ConfirmDialogPropsType = {
  openInitial: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
  title: string;
  message: string;
  triggerButton:ReactElement<ButtonProps>
};
export const ConfirmDialog = ({
  openInitial,
  onCancel,
  onConfirm,
  title,
  message,
  triggerButton
}: ConfirmDialogPropsType) => {

    const [dialogOpened,setDialogOpened] = useState(openInitial||false)
    const ClonedTriggerButton = cloneElement(triggerButton,{
        onClick:()=>{
            setDialogOpened(true);
        }}
    )
  return (
      <span>
      {ClonedTriggerButton}
    <Dialog
    open={dialogOpened}
    onClose={() => {
      setDialogOpened(false);
    }}
    className="confirm-dialog"
  >
    <h3 className="dialog-title">{title}</h3>
    <p>{message}</p>
    <div className="dialog-actions">
      <button onClick={()=>{
          onConfirm!();
          setDialogOpened(false)
      }}>Yes</button>
      <button 
       onClick={()=>{
        onCancel!();
        setDialogOpened(false)
    }}>No</button>
    </div>
  </Dialog>
  </span>
  );
};
