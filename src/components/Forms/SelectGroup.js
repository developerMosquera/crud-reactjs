import React, { Component } from 'react';
import { validateInput } from '../../utils/ValidateForm';

class SelectGroup extends Component {

   onChangeValidate(e) {
      validateInput(e);
   }

   render() {

      return (
         <div id={ `formGroup${ this.props.dataName }` } className="form-group has-feedback">
            <label htmlFor={ this.props.id } className="control-label">{ this.props.nameInput }</label>
            <select id={ this.props.id } name={ this.props.name } data-name={ this.props.dataName } data-required={ this.props.dataRequired } className="form-control" onChange={ this.onChangeValidate.bind(this) }>
               <option></option>
               {
                  this.props.jsonData.map(function(listConceptos, index) {
                     return (
                        <option key={ index } value={ listConceptos.CONCEPTO }>{ listConceptos.DESCRIPCION }</option>
                     )
                  })
               }
            </select>
         </div>
      );
   }
}

export default SelectGroup;