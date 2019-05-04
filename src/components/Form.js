import React, { PureComponent } from "react";
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
    event.preventDefault();
    const form = event.target;
    const elmsList = form.elements;
    console.log(typeof elmsList);
    if (elmsList && elmsList.length) {
      Object.values(elmsList).forEach((elm, idx) => {
        console.log(elm.value);
      });
    }
  };

  handleChanges = event => {
    const elm = event.target;
    this.setState({ [elm.name]: elm.value });
  };

  render() {
    return (
      <FormElm onSubmit={this.handleSubmit}>
        <NameGroup handleChanges={this.handleChanges} elmInfo={this.state} />
        <AddressGroup handleChanges={this.handleChanges} elmInfo={this.state} />
        <StateGroup handleChanges={this.handleChanges} elmInfo={this.state} />
        <EmailGroup handleChanges={this.handleChanges} elmInfo={this.state} />
        <PhoneGroup handleChanges={this.handleChanges} elmInfo={this.state} />
        <Submit />
      </FormElm>
    );
  }
}

export default Form;
