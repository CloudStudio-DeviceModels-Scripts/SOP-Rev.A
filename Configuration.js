function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // Esta función le permite indicar la configuración inicial de los endpoints
  // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
  // la experiencia del usuario final, ya que permite a la plataforma crear 
  // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
  // crea el dispositivo.

  // En el código siguiente, se crean dos endpoints. El primero es un sensor de 
  // temperatura, mientras que el segundo es un sensor de dióxido de carbono.

  endpoints.addEndpoint("Sep1_Corriente", "Corriente Separadora 1", endpointType.currentSensor);
  endpoints.addEndpoint("Sep2_Corriente", "Corriente Separadora 2", endpointType.currentSensor);
  endpoints.addEndpoint("Sep3_Corriente", "Corriente Separadora 3", endpointType.currentSensor);
  var e=endpoints.addEndpoint("Sep1_Pres_Eflu", "Presion de Efluente Separadora 1", endpointType.GenericSensor);
  e.variableTypeId = 1021;
  var e=endpoints.addEndpoint("Sep2_Pres_Eflu", "Presion de Efluente Separadora 2", endpointType.GenericSensor);
  e.variableTypeId = 1021;
  var e=endpoints.addEndpoint("Sep3_Pres_Eflu", "Presion de Efluente Separadora 3", endpointType.GenericSensor);
  e.variableTypeId = 1021;
  var e=endpoints.addEndpoint("Sep1_RPM", "RPM Separadora 1", endpointType.GenericSensor);
  e.variableTypeId = 1027;
  var e=endpoints.addEndpoint("Sep2_RPM", "RPM Separadora 2", endpointType.GenericSensor);
  e.variableTypeId = 1027;
  var e=endpoints.addEndpoint("Sep3_RPM", "RPM Separadora 3", endpointType.GenericSensor);
  e.variableTypeId = 1027;
  var e=endpoints.addEndpoint("Sep1_Q_Agua", "Caudal Agua Separadora 1", endpointType.GenericSensor);
  e.variableTypeId = 1013;
  var e=endpoints.addEndpoint("Sep2_Q_Agua", "Caudal Agua Separadora 2", endpointType.GenericSensor);
  e.variableTypeId = 1013;
  var e=endpoints.addEndpoint("Sep1_Q_Prod", "Caudal Producto Separadora 1", endpointType.GenericSensor);
  e.variableTypeId = 1013;
  var e=endpoints.addEndpoint("Sep2_Q_Prod", "Caudal Producto Separadora 2", endpointType.GenericSensor);
  e.variableTypeId = 1013;
  var e=endpoints.addEndpoint("Sep2_Vibracion", "Vibracion Separadora 2", endpointType.GenericSensor);
  e.variableTypeId = 1028;
  var e=endpoints.addEndpoint("Sep3_Vibracion", "Vibracion Separadora 3", endpointType.GenericSensor);
  e.variableTypeId = 1028;


}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
   rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
