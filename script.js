function seleccionarEquipo() {
    // Ocultar el botón de "Seleccionar Equipo"
    $("#seleccionarEquipoBtn").prop("disabled", true);
  
    // Mostrar el icono de carga
    $("#loadingIcon").show();
  
    var equipos = [
      {
        nombre: "Real Madrid",
        logo: "img/Real_Madrid.png"
      },{
        nombre: "Manchester United",
        logo: "img/manchester_united.png"
      },{
        nombre: "FC Barcelona",
        logo: "img/FC_Barcelona.png"
      },{
        nombre: "Bayern Munich",
        logo: "img/FC_Bayern.png"
      },{
        nombre: "Liverpool",
        logo: "img/Liverpool_FC.png"
      },{
        nombre: "Juventus",
        logo: "img/Juventus_Logo.png"
      },{
        nombre: "Paris Saint-Germain",
        logo: "img/Paris_Saint-Germain.png"
      },{
        nombre: "Manchester City",
        logo: "img/Manchester_City_FC.png"
      },{
        nombre: "Chelsea",
        logo: "img/Chelsea.png"
      },{
        nombre: "Arsenal",
        logo: "img/Arsenal_FC.png"
      },{
        nombre: "Atletico Madrid",
        logo: "img/Atletico_Madrid_2017.png"
      },{
        nombre: "Tottenham Hotspur",
        logo: "img/Tottenham_Hotspur.png"
      },{
        nombre: "Borussia Dortmund",
        logo: "img/Borussia_Dortmund_logo.png"
      },{
        nombre: "AC Milan",
        logo: "img/Milan.png"
      },{
        nombre: "Inter Milan",
        logo: "img/inter-milan-logo-1.png"
      },{
        nombre: "Napoli",
        logo: "img/SSC_Napoli.png"
      },{
        nombre: "AS Roma",
        logo: "img/AS_Roma_logo_(2017).png"
      },{
        nombre: "Newcastle",
        logo: "img/Newcastle_United_Logo.png"
      }
      // Agrega el resto de los objetos de equipo con sus nombres y logotipos
      // ...
    ];
  
    var equipoSeleccionado = equipos[Math.floor(Math.random() * equipos.length)];
  
    $("#equipoSeleccionado").empty(); // Limpiar el contenido del elemento
  
    setTimeout(function() {
      $("#equipoSeleccionado").text("Equipo seleccionado: " + equipoSeleccionado.nombre);
      $("#logoEquipo").attr("src", equipoSeleccionado.logo);
  
      // Ocultar el icono de carga y mostrar nuevamente el botón de "Seleccionar Equipo"
      $("#loadingIcon").hide();
      $("#seleccionarEquipoBtn").prop("disabled", false);
    }, 2000);
  }
  