const TemplateExpressions = () => {
    const name ="Patrick";
    const data = {
      age:29,
      job: "programador",
      numero1:52,
      numero2:65,
    };
    
  return (
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Idade: {data.age}</p>
        <p>Trabalho:{data.job}</p>
        <p>Soma de 2 números: {data.numero1 + data.numero2}</p>
    </div>
  )
}

export default TemplateExpressions