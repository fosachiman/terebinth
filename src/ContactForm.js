import React, { Component } from 'react';
import FormContainer from './form-components/FormContainer';
import formUtils from './form-components/formUtils';
import RadioButton from './form-components/RadioButton';
import Loader from './form-components/Loader';
import StandardInput from './form-components/StandardInput';
import Textarea from './form-components/Textarea';
import SubmitButton from './form-components/SubmitButton';
import ErrorHandler from './form-components/ErrorHandler';
import LabelContainer from './form-components/LabelContainer';
import DescribeButton from './DescribeButton';

class ContactForm extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        console.log(this.props.page)
        return (
            <FormContainer
            render={(formState, formFunctions) => (
              <form
                onSubmit={e =>
                  formFunctions.handleSubmit(
                    e,
                    this.postURL
                  )
                }
              >
                <div className="form-field-flex">
                    <LabelContainer className="form-field">
                    <div style={{display: 'none'}}>Full Name</div>
                    <StandardInput
                        name="full-name"
                        className="full-name-input"
                        placeholder="Full Name"
                        formFunctions={formFunctions}
                        formState={formState}
                    />
                    </LabelContainer>
                    <ErrorHandler
                    name="full-name"
                    formState={formState}
                    errorHandler={formUtils.validateNotBlank}
                    formFunctions={formFunctions}
                    >
                    Please enter your name
                    </ErrorHandler>
                    <LabelContainer className="form-field">
                    <div style={{display: 'none'}}>Email</div>
                    <StandardInput
                        name="email"
                        className="email-input"
                        placeholder="Email"
                        formFunctions={formFunctions}
                        formState={formState}
                    />
                    </LabelContainer>
                    <ErrorHandler
                    name="email"
                    formState={formState}
                    errorHandler={formUtils.validateEmailFormat}
                    formFunctions={formFunctions}
                    >
                    Please enter a valid email address
                    </ErrorHandler>
                </div>
                <p className="description-radio-header">What title best describes you?</p>
                <div className="description-flex-container">
                    <LabelContainer className={`describe-button${formState.values['person-description'] === this.props.page['filter1'] ? '-active' : ''}`}>
                    <RadioButton
                        name="person-description"
                        formFunctions={formFunctions}
                        formState={formState}
                        value={this.props.page['filter1']}
                        radioSelected={<DescribeButton value={this.props.page['filter1']} formState={formState}/>}
                        radioUnselected={<DescribeButton value={this.props.page['filter1']} formState={formState}/>}
                    />
                    </LabelContainer>
                    <LabelContainer className={`describe-button${formState.values['person-description'] === this.props.page['filter2'] ? '-active' : ''}`}>
                    <RadioButton
                        name="person-description"
                        formFunctions={formFunctions}
                        formState={formState}
                        value={this.props.page['filter2']}
                        radioSelected={<DescribeButton value={this.props.page['filter2']} formState={formState}/>}
                        radioUnselected={<DescribeButton value={this.props.page['filter2']} formState={formState}/>}
                    />
                    </LabelContainer>
                    <LabelContainer className={`describe-button${formState.values['person-description'] === this.props.page['filter3'] ? '-active' : ''}`}>
                    <RadioButton
                        name="person-description"
                        formFunctions={formFunctions}
                        formState={formState}
                        value={this.props.page['filter3']}
                        radioSelected={<DescribeButton value={this.props.page['filter3']} formState={formState}/>}
                        radioUnselected={<DescribeButton value={this.props.page['filter3']} formState={formState}/>}
                    />
                    </LabelContainer>
                    <LabelContainer className={`describe-button${formState.values['person-description'] === this.props.page['filter4'] ? '-active' : ''}`}>
                    <RadioButton
                        name="person-description"
                        formFunctions={formFunctions}
                        formState={formState}
                        value={this.props.page['filter4']}
                        radioSelected={<DescribeButton value={this.props.page['filter4']} formState={formState}/>}
                        radioUnselected={<DescribeButton value={this.props.page['filter4']} formState={formState}/>}
                    />
                    </LabelContainer>
                    <LabelContainer className={`describe-button${formState.values['person-description'] === this.props.page['filter5'] ? '-active' : ''}`}>
                    <RadioButton
                        name="person-description"
                        formFunctions={formFunctions}
                        formState={formState}
                        value={this.props.page['filter5']}
                        radioSelected={<DescribeButton value={this.props.page['filter5']} formState={formState}/>}
                        radioUnselected={<DescribeButton value={this.props.page['filter5']} formState={formState}/>}
                    />
                    </LabelContainer>
                </div>
                <ErrorHandler
                  name="person-description"
                  formState={formState}
                  errorHandler={formUtils.validateNotBlank}
                  formFunctions={formFunctions}
                >
                    Please select which best describes you.
                </ErrorHandler>
                <LabelContainer>
                  <div style={{display: 'none'}}>Full Name</div>
                  <Textarea
                    name="message"
                    className="message-input"
                    placeholder="Enter your message here"
                    formFunctions={formFunctions}
                    formState={formState}
                  />
                </LabelContainer>
                <ErrorHandler
                  name="message"
                  formState={formState}
                  errorHandler={formUtils.validateNotBlank}
                  formFunctions={formFunctions}
                >
                    Please enter a message.
                </ErrorHandler>
                {formState.posting ? (
                  <Loader className="loader" fillColor="#BBB" />
                ) : (
                  <SubmitButton className="form-submit-button" buttonText="Send Message" />
                )}
              </form>
            )}
          />        
        )
    }
}
 
export default ContactForm;