import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        warning: "Invalid input",
        message: "Please Enter valid Name and Age values (non-empty)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        warning: "Invalid Age",
        message: "Please Enter a valid Age (>0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setAge("");
  };

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          warning={error.warning}
          message={error.message}
          onError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Enter your name</label>
          <input
            type="text"
            id="username"
            value={enteredUserName}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
