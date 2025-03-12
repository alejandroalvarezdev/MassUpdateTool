import {ObjConId} from '../models/obj-con-id.model'

export interface ContactosApi {

"Digitos"?: number;                             // Número
"Last_Name"?: string;                           // Línea única
"Calle_de_Facturacion"?: string;                // Línea única
"Calle_para_Correspondencia"?: string;          // Línea única
"Campa_a_Principal"?: ObjConId;                   // Buscar
"Centro_de_Servicio"?: string;                  // Lista de selección
"Ciudad_de_Facturacion"?: string;               // Línea única
"Mailing_City"?: string;                        // Línea única
"PostalCode"?: string;                          // Línea única
"Mailing_Zip"?: string;                         // Línea única
"Colonia"?: string;                             // Línea única
"Colonia_de_Facturacion"?: string;              // Línea única
"CoOwner"?: ObjConId;                             // Buscar
"coprospect_bridge_id"?: string;                // Línea única
"Email"?: string;                               // Correo electrónico (Único)
"Secondary_Email"?: string;                     // Correo electrónico
"Mailing_Street"?: string;                      // Línea única
"Empresa_donde_Labora"?: string;                // Línea única
"Estado_Civil"?: string;                        // Lista de selección
"Estado_de_Facturacion"?: string;               // Línea única
"Mailing_State"?: string;                       // Línea única
"Folio"?: string;                               // Línea única
"Forma_de_Pago"?: string;                       // Lista de selección
"Lead_Source"?: string;                         // Lista de selección
"Importe_Cobrado"?: number;                     // Moneda
"Ingresos_Mensuales"?: string;                  // Lista de selección
"Lenguaje_de_Contacto"?: string;                // Lista de selección
"Lenguaje_de_Marketing"?: string;               // Lista de selección
"Lenguaje_Secundario"?: string[];                 // Selección múltiple
"Currency"?: string;                            // Lista de selección
"Mobile"?: string;                              // Teléfono
"Municipio"?: string;                           // Línea única
"Municipio_de_Facturacion"?: string;            // Línea única
"Pa_s_de_Nacimiento"?: string;                  // Lista de selección
"No_Exterior_de_Facturaci_n"?: string;          // Línea única
"No_Interior_de_Facturacion"?: string;          // Línea única
"First_Name"?: string;                          // Línea única
"Numero_Autorizaci_n"?: string;                 // Línea única
"Numero_de_Noches"?: number;                    // Número
"Numero_de_Prospecto"?: number;                 // Número
"Numero_Exterior"?: string;                     // Línea única
"Numero_Interior"?: string;                     // Línea única
"Numero_de_prospecto_netcenter"?: number;       // Número
"Numero_de_Socio"?: string;                     // Línea única
"owner_bridge_id"?: string;                     // Línea única
"Pais_de_Facturacion"?: string;                 // Lista de selección
"Mailing_Country"?: string;                     // Línea única
"prospect_bridge_id"?: string;                  // Línea única
"Residencia_Fiscal"?: string;                   // Lista de selección
"Regimen_Fiscal"?: string;                      // Lista de selección
"RFC"?: string;                                 // Línea única
"Salutation"?: string;                          // Lista de selección
"Sexo"?: string;                                // Lista de selección
"Exchange_Rate"?: number;                       // Decimal
"Phone"?: string;                               // Teléfono
"Home_Phone"?: string;                          // Teléfono
"Terminal"?: string;                            // Lista de selección
"Tipo_de_Contacto"?: string;                    // Lista de selección
"Title"?: string;                               // Línea única
"Uso_de_CFDI"?: string;                         // Lista de selección
"Vigencia"?: number;                            // Número
"CoOwnprosID"?: string; 
"Calificacion"?:string; 
"Date_of_Birth"?:string                        // Línea única

}
