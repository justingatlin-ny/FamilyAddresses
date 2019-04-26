import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #cccccc;
  text-transform: capitalize;
  box-sizing: border-box;
`;

const InputContainer = styled.div`
  margin-bottom: 5px;
  padding: 5px;
  // max-width: 500px;
`;

const elmValObj = {};

const NameGroup = ({ handleChanges }) => {
  return (
    <InputContainer>
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="first name"
        value=""
        name="firstname"
      />
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="middle name"
        value=""
        name="middlename"
      />
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="last name"
        value=""
        name="lastname"
      />
    </InputContainer>
  );
};

const AddressGroup = ({ handleChanges }) => {
  return (
    <InputContainer>
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="address 1"
        value=""
        name="address1"
      />
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="address 2"
        value=""
        name="address2"
      />
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="address 3"
        value=""
        name="address3"
      />
    </InputContainer>
  );
};

const StateGroup = ({ handleChanges }) => {
  return (
    <InputContainer>
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="city"
        value=""
        name="city"
      />
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="state"
        value=""
        name="state"
      />
      <Input
        onChange={handleChanges}
        type="number"
        placeholder="zip"
        value=""
        namce="zip"
      />
    </InputContainer>
  );
};

const PhoneGroup = ({ handleChanges }) => {
  return (
    <InputContainer>
      <Input
        onChange={handleChanges}
        type="number"
        placeholder="mobile phone"
        value=""
        name="mobilephone"
      />
      <Input
        onChange={handleChanges}
        type="number"
        placeholder="home phone"
        value=""
        name="homephone"
      />
      <Input
        onChange={handleChanges}
        type="number"
        placeholder="other phone"
        value=""
        name="otherphone"
      />
    </InputContainer>
  );
};

const EmailGroup = ({ handleChanges }) => {
  return (
    <InputContainer>
      <Input
        onChange={handleChanges}
        type="email"
        placeholder="email"
        value=""
        name="email1"
      />
      <Input
        onChange={handleChanges}
        type="email"
        placeholder="alternate email"
        value=""
        name="email2"
      />
    </InputContainer>
  );
};

const Submit = ({ handleChanges }) => {
  return (
    <InputContainer>
      <button type="submit" name="submit">
        Submit
      </button>
    </InputContainer>
  );
};

export { NameGroup, AddressGroup, StateGroup, PhoneGroup, EmailGroup, Submit };
