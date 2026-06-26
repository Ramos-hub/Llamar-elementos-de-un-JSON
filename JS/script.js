let profesores = [
    {
      nombre: "Emerson",
      apellido: "González",
      grado: "1o Grupo 1",
      edad: 200,
      modulosImpartidos: [
        "Programación I",
        "Diseño de Interfaces"
      ]
    },
    {
      nombre: "William",
      apellido: "Andrade",
      grado: "1o Grupo 2",
      edad: 200,
      modulosImpartidos: [
        "Videojuegos",
        "Desarrollo Web"
      ]
    },
    {
      nombre: "Josue",
      apellido: "Guinea",
      grado: "2o Grupo 2",
      edad: 200,
      modulosImpartidos: [
        "Inteligencia Artificial",
        "Seguridad Informática"
 
      ]
    },
    {
      nombre: "Ricardo",
      apellido: "de Paz",
      grado: "2o Grupo 1",
      edad: 200,
      modulosImpartidos: [
        "Redes",
        "CSS"
      ]
    },
    {
      nombre: "Bryan",
      apellido: "Miranda",
      grado: "3o Grupo 1",
      edad: 200,
      modulosImpartidos: [
        "Programación Móvil",
        "Cloud Computing"
      ]
    },
    {
      nombre: "Wilfredo",
      apellido: "Granados",
      grado: "3o Grupo 2",
      edad: 200,
      modulosImpartidos: [
        "Sistemas Operativos",
        "Estructura de Datos"
      ]
    }
  ];

  /* Llamamos al TBODY para imprimir los datos de la tabla */
  const tablaProfesores = document.getElementById("tablaProfesores");

  //Llamamos a los elementos del formulario
  const txtNombre = document.getElementById(txtNombre);
  const txtApellido = document.getElementById(txtApellido);
  const txtGrado = document.getElementById(txtGrado);
  const txtEdad = document.getElementById(txtEdad);
  const txtModulo1 = document.getElementById(txtModulo1);
  const txtModulo2 = document.getElementById(txtModulo2);
  const btnAgregar = document.getElementById(btnAgregar);

  /* Funcion para mostrar a los docentes en la tabla */
  function mostrarProfesores(){
    tablaProfesores.innerHTML = ""; //Se vacia la tabla

    //Se creara una fila por cada Profesor en el JSON
    profesores.forEach((profesor)=>{
        tablaProfesores.innerHTML += 
        `<tr>
            <td>${profesor.nombre}</td>
            <td>${profesor.apellido}</td>
            <td>${profesor.edad}</td>
            <td>${profesor.grado}</td>
            <td>${profesor.modulosImpartidos[0]}</td>
            <td>${profesor.modulosImpartidos[1]}</td>
        </tr>`
    });
  }

  //Llamar a la funcion
  mostrarProfesores();