let salario = [
    {
      valor: 10, 
      horas: 160
    }, 
    { 
      valor: 30, 
      horas: 200 
    },
    {
      valor: 15,
      horas: 180
    }
    
  ];
  let imposto = 27;
  salario.forEach((salario, index, array) => { 
    console.log(`Employer ${index+1} : seu salario será de ${salario.valor*salario.horas-imposto} `)
    });