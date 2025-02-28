import { Injectable } from '@angular/core';
import { OportunidadesApi } from '../models/oportunidades-api.model';

@Injectable({
  providedIn: 'root'
})
export class OportunidadesMaperService {

  constructor() { }
   mapearOportunidad(objeto: any): OportunidadesApi {

    const objetoMapeado: OportunidadesApi = {
      Balance_CDP: 0,                        // Moneda, valor por defecto 0
      Balance_Pick_Up: 0,                    // Moneda, valor por defecto 0
      Calificaciones: '',                     // Lista de selección, valor por defecto vacío
      CAT_Anual: 0,                          // Porcentaje, valor por defecto 0
      Co_Propietario: '',                     // Buscar, valor por defecto vacío
      contract_bridge_id: '',                 // Línea única (Único), valor por defecto vacío
      previous_contracts: '',                // Búsqueda de selección múltiple, valor por defecto vacío
      club: '',                               // Línea única, valor por defecto vacío
      Cr_ditos_Totales: 0,                    // Número, valor por defecto 0
      Cross_Reference: '',                    // Lista de selección, valor por defecto vacío
      Cuota_Anual_USD: 0,                     // Decimal, valor por defecto 0
      Equity: 0,                             // Moneda, valor por defecto 0
      Es_un_club_de_Semanas: false,           // Booleano, valor por defecto false
      Estado_Civil: '',                       // Lista de selección, valor por defecto vacío
      Tag: '',                                // Línea única, valor por defecto vacío
      Stage: '',                              // Lista de selección, valor por defecto vacío
      Closing_Date: undefined,                     // Fecha, valor por defecto null
      Fecha_de_Primer_Pago: undefined,             // Fecha, valor por defecto null
      Sale_Date: undefined,                        // Fecha, valor por defecto null
      Fecha_Primer_Uso: undefined,                 // Fecha, valor por defecto null
      Fecha_Ultimo_Pago: undefined,                // Fecha, valor por defecto null
      Finanzas_Aceptada: '',                  // Buscar, valor por defecto vacío
      Campaign_Source: '',                    // Buscar, valor por defecto vacío
      Lead_Source: '',                        // Lista de selección, valor por defecto vacío
      Hook: false,                             // Booleano, valor por defecto false
      Amount: 0,                             // Moneda, valor por defecto 0
      Ingresos_Mensuales: '',                 // Lista de selección, valor por defecto vacío
      membership_type: '',                    // Línea única, valor por defecto vacío
      Currency: '',                           // Lista de selección, valor por defecto vacío
      Morosidad_AR_USD: 0,                    // Decimal, valor por defecto 0
      Morosidad_Down_Payment: 0,              // Moneda, valor por defecto 0
      Morosidad_Folios_USD: 0,                // Decimal, valor por defecto 0
      Morosidad_Morgage: 0,                   // Moneda, valor por defecto 0
      Reason_For_Loss__s: '',                 // Lista de selección, valor por defecto vacío
      Contact_Name: '',                       // Buscar, valor por defecto vacío
      Deal_Name: '',                          // Línea única, valor por defecto vacío
      Nota_de_Cancelacion: '',                // Multilínea (pequeño), valor por defecto vacío
      Oportunidad_upgraded: '',               // Buscar, valor por defecto vacío
      Probability: 0,                         // Número, valor por defecto 0
      Sala: '',                               // Buscar, valor por defecto vacío
      Sale_type: '',                          // Línea única, valor por defecto vacío
      Exchange_Rate: 0,                       // Decimal, valor por defecto 0
      Type: '',                               // Lista de selección, valor por defecto vacío
      ContractID: ''                          // Línea única, valor por defecto vacío
  };
      for (let clave in objeto) {
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
            objetoMapeado["Co_Propietario"] = objeto[clave];
            break;
          case "contract_bridge_id":
            objetoMapeado["contract_bridge_id"] = objeto[clave];
            break;
          case "Contratos Anteriores (Ajuste)":
            objetoMapeado["previous_contracts"] = objeto[clave];
            break;
          case "Club":
            objetoMapeado["club"] = objeto[clave];
            break;
          case "Créditos Totales":
            objetoMapeado["Cr_ditos_Totales"] = objeto[clave];
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
          case "¿Es un club de Semanas?":
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
            objetoMapeado["Finanzas_Aceptada"] = objeto[clave];
            break;
          case "Fuente de Campaña":
            objetoMapeado["Campaign_Source"] = objeto[clave];
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
            objetoMapeado["Contact_Name"] = objeto[clave];
            break;
          case "Nombre de Oportunidad":
            objetoMapeado["Deal_Name"] = objeto[clave];
            break;
          case "Nota de Cancelacion":
            objetoMapeado["Nota_de_Cancelacion"] = objeto[clave];
            break;
          case "Oportunidad upgraded":
            objetoMapeado["Oportunidad_upgraded"] = objeto[clave];
            break;
          case "Probabilidad (%)":
            objetoMapeado["Probability"] = objeto[clave];
            break;
          case "Sala":
            objetoMapeado["Sala"] = objeto[clave];
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
        
        }

      }
      const objetoFinal: OportunidadesApi = objetoMapeado as OportunidadesApi;
      return objetoFinal;
    }
  }
