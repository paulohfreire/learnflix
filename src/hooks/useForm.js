import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
 
  const setValue = (chave, valor) => {
    // chave: nome, descricao...ETC
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }
  
  const handleChange = (infosDoEvento) => {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
  
  const clearForm = () => {
    setValues(initialValues);
  }
  
  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;