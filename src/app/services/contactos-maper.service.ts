import { Injectable } from '@angular/core';
import { ContactosApi } from '../models/contactos-api.model';
import { Contactos } from '../models/contactos.model';

@Injectable({
  providedIn: 'root'
})
export class ContactosMaperService {

  constructor() { }
  mapearContactos(objeto:Contactos): ContactosApi {
    const objetoMapeado = {
        OwnerID: '',                                // Línea única
        ContractID: '',                             // Línea única
        ContractNumber: '',                         // Línea única
        admin_fee: 0,                               // Moneda
        financial_charges: 0,                       // Moneda
      
        Digitos: null,                              // Número
        Last_Name: '',                              // Línea única
        Calle_de_Facturacion: '',                   // Línea única
        Calle_para_Correspondencia: '',             // Línea única
        Campa_a_Principal: '',                      // Buscar
        Centro_de_Servicio: '',                     // Lista de selección
        Ciudad_de_Facturacion: '',                  // Línea única
        Mailing_City: '',                           // Línea única
        PostalCode: '',                             // Línea única
        Mailing_Zip: '',                            // Línea única
        Colonia: '',                                // Línea única
        Colonia_de_Facturacion: '',                 // Línea única
        CoOwner: '',                                // Buscar
        coprospect_bridge_id: '',                   // Línea única
        Email: '',                                  // Correo electrónico (Único)
        Secondary_Email: '',                        // Correo electrónico
        Mailing_Street: '',                         // Línea única
        Empresa_donde_Labora: '',                   // Línea única
        Estado_Civil: '',                           // Lista de selección
        Estado_de_Facturacion: '',                  // Línea única
        Mailing_State: '',                          // Línea única
        Folio: '',                                  // Línea única
        Forma_de_Pago: '',                          // Lista de selección
        Lead_Source: '',                            // Lista de selección
        Importe_Cobrado: 0,                         // Moneda
        Ingresos_Mensuales: '',                     // Lista de selección
        Lenguaje_de_Contacto: '',                   // Lista de selección
        Lenguaje_de_Marketing: '',                  // Lista de selección
        Lenguaje_Secundario: [],                    // Selección múltiple
        Currency: '',                               // Lista de selección
        Mobile: '',                                 // Teléfono
        Municipio: '',                              // Línea única
        Municipio_de_Facturacion: '',               // Línea única
        Pa_s_de_Nacimiento: '',                     // Lista de selección
        No_Exterior_de_Facturaci_n: '',             // Línea única
        No_Interior_de_Facturacion: '',             // Línea única
        First_Name: '',                             // Línea única
        Numero_Autorizaci_n: '',                    // Línea única
        Numero_de_Noches: 0,                        // Número
        Numero_de_Prospecto: 0,                     // Número
        Numero_Exterior: '',                        // Línea única
        Numero_Interior: '',                        // Línea única
        Numero_de_prospecto_netcenter: 0,           // Número
        Numero_de_Socio: '',                        // Línea única
        owner_bridge_id: '',                        // Línea única
        Pais_de_Facturacion: '',                    // Lista de selección
        Mailing_Country: '',                        // Línea única
        prospect_bridge_id: '',                     // Línea única
        Residencia_Fiscal: '',                      // Lista de selección
        Regimen_Fiscal: '',                         // Lista de selección
        RFC: '',                                    // Línea única
        Salutation: '',                             // Lista de selección
        Sexo: '',                                   // Lista de selección
        Exchange_Rate: 0,                           // Decimal
        Phone: '',                                  // Teléfono
        Home_Phone: '',                             // Teléfono
        Terminal: '',                               // Lista de selección
        Tipo_de_Contacto: '',                       // Lista de selección
        Title: '',                                  // Línea única
        Uso_de_CFDI: '',                            // Lista de selección
        Vigencia: 0,                                // Número
        CoOwnprosID: ''                             // Línea única
    };


    // Iteramos sobre las claves del objeto original y asignamos valores al objeto mapeado
        function mapearContactosApiAContactos(objeto: Contactos): any {
            let objetoMapeado: any = {};
        
            for (let clave in objeto) {
            switch (clave) {
                case "4 Digitos":
                objetoMapeado["Digitos"] = objeto[clave];
                break;
                case "Apellido Paterno":
                objetoMapeado["Last_Name"] = objeto[clave];
                break;
                case "Apellidos":
                objetoMapeado["Apellidos"] = objeto[clave];
                break;
                case "Calle de Facturacion":
                objetoMapeado["Calle_de_Facturacion"] = objeto[clave];
                break;
                case "Calle para Correspondencia":
                objetoMapeado["Calle_para_Correspondencia"] = objeto[clave];
                break;
                case "Campaña Principal":
                objetoMapeado["Campa_a_Principal"] = objeto[clave];
                break;
                case "Centro de Servicio":
                objetoMapeado["Centro_de_Servicio"] = objeto[clave];
                break;
                case "Ciudad de Facturación":
                objetoMapeado["Ciudad_de_Facturacion"] = objeto[clave];
                break;
                case "Ciudad para correspondencia":
                objetoMapeado["Mailing_City"] = objeto[clave];
                break;
                case "Código Postal de Facturación":
                objetoMapeado["PostalCode"] = objeto[clave];
                break;
                case "Código postal para correspondencia":
                objetoMapeado["Mailing_Zip"] = objeto[clave];
                break;
                case "Colonia":
                objetoMapeado["Colonia"] = objeto[clave];
                break;
                case "Colonia de Facturación":
                objetoMapeado["Colonia_de_Facturacion"] = objeto[clave];
                break;
                case "Coowner":
                objetoMapeado["CoOwner"] = objeto[clave];
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
                case "Domicilio para correspondencia":
                objetoMapeado["Mailing_Street"] = objeto[clave];
                break;
                case "Empresa donde labora":
                objetoMapeado["Empresa_donde_Labora"] = objeto[clave];
                break;
                case "Estado Civil":
                objetoMapeado["Estado_Civil"] = objeto[clave];
                break;
                case "Estado de Facturacion":
                objetoMapeado["Estado_de_Facturacion"] = objeto[clave];
                break;
                case "Estado para correspondencia":
                objetoMapeado["Mailing_State"] = objeto[clave];
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
                case "Importe Cobrado":
                objetoMapeado["Importe_Cobrado"] = objeto[clave];
                break;
                case "Ingresos Mensuales":
                objetoMapeado["Ingresos_Mensuales"] = objeto[clave];
                break;
                case "Lenguaje de contacto":
                objetoMapeado["Lenguaje_de_Contacto"] = objeto[clave];
                break;
                case "Lenguaje de Marketing":
                objetoMapeado["Lenguaje_de_Marketing"] = objeto[clave];
                break;
                case "Lenguaje Secundario":
                objetoMapeado["Lenguaje_Secundario"] = objeto[clave];
                break;
                case "Moneda":
                objetoMapeado["Currency"] = objeto[clave];
                break;
                case "Móvil":
                objetoMapeado["Mobile"] = objeto[clave];
                break;
                case "Municipio":
                objetoMapeado["Municipio"] = objeto[clave];
                break;
                case "Municipio de Facturacion":
                objetoMapeado["Municipio_de_Facturacion"] = objeto[clave];
                break;
                case "Nacionalidad":
                objetoMapeado["Pa_s_de_Nacimiento"] = objeto[clave];
                break;
            
            }
            }
        
            return objetoMapeado;
        }
        

    const objetoFinal: ContactosApi = objetoMapeado as unknown as ContactosApi;
        return objetoFinal;
    }
}

