import React, { Component } from "react";
import FormBuilder from "../c_form/FormBuilder";
import { Input,DatePicker } from "antd";

const formMeta = {
  colon: true,
  columns: 1,
  elements: [
    { key: "userName", label: "用户名", widget: Input },
    { key: "password", label: "密码", widget: Input, type: "password" },
    { key: "birthday", label: "生日", widget: DatePicker }
  ]
}
export default class Step2 extends Component {
  componentDidMount() {
    this.props.form.setFieldsValue(this.props.allValues);
  }
  render() {
    return (
      <div>
        <FormBuilder meta={formMeta} form={this.props.form} />
      </div>
    )
  }
}