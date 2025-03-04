import { Injectable } from '@angular/core';
import { ProspectosApi } from '../models/prospectos-api.model';

@Injectable({
  providedIn: 'root'
})
export class ProspectosMaperService {

  constructor() { }
    mapearContactos(objeto:any) {
    let objetoMapeado = {
      "API_Name": "",
      "Digitos": 0,
      "Apellido_Materno": "",
      "Apellido_Paterno": "",
      "Rating": "",
      "Calle": "",
      "Campa_a_Principal": "",
      "Casa_Ofertas": false,
      "City": "",
      "Fuente_Aeropuertos": "",
      "PostalCode": "",
      "Colonia": "",
      "coprospect_bridge_id": "",
      "Email": "",
      "Secondary_Email": "",
      "CP_Apellido_Materno": "",
      "CP_Apellido": "",
      "CP_Correo_Electronico": "",
      "CP_Edad": 0,
      "CP_Empresa_donde_labora": "",
      "CP_Fecha_de_Nacimiento": "",
      "CP_Movil": "",
      "CP_Nombre": "",
      "CP_Puesto": "",
      "CP_Telefono": "",
      "Empresa_donde_labora": "",
      "Estado_civil": "",
      "Lead_Status": "",
      "State": "",
      "Fecha_de_Nacimiento": "",
      "Folio": "",
      "Forma_de_Pago": "",
      "Lead_Source": "",
      "Hook": false,
      "Importe_Cobrado": 0.0,
      "Ingresos_Mensuales": "",
      "Lenguaje_de_Contacto": "",
      "Locacion1": "",
      "Currency": "",
      "Mobile": "",
      "Municipio": "",
      "Pa_s_de_Nacimiento": "",
      "First_Name": "",
      "No_Exterior": "",
      "No_Interior": "",
      "Numero_Autorizaci_n": "",
      "Numero_de_Noches": 0,
      "Numero_de_Prospecto": 0,
      "Numero_de_prospecto_netcenter": 0,
      "Designation": "",
      "Country": "",
      "prospect_bridge_id": "",
      "Sala_Referido": "",
      "Sexo": "",
      "Exchange_Rate": 0.0,
      "Phone": "",
      "Terminal": "",
      "Vigencia": 0
    
    };
  
    for (let clave in objeto) {
      switch (clave) {
        case "4 Digitos":
          objetoMapeado["Digitos"] = objeto[clave];
          break;
        case "Apellido Materno":
          objetoMapeado["Apellido_Materno"] = objeto[clave];
          break;
        case "Apellido Paterno":
          objetoMapeado["Apellido_Paterno"] = objeto[clave];
          break;
        case "Calificacion":
          objetoMapeado["Rating"] = objeto[clave];
          break;
        case "Calle":
          objetoMapeado["Calle"] = objeto[clave];
          break;
        case "Campaña Principal":
          objetoMapeado["Campa_a_Principal"] = objeto[clave];
          break;
        case "Caza Ofertas":
          objetoMapeado["Casa_Ofertas"] = objeto[clave];
          break;
        case "Ciudad":
          objetoMapeado["City"] = objeto[clave];
          break;
        case "Ciudad Locación":
          objetoMapeado["Fuente_Aeropuertos"] = objeto[clave];
          break;
        case "Código postal":
          objetoMapeado["PostalCode"] = objeto[clave];
          break;
        case "Colonia":
          objetoMapeado["Colonia"] = objeto[clave];
          break;
        case "coprospect_bridge_id":
          objetoMapeado["coprospect_bridge_id"] = objeto[clave];
          break;
        case "Correo electrónico":
          objetoMapeado["Email"] = objeto[clave];
          break;
        case "Correo electrónico secundario":
          objetoMapeado["Secondary_Email"] = objeto[clave];
          break;
        case "CP Apellido Materno":
          objetoMapeado["CP_Apellido_Materno"] = objeto[clave];
          break;
        case "CP Apellido Paterno":
          objetoMapeado["CP_Apellido"] = objeto[clave];
          break;
        case "CP Correo Electronico":
          objetoMapeado["CP_Correo_Electronico"] = objeto[clave];
          break;
        case "CP Edad":
          objetoMapeado["CP_Edad"] = objeto[clave];
          break;
        case "CP Empresa donde labora":
          objetoMapeado["CP_Empresa_donde_labora"] = objeto[clave];
          break;
        case "CP Fecha de Nacimiento":
          objetoMapeado["CP_Fecha_de_Nacimiento"] = objeto[clave];
          break;
        case "CP Movil":
          objetoMapeado["CP_Movil"] = objeto[clave];
          break;
        case "CP Nombre":
          objetoMapeado["CP_Nombre"] = objeto[clave];
          break;
        case "CP Ocupación":
        case "CP Título":
          objetoMapeado["CP_Puesto"] = objeto[clave];
          break;
        case "CP Telefono":
          objetoMapeado["CP_Telefono"] = objeto[clave];
          break;
        case "Empresa donde labora":
          objetoMapeado["Empresa_donde_labora"] = objeto[clave];
          break;
        case "Estado civil":
          objetoMapeado["Estado_civil"] = objeto[clave];
          break;
        case "Estado de prospecto":
          objetoMapeado["Lead_Status"] = objeto[clave];
          break;
        case "Estado/Provincia":
          objetoMapeado["State"] = objeto[clave];
          break;
        case "Fecha de Nacimiento":
          objetoMapeado["Fecha_de_Nacimiento"] = objeto[clave];
          break;
        case "Folio":
          objetoMapeado["Folio"] = objeto[clave];
          break;
        case "Forma de Pago":
          objetoMapeado["Forma_de_Pago"] = objeto[clave];
          break;
        case "Fuente de Prospecto":
          objetoMapeado["Lead_Source"] = objeto[clave];
          break;
        case "Hook":
          objetoMapeado["Hook"] = objeto[clave];
          break;
        case "Importe Cobrado":
          objetoMapeado["Importe_Cobrado"] = objeto[clave];
          break;
        case "Ingresos Mensuales":
          objetoMapeado["Ingresos_Mensuales"] = objeto[clave];
          break;
        case "Lenguaje de Contacto":
          objetoMapeado["Lenguaje_de_Contacto"] = objeto[clave];
          break;
        case "Locacion":
          objetoMapeado["Locacion1"] = objeto[clave];
          break;
        case "Moneda":
          objetoMapeado["Currency"] = objeto[clave];
          break;
        case "Movil":
          objetoMapeado["Mobile"] = objeto[clave];
          break;
        case "Municipio":
          objetoMapeado["Municipio"] = objeto[clave];
          break;
        case "Nacionalidad":
          objetoMapeado["Pa_s_de_Nacimiento"] = objeto[clave];
          break;
        case "Nombre":
          objetoMapeado["First_Name"] = objeto[clave];
          break;
        case "No. Exterior":
          objetoMapeado["No_Exterior"] = objeto[clave];
          break;
        case "No. Interior":
          objetoMapeado["No_Interior"] = objeto[clave];
          break;
        case "Numero Autorización":
          objetoMapeado["Numero_Autorizaci_n"] = objeto[clave];
          break;
        case "Numero de Noches":
          objetoMapeado["Numero_de_Noches"] = objeto[clave];
          break;
        case "Numero de Prospecto":
          objetoMapeado["Numero_de_Prospecto"] = objeto[clave];
          break;
        case "Numero_de_prospecto_netcenter":
          objetoMapeado["Numero_de_prospecto_netcenter"] = objeto[clave];
          break;
        case "Ocupación":
          objetoMapeado["Designation"] = objeto[clave];
          break;
        case "Pais":
          objetoMapeado["Country"] = objeto[clave];
          break;
        case "prospect_bridge_id":
          objetoMapeado["prospect_bridge_id"] = objeto[clave];
          break;
        case "Sala Referido":
          objetoMapeado["Sala_Referido"] = objeto[clave];
          break;
        case "Sexo":
          objetoMapeado["Sexo"] = objeto[clave];
          break;
        case "Tasa de Cambio":
          objetoMapeado["Exchange_Rate"] = objeto[clave];
          break;
        case "Teléfono":
          objetoMapeado["Phone"] = objeto[clave];
          break;
        case "Terminal":
          objetoMapeado["Terminal"] = objeto[clave];
          break;
        case "Vigencia (Meses)":
          objetoMapeado["Vigencia"] = objeto[clave];
          break;
     
      }
    }
  
   const objetoFinal: ProspectosApi = objetoMapeado as unknown as ProspectosApi;
       return objetoFinal;
  }
  
}
