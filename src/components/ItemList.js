import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ItemTable from "../components/Table";

function AddButton(props) {
    const { OnClick } = props;
    return (
      <Button variant="contained" color="primary" onClick={() => OnClick()}>
        Dodaj
      </Button>
    );
  }
  
  function LogOutButton(props) {
    const { onLogoutClick } = props;
    return (
      <Button variant="contained" color="primary" onClick={() => onLogoutClick()}>
        Wyloguj
      </Button>
    );
  }

export const ItemList = props => {
    const { rows, OnClick, onLogoutClick, newitem, onInputChange } = props;

    return (
      <div>
        <ItemTable newrows={rows} />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="newelement"
          label="Dodaj nowy element"
          name="newelement"
          autoComplete="email"
          autoFocus
          value={newitem}
          onChange={event => onInputChange(event)}
        />
        <AddButton OnClick={() => OnClick()} />
        <LogOutButton onLogoutClick={onLogoutClick} />
      </div>
    );
  };