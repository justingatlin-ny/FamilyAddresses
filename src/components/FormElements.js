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
`;

const NameGroup = ({ handleChanges, elmInfo }) => {
  return (
    <InputContainer>
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="first name"
        value={elmInfo.firstname}
        name="firstname"
      />
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="middle name"
        value={elmInfo.middlename}
        name="middlename"
      />
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="last name"
        value={elmInfo.lastname}
        name="lastname"
      />
    </InputContainer>
  );
};

const AddressGroup = ({ handleChanges, elmInfo }) => {
  return (
    <InputContainer>
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="address 1"
        value={elmInfo.address1}
        name="address1"
      />
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="address 2"
        value={elmInfo.address2}
        name="address2"
      />
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="address 3"
        value={elmInfo.address3}
        name="address3"
      />
    </InputContainer>
  );
};

const StateGroup = ({ handleChanges, elmInfo }) => {
  return (
    <InputContainer>
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="city"
        value={elmInfo.city}
        name="city"
      />
      <Input
        onChange={handleChanges}
        type="text"
        placeholder="state"
        value={elmInfo.state}
        name="state"
      />
      <Input
        onChange={handleChanges}
        type="number"
        placeholder="zip"
        value={elmInfo.zip}
        namce="zip"
      />
    </InputContainer>
  );
};

const PhoneGroup = ({ handleChanges, elmInfo }) => {
  return (
    <InputContainer>
      <Input
        onChange={handleChanges}
        type="number"
        placeholder="mobile phone"
        value={elmInfo.mobilephone}
        name="mobilephone"
      />
      <Input
        onChange={handleChanges}
        type="number"
        placeholder="home phone"
        value={elmInfo.homephone}
        name="homephone"
      />
      <Input
        onChange={handleChanges}
        type="number"
        placeholder="other phone"
        value={elmInfo.otherphone}
        name="otherphone"
      />
    </InputContainer>
  );
};

const EmailGroup = ({ handleChanges, elmInfo }) => {
  return (
    <InputContainer>
      <Input
        onChange={handleChanges}
        type="email"
        placeholder="email"
        value={elmInfo.email1}
        name="email1"
      />
      <Input
        onChange={handleChanges}
        type="email"
        placeholder="alternate email"
        value={elmInfo.email2}
        name="email2"
      />
    </InputContainer>
  );
};

const Submit = ({ handleChanges, elmInfo }) => {
  return (
    <InputContainer>
      <button type="submit" name="submit">
        Submit
      </button>
    </InputContainer>
  );
};

export { NameGroup, AddressGroup, StateGroup, PhoneGroup, EmailGroup, Submit };
