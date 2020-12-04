import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupAddon,

} from "reactstrap";


class FormInfo extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render () {
     const {name, surname, salary, onChange, onSubmit}= this.props
        return (
          <div className="form">
            <Form onSubmit={onSubmit}>
              <FormText color="muted">Enter your detail</FormText>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  value={name}
                  onChange={onChange}
                  name="name"
                  placeholder="Enter name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="surname">Surname</Label>
                <Input
                  type="text"
                  value={surname}
                  onChange={onChange}
                  name="surname"
                  placeholder="Enter surname"
                  required
                />
              </FormGroup>


              <InputGroup>
                
                <InputGroupAddon addonType="prepend">R</InputGroupAddon>
                <Input
                  type="number"
                  value={salary}
                  onChange={onChange}
                  name='salary'
                  placeholder="Amount"
                  min={0}
                  max={1000000}
                  step="1"
                  required/>
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
              
              <br />
              <Button outline color="primary" onSubmit={onSubmit}>
                Submit
              </Button>
              <br />
            </Form>
          </div>
        );
    }
}



export default FormInfo;