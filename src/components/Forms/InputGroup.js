import React, { Component } from 'react';
import { validateInput } from '../../utils/ValidateForm';

class InputGroup extends Component {

   onBlurValidate(e) {
      validateInput(e);
   }

   render() {
      return (
         <div id={ `formGroup${ this.props.dataName }` } className="form-group has-feedback">
            <label htmlFor={ this.props.id } className="control-label">{ this.props.nameInput }</label>
            { this.props.disabled === "true" ?
                  <input type={ this.props.type } id={ this.props.id } name={ this.props.name } data-name={ this.props.dataName } className="form-control" data-confirm={ this.props.dataPassConfirm } data-pass-confirm={ this.props.passConfirm } data-required={ this.props.dataRequired } placeholder={ this.props.placeholder } defaultValue={ this.props.value } onBlur={ this.onBlurValidate.bind(this) } disabled />
               :
                  <input type={ this.props.type } id={ this.props.id } name={ this.props.name } data-name={ this.props.dataName } className="form-control" data-confirm={ this.props.dataPassConfirm } data-pass-confirm={ this.props.passConfirm } data-required={ this.props.dataRequired } placeholder={ this.props.placeholder } defaultValue={ this.props.value } onBlur={ this.onBlurValidate.bind(this) } />
            }
            <span id={ `ok${ this.props.dataName }` } className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true" style={{ display: "none" }}></span>
            <span id={ `error${ this.props.dataName }` } className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true" style={{ display: "none" }}></span>
         </div>
      );
   }
}

export default InputGroup;