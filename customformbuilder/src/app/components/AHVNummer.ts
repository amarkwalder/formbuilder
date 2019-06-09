/**
 * This file shows how to create a custom component and register that within an Angular application.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
const TextFieldComponent = require('formiojs/components/textfield/TextField').default;
const Components = require('formiojs/components/Components').default


/**
 * Create a new CheckMatrixComponent "class" using ES5 class inheritance notation.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 *
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
export default class AHVNummerComponent extends TextFieldComponent {

  /**
   * Define what the default JSON schema for this component is. We will derive from the BaseComponent
   * schema and provide our overrides to that.
   * @return {*}
   */
  static schema() {
    return TextFieldComponent.schema({
      "label": "AHV Nummer",
      "inputMask": "999.9999.9999.99"
    });
  }

  /**
   * Register this component to the Form Builder by providing the "builderInfo" object.
   */
  static get builderInfo() {
    return {
      title: 'AHV Nummer',
      group: 'basic',
      icon: 'fa fa-terminal',
      weight: 70,
      documentation: 'http://help.form.io/userguide/#textfield',
      schema: AHVNummerComponent.schema()
    };
  }

}

// Use the table component edit form.
AHVNummerComponent.editForm = TextFieldComponent.editForm;

// Register the component to the Formio.Components registry.
Components.addComponent('ahvnummer', AHVNummerComponent);
