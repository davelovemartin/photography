import React from 'react'
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints'
import { DisplayFields } from 'react-form-with-constraints-tools'

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
            <input
                type='hidden'
                name='form-name'
                value='contact'
            />
            <label htmlFor='email'>Email:</label>
            <input
                className='required email'
                id='email'
                name='email'
                onChange={this.handleChange}
                placeholder='your favourite email'
                required
                type='email'
                value={this.state.email}
            />
            <label htmlFor="text">Your message:</label>
            <input
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
            <button
                children='SEND YOUR MESSAGE'
                disabled={this.state.disabled}
                onClick={this.handleSubmit}
            />
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
