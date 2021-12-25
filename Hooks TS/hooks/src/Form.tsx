import React, { forwardRef, useImperativeHandle } from "react";

interface FormProps {
  initialData?: string;
}

export interface FormRef {
  submit(): void;
}

const Form: React.ForwardRefRenderFunction<FormRef, FormProps> = (
  props,
  ref
) => {
  function submit() {
    alert("User created!");
  }

  useImperativeHandle(ref, () => ({
    submit,
  }));

  return (
    <div>
      <form>
        <label>Nome: </label>
        <input type="text" />
        <label>Sobrenome: </label>
        <input type="text" />
      </form>
    </div>
  );
};

export default forwardRef(Form);
