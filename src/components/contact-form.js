import React from 'react'
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints'
import { DisplayFields } from 'react-form-with-constraints-tools'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

const Label = styled.label`
  display: block;
  flex: none;
  margin-right: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  width: 12rem;
`

const Input = styled.input`
  border-style: ridge;
  border-width: 1px;
  display: inline-block;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  width: 24rem;
  vertical-align: middle;
`
const Textarea = styled.textarea`
  border-style: ridge;
  border-width: 1px;
  display: inline-block;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  width: 24rem;
  vertical-align: middle;
`

const Button =styled.button`
  color: black;
  border: 1px ridge black;
  background-color: white;
  margin-right: 1rem;
  padding: 0.5rem 2rem;
  text-decoration: none;
  transition:  0.2s linear;
  -webkit-transition:  0.2s linear;
  -moz-transition:  0.2s linear;
  &:hover {
    color: white;
    border: 1px ridge white;
    background-color: black;
    transition:  0.2s linear;
    -webkit-transition:  0.2s linear;
    -moz-transition:  0.2s linear;
  }
`

class ContactForm extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        email: '',
        disabled: true,
        message: '',
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleMessageChange = this.handleMessageChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange (e: React.ChangeEvent<HTMLInputElement>) {
      let form = FormWithConstraints
      this.setState({ email: e.target.value })
      this.form.validateFields(e.currentTarget)
      this.setState({ disabled: !this.form.isValid()})
    }
  
    handleMessageChange (e: React.ChangeEvent<HTMLInputElement>) {
      let form = FormWithConstraints
      this.setState({ message: e.target.value })
    }
  
    handleSubmit (e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error))
  
      e.preventDefault()
      const email = this.state.email
      const message = this.state.message
      this.setState({
        email: '',
        disabled: true,
        message: ''
      })
    }
  
    render () {
      return (
        <FormWithConstraints
            ref={(formWithConstraints: any) => this.form = formWithConstraints}
            noValidate
            name='contact'
            method='post'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
        >
            <Input
                type='hidden'
                name='form-name'
                value='contact'
            />
            <Flex direction='row' wrap>
              <Label htmlFor='email'>Email:</Label>
              <Input
                  className='required email'
                  id='email'
                  name='email'
                  onChange={this.handleChange}
                  placeholder='your favourite email'
                  required
                  type='email'
                  value={this.state.email}
              />
            </Flex>
            <Flex direction='row' wrap>
              <Label htmlFor="text">Your message:</Label>
              <Textarea
                  className='required text'
                  id='text'
                  name='text'
                  onChange={this.handleMessageChange}
                  placeholder='your message'
                  required
                  rows={8}
                  type='text'
                  value={this.state.message}
              />
            </Flex>
            <Flex direction='row' justify='flex-end' wrap>
              <Button
                  children='SEND YOUR MESSAGE'
                  disabled={this.state.disabled}
                  onClick={this.handleSubmit}
              />
            </Flex>
            <FieldFeedbacks for='email'>
                <FieldFeedback when='typeMismatch'>
                    <p>Invalid email address.</p>
                </FieldFeedback>
            </FieldFeedbacks>
        </FormWithConstraints>
      )
    }
}

export default ContactForm
