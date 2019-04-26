import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import {
  NameGroup,
  AddressGroup,
  StateGroup,
  PhoneGroup,
  Submit,
  EmailGroup
} from "./FormElements";

const FormElm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

class Form extends PureComponent {
  state = {};

  handleSubmit = event => {
    const form = event.srcElement;
    const elmsList = form.elements;
    if (elmsList && elmsList.length) {
      elmsList.forEach((elm, idx) => {
        console.log(elm.name, elm.value);
      });
    }
  };

  handleChanges = event => {
    const elm = event.target;

    this.setState({ [elm.name]: elm.value });
    console.log(elm.name, this.state[elm.name]);
  };

  render() {
    return (
      <FormElm action="javascript: handleSubmit(this);">
        <NameGroup handleChanges={this.handleChanges} />
        <AddressGroup handleChanges={this.handleChanges} />
        <StateGroup handleChanges={this.handleChanges} />
        <EmailGroup handleChanges={this.handleChanges} />
        <PhoneGroup handleChanges={this.handleChanges} />
        <Submit />
      </FormElm>
    );
  }
}

export default Form;
