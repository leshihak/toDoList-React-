import React from '../../../node_modules/react';
import Modal from '../../../node_modules/react-bootstrap/Modal';
import Button from '../../../node_modules/react-bootstrap/Button';
import Form from '../../../node_modules/react-bootstrap/Form';
import InputGroup from '../../../node_modules/react-bootstrap/InputGroup';
import FormControl from '../../../node_modules/react-bootstrap/FormControl';
import Description from './Description';
import Switch from "react-switch";

export default class AddNewToDo extends React.Component { 
  state = {
    showDescription: false,
    nameToDo: '',
    descriptionToDo: ''
  } 

  toggleChange = () => {
    this.setState({showDescription: !this.state.showDescription});
  }

  handleGetToDo = () => {
    this.props.getToDo(this.state.nameToDo, this.state.showDescription ? this.state.descriptionToDo : null);
    this.props.onButtonClose();
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render () {
    return (
      <div className='addNewToDo'>
        <Modal.Dialog>
          <div className='toDoModalForm'>
            <Modal.Header>
              <Modal.Title>Create a new To Do</Modal.Title>
            </Modal.Header>
  
            <div className='toDoForm'>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-default">Name of To Do:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  onChange={this.handleChange}
                  name='nameToDo'
                  aria-label="Write your To Do..."
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
  
              {this.state.showDescription ? <Description handleChange={this.handleChange} /> : null}

              <div className='switch'>
                <Switch className='toDoFormCheck' name="description" checked={this.state.showDescription} onChange={this.toggleChange}/> 
                <div>Show description</div>
              </div>
            </div>
            
  
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.onButtonClose}>Close</Button>
              <Button variant="primary" onClick={this.handleGetToDo}>Save To Do</Button>
            </Modal.Footer>
          </div>
          
        </Modal.Dialog>
  
        <div className='opacityDiv'></div>
      </div>
    )
  }
}