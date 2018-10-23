import React, {Component} from "react";
import FormBuilder from "../c_form/FormBuilder";
import { Input,Form } from "antd";

const formMeta = {
  colon: true,
  columns: 1,
  elements: [{ key: "email", label: "Email", widget: Input }]
};

class Step1 extends Component {
  componentDidMount() {
    this.props.form.setFieldsValue(this.props.allValues);
  }
  render() {
    return (
      <div>
        <FormBuilder meta={formMeta} form={this.props.form} />
      </div>
    );
  }
}

export default Step1;