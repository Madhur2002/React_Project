import React from "react";
import classes from "./ErrorModal.module.css"; 
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
    return (
      <div>
            <div className={classes.backdrop} onClick={props.onError} />
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.warning}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onError}>Okay</Button>
          </footer>
        </Card>
      </div>
    );
}

export default ErrorModal;
