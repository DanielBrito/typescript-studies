import React, { useRef, useImperativeHandle } from "react";

import Form, { FormRef } from "./Form";

const App: React.FC = () => {
  const formRef = useRef<FormRef>(null);

  function handleSubmit() {
    formRef.current?.submit();
  }

  return <Form ref={formRef} />;
};

export default App;
