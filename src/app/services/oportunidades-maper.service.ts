import { Injectable } from '@angular/core';
import { OportunidadesApi } from '../models/oportunidades-api.model';
import { Oportunidades } from '../models/oportunidades.model';
import { ConsumeService } from './consume.service';
// import { ObjConId } from '../../models/obj-con-id.model';


@Injectable({
  providedIn: 'root'
})
export class OportunidadesMaperService {

  constructor(private consume:ConsumeService) { }
  
  mapearOportunidad(objeto: Oportunidades): OportunidadesApi {
    
    const objetoMapeado: OportunidadesApi = {

        Stage: "Iniciado",                          // Lista de selección
        Closing_Date: "2025-01-01"                 // Fecha
  };
  
  for (let clave in objeto) {
    
    if (objeto.hasOwnProperty(clave)) {
      // Verificamos si el valor es válido
      const valor = objeto[clave as keyof Oportunidades];
      if (valor === undefined || valor === null || valor === '' || (typeof valor === 'number' && valor === 0)) {
        continue; // No mapeamos la propiedad si es vacía o 0
      }
      if (typeof valor === 'string') {
        if (valor.toLowerCase() === 'true') {
          objeto[clave as keyof Oportunidades] = true as any;  // Forzamos la conversión a booleano
        } else if (valor.toLowerCase() === 'false') {
          objeto[clave as keyof Oportunidades] = false as any; // Forzamos la conversión a booleano
        }
      }
    switch (clave) {
    
      case "Balance CDP":
        objetoMapeado["Balance_CDP"] = objeto[clave];
        break;
      case "Balance Pick Up":
        objetoMapeado["Balance_Pick_Up"] = objeto[clave];
        break;
      case "Calificaciones":
        objetoMapeado["Calificaciones"] = objeto[clave];
        break;
      case "CAT Anual":
        objetoMapeado["CAT_Anual"] = objeto[clave];
        break;
      case "Co-Propietario":
        // objetoMapeado["Co_Propietario"] = objeto[clave];
        break;
      case "contract_bridge_id":
        objetoMapeado["contract_bridge_id"] = objeto[clave];
        break;
      case "Contratos Anteriores (Ajuste)":
        // objetoMapeado["previous_contracts"] = objeto[clave];
        break;
      case "Club":
        objetoMapeado["club"] = objeto[clave];
        break;
      case "Créditos Totales":
        objetoMapeado["Cr_ditos_Totales"] = objeto[clave] !== undefined ? parseFloat(objeto[clave] as string) : 0;
        break;
      case "Cross Reference":
        objetoMapeado["Cross_Reference"] = objeto[clave];
        break;
      case "Cuota Anual (USD)":
        objetoMapeado["Cuota_Anual_USD"] = objeto[clave];
        break;
      case "Equity":
        objetoMapeado["Equity"] = objeto[clave];
        break;
      case "Es un club de Semanas?":
        objetoMapeado["Es_un_club_de_Semanas"] = objeto[clave];
        break;
      case "Estado Civil":
        objetoMapeado["Estado_Civil"] = objeto[clave];
        break;
      case "Etiqueta":
        objetoMapeado["Tag"] = objeto[clave];
        break;
      case "Fase":
        objetoMapeado["Stage"] = objeto[clave];
        break;
      case "Fecha de cierre":
        objetoMapeado["Closing_Date"] = objeto[clave];
        break;
      case "Fecha de primera Mensualidad":
        objetoMapeado["Fecha_de_Primer_Pago"] = objeto[clave];
        break;
      case "Fecha de Venta":
        objetoMapeado["Sale_Date"] = objeto[clave];
        break;
      case "Fecha Primer Uso":
        objetoMapeado["Fecha_Primer_Uso"] = objeto[clave];
        break;
      case "Fecha Ultimo Pago":
        objetoMapeado["Fecha_Ultimo_Pago"] = objeto[clave];
        break;
      case "Finanzas Aceptada":
        // objetoMapeado["Finanzas_Aceptada"] = objeto[clave];
        break;
      case "Fuente de Campaña":
        // objetoMapeado["Campaign_Source"] = objeto[clave];
        break;
      case "Fuente de Prospecto":
        objetoMapeado["Lead_Source"] = objeto[clave];
        break;
      case "Hook":
        objetoMapeado["Hook"] = objeto[clave];
        break;
      case "Importe":
        objetoMapeado["Amount"] = objeto[clave];
        break;
      case "Ingresos Mensuales":
        objetoMapeado["Ingresos_Mensuales"] = objeto[clave];
        break;
      case "Membresía del Club":
        objetoMapeado["membership_type"] = objeto[clave];
        break;
      case "Moneda":
        objetoMapeado["Currency"] = objeto[clave];
        break;
      case "Morosidad AR (USD)":
        objetoMapeado["Morosidad_AR_USD"] = objeto[clave];
        break;
      case "Morosidad Down Payment":
        objetoMapeado["Morosidad_Down_Payment"] = objeto[clave];
        break;
      case "Morosidad Folios (USD)":
        objetoMapeado["Morosidad_Folios_USD"] = objeto[clave];
        break;
      case "Morosidad Morgage":
        objetoMapeado["Morosidad_Morgage"] = objeto[clave];
        break;
      case "Motivo de la pérdida":
        objetoMapeado["Reason_For_Loss__s"] = objeto[clave];
        break;
      case "Nombre de Contacto":
        // objetoMapeado["Contact_Name"] = objeto[clave];
        break;
      case "Nombre de Oportunidad":
        objetoMapeado["Deal_Name"] = objeto[clave];
        break;
      case "Nota de Cancelacion":
        objetoMapeado["Nota_de_Cancelacion"] = objeto[clave];
        break;
      case "Oportunidad upgraded":
        // objetoMapeado["Oportunidad_upgraded"] = objeto[clave];
        break;
      case "Probabilidad (%)":
        objetoMapeado["Probability"] = objeto[clave];
        break;
      case "Sala":
        // objetoMapeado["Sala"] = objeto[clave];
        break;
      case "Sale_type":
        objetoMapeado["Sale_type"] = objeto[clave];
        break;
      case "Tasa de cambio":
        objetoMapeado["Exchange_Rate"] = objeto[clave];
        break;
      case "Tipo":
        objetoMapeado["Type"] = objeto[clave];
        break;
      case "ContractID2":
        objetoMapeado["ContractID"] = objeto[clave];
        break;
      default:
        // Para campos que no tienen un caso definido, se pueden agregar aquí si es necesario
        break;
    }
  }}
  
  const objetoFinal: OportunidadesApi = objetoMapeado as OportunidadesApi;
  return objetoFinal;
}
async zohoIDsUpdateDeal(objeto: any): Promise<OportunidadesApi> {
    const objetoMapeado:OportunidadesApi = {
          "Stage":"Nuevo",
          "Closing_Date":"2000-01-01",
          "Deal_Name": "1-xxx"
          
                }; // Objeto donde mapeamos los valores obligatorios

    // Creamos un array de promesas para esperar a todas las respuestas de las peticiones
    const peticiones: Promise<void>[] = [];

    // Iteramos sobre las propiedades de "objeto"
    for (let clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
            const valor = objeto[clave];
        
            if (valor === undefined || valor === null) {
                continue; // No mapeamos la propiedad si no tiene valor
            }

            let criteriaBase = '';
            let module = '';

            switch (clave) {
              
              // Nombre de Contacto / Co-Propietario / Fuente de Campaña / Sala / Finanza Aceptada / Oportunidad Upgraded / Simulador Upgraded
              case "ObjNombre de Contacto":
                module = 'Contacts';
                let trimmedText: string = valor;  // Suponiendo que "valor" tiene el texto original
                trimmedText = trimmedText.substring(2);  // Asignamos el resultado de substring(2) 
                
                criteriaBase = `(CoOwnprosID:equals:${trimmedText})`;
    
                try {
                    const response: any = await this.consume.fetchData(criteriaBase, module)
                        .pipe(
                            // catchError((error) => {
                            //     console.error('Error en la petición de Coowner:', error);
                            //     return of(null);
                            // })
                        ).toPromise();
    
                    if (response?.data?.length > 0) {
                        let zohoid = response.data[0].id;
                        objetoMapeado["Contact_Name"] = { "id": zohoid };
                        console.log('ID obtenido de Coowner:', zohoid);
                    } else {
                        console.error('No se encontró un Coowner con el ID proporcionado', response);
                    }
                } catch (error) {
                    // console.error('Error procesando la petición de Coowner:', error);
                }
                break;
              
              
              case "contract_bridge_id":
                  objetoMapeado["contract_bridge_id"] = objeto[clave];
                  break;
                
        
                // Otros casos pueden ser agregados aquí según sea necesario

            }
        }
    }

    // Esperamos que todas las peticiones asíncronas se completen
    await Promise.all(peticiones);

    // Devolvemos el objeto mapeado
    return objetoMapeado;
}

}
