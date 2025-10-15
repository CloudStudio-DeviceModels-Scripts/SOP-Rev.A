function parseUplink(device, payload)
{
	 function ExtractTagData(tagValuesObject){
        v = null;
        q = null;
        ts = null;
        return {
            v: (tagValuesObject["v"]),//.toFixed(2)),
            q: tagValuesObject["q"],
            ts: new Date(tagValuesObject["ts"]).toUTCString()
        }
    }

    var N3uronData = payload.asJsonObject();
	
    env.log(N3uronData);
 
   //Recorremos cada "tag" del array del json y procesamos lo que nos interesan
   for (let tag in N3uronData) {
  
    switch (tag){
        case "/PLC5/Sep1_Corriente":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep1_Corriente");
                etv1.updateCurrentSensorStatus(ValueData.v.toFixed(2), ValueData.ts);  
            });
            break;
        
        case "/PLC5/Sep2_Corriente":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep2_Corriente");
                etv1.updateCurrentSensorStatus(ValueData.v.toFixed(2), ValueData.ts);  
            });
            break;
        
        case "/PLC5/Sep3_Corriente":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep3_Corriente");
                etv1.updateCurrentSensorStatus(ValueData.v.toFixed(2), ValueData.ts);  
            });
            break;
            
        case "/PLC5/Sep1_Pres_Eflu":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep1_Pres_Eflu");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch(err) {
  
                }    
            });
            break;
        
        case "/PLC5/Sep2_Pres_Eflu":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep2_Pres_Eflu");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch(err) {
  
                }    
            });
            break;

        case "/PLC5/Sep3_Pres_Eflu":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep3_Pres_Eflu");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch(err) {
  
                }      
            });
            break;

        case "/PLC5/Sep1_RPM":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep1_RPM");
                etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);  
            });
            break;

        case "/PLC5/Sep2_RPM":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep2_RPM");
                etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);  
            });
            break;

        case "/PLC5/Sep3_RPM":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep3_RPM");
                etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);  
            });
            break;

        case "/PLC5/Sep1_Q_Agua":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep1_Q_Agua");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch(err) {
  
                }   
            });
            break;

        case "/PLC5/Sep2_Q_Agua":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep2_Q_Agua");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch(err) {
  
                }     
            });
            break;

        case "/PLC5/Sep1_Q_Prod":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep1_Q_Prod");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch(err) {
  
                }     
            });
            break;

        case "/PLC5/Sep2_Q_Prod":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep2_Q_Prod");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch(err) {
  
                }     
            });
            break;

        case "/PLC5/Sep2_Vibracion":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep2_Vibracion");
                etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);  
            });
            break;

        case "/PLC5/Sep3_Vibracion":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep3_Vibracion");
                etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);  
            });
            break;
        
        case "/PLC5/CF5_Estado":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Estado");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
           
        case "/PLC5/Sep1_Horas":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep1_Horas");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

             case "/PLC5/Sep2_Horas":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep2_Horas");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

             case "/PLC5/Sep3_Horas":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Sep3_Horas");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

             case "/PLC5/Filtro_Horas":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("Filtro_Horas");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

        case "/PLC5/CF5_TIC_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_TIC_SP");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC5/CF5_TIC_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_TIC_PV");
                try{
                    etv1.updateTemperatureSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;


            case "/PLC5/CF5_Aire_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Aire_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                    //FT_CF5=ValueData.v.toFixed(2);
                    //FT_Total_TS=ValueData.ts;
                }catch{};
                
            });
            break; 

            case "/PLC5/CF5_Aire_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Aire_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;  
            
            case "/PLC5/CF5_Amon_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Amon_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;  

            case "/PLC5/CF5_Amon_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Amon_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 

            case "/PLC5/CF5_Fos_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Fosf_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break; 

             case "/PLC5/CF5_Fos_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Fosf_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC5/CF5_Mosto_SP":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Mosto_SP");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;

            case "/PLC5/CF5_Mosto_PV":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                var etv1 = device.endpoints.byAddress("CF5_Mosto_PV");
                try{
                    etv1.updateGenericSensorStatus(ValueData.v.toFixed(2), ValueData.ts);
                }catch{};
            });
            break;
        }
   }

}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// Esta función permite convertir un comando de la plataforma en un
	// payload que pueda enviarse al dispositivo.
	// Más información en https://wiki.cloud.studio/page/200

	// Los parámetros de esta función, son:
	// - device: objeto representando el dispositivo al cual se enviará el comando.
	// - endpoint: objeto endpoint representando el endpoint al que se enviará el 
	//   comando. Puede ser null si el comando se envía al dispositivo, y no a 
	//   un endpoint individual dentro del dispositivo.
	// - command: objeto que contiene el comando que se debe enviar. Más
	//   información en https://wiki.cloud.studio/page/1195.

	// Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
	// endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
	// Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
	// de operación.

/*
	 payload.port = 25; 	 	 // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // El comando 30 indica "encender" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // El comando 31 indica "apagar" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // El comando 32 indica "alternar" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}