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
        nombre: "Ajax",
        logo: "img/Ajax_Amsterdam.png"
      },{
        nombre: "Benfica",
        logo: "img/SL_Benfica_logo.png"
      },{
        nombre: "Porto",
        logo: "img/FC_Porto.png"
      },{
        nombre: "Napoli",
        logo: "img/SSC_Napoli.png"
      },{
        nombre: "AS Roma",
        logo: "img/AS_Roma_logo_(2017).png"
      },{
        nombre: "Boca Juniors",
        logo: "img/boca.png"
      },{
        nombre: "River Plate",
        logo: "img/Escudo_del_C_A_River_Plate.png"
      },{
        nombre: "Atletico Nacional",
        logo: "img/Escudo_de_Atlético_Nacional.png"
      },{
        nombre: "Millonarios",
        logo: "img/Escudo_de_Millonarios_temporada_2022.png"
      },{
        nombre: "America de Cali",
        logo: "img/América-de-Cali-Escudo.png"
      },{
        nombre: "Santa fe",
        logo: "img/Escudo_de_Independiente_Santa_Fe.png"
      },{
        nombre: "Athletic Bilbao",
        logo: "img/Club_Athletic_Bilbao_logo.png"
      },{
        nombre: "Valencia",
        logo: "img/valencia.png"
      },{
        nombre: "Sevilla",
        logo: "img/sevilla-fc-logo-0D80FA88A5-seeklogo.png"
      },{
        nombre: "Real Betis",
        logo: "img/Real_betis_logo.png"
      },{
        nombre: "Villarreal",
        logo: "img/villareal.png"
      },{
        nombre: "Real Sociedad",
        logo: "img/real_sociedad.png"
      },{
        nombre: "Leicester City",
        logo: "img/Leicester_City_crest.png"
      },{
        nombre: "Everton",
        logo: "img/everton.png"
      },{
        nombre: "Wolverhampton",
        logo: "img/Wolverhampton_Wanderers.png"
      },{
        nombre: "West Ham United",
        logo: "img/West_Ham_United_FC.png"
      },{
        nombre: "Leeds United",
        logo: "img/leeds_united.png"
      },{
        nombre: "Lazio",
        logo: "img/Lazio.png"
      },{
        nombre: "Napoli",
        logo: "img/Napoli.png"
      },{
        nombre: "Fiorentina",
        logo: "img/Fiorentina.png"
      },{
        nombre: "Leipzig",
        logo: "img/Leipzing.png"
      },{
        nombre: "Atalanta",
        logo: "img/Atalanta.png"
      },{
        nombre: "Monaco",
        logo: "img/Monaco.png"
      },{
        nombre: "Newcastle",
        logo: "img/Newcastle_United_Logo.png"
      },{
        nombre: "Brighton",
        logo: "img/Brighton.png"
      },{
        nombre: "Aston Villa",
        logo: "img/Aston_villa.png"
      },{
        nombre: "Olympique Marseille",
        logo: "img/Olympique_Marseille.png"
      },{
        nombre: "Lyon",
        logo: "img/OL.png"
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
  