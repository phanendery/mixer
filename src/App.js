import "./App.css";
import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledForm = styled.form`
  font-size: 20px;
`;

const StyledInput1 = styled.input`
  border: none;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  background: none;
  border-bottom: solid black 2px;
  width: 400px;
  font-size: 25px;
  font-family: "Baloo 2", cursive;
  outline: none;
`;

const StyledInput2 = styled.input`
  border: solid white 0.5px;
  background-color: #fd9cdd;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-size: 20px;
  border-radius: 4px;
  font-family: "Baloo 2", cursive;
  outline: none;
`;

const StyledH1 = styled.h1``;
const StyledH2 = styled.h2``;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div>
          <StyledH1>mixer</StyledH1>
          <StyledH2>perfect way to save your day</StyledH2>
        </div>
        <StyledForm onSubmit={this.handleSubmit}>
          <label>
            What should we call you?
            <StyledInput1
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <Link to="/questions">
            <StyledInput2 type="submit" value="Mix it!" />
          </Link>
        </StyledForm>
      </div>
    );
  }
}
