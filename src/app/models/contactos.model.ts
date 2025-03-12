import {ObjConId} from '../models/obj-con-id.model'
export interface Contactos {

"4 Digitos"?: number;                           // Número
"Apellido Paterno"?: string;                     // Línea única
"Apellidos"?: string;                            // Línea única
"Calificacion"?: string;                         // Línea única
"Calle de Facturacion"?: string;                 // Línea única
"Calle para Correspondencia"?: string;           // Línea única
"Campaña Principal"?: ObjConId;                    // Buscar
"Centro de Servicio"?: string;                   // Lista de selección
"Ciudad de Facturación"?: string;                // Línea única
"Ciudad para correspondencia"?: string;          // Línea única
"Código Postal de Facturación"?: string;         // Línea única
"Código postal para correspondencia"?: string;  // Línea única
"Colonia"?: string;                              // Línea única
"Colonia de Facturación"?: string;               // Línea única
"Coowner"?: string;                              // Buscar
"coprospect_bridge_id"?: string;                 // Línea única
"Correo electrónico"?: string;                   // Correo electrónico (Único)
"Correo electrónico secundario"?: string;        // Correo electrónico
"Domicilio para correspondencia"?: string;      // Línea única
"Empresa donde labora"?: string;                 // Línea única
"Estado Civil"?: string;                         // Lista de selección
"Estado de Facturacion"?: string;                // Línea única
"Estado para correspondencia"?: string;          // Línea única
"Fecha de nacimiento"?: string;                    // Fecha
"Folio"?: string;                                // Línea única
"Forma de Pago"?: string;                        // Lista de selección
"Fuente de Prospecto"?: string;                  // Lista de selección
"Hora de creación"?: string;                       // Fecha
"ID"?: string;                                   // Línea única
"Importe Cobrado"?: number;                      // Moneda
"Ingresos Mensuales"?: string;                   // Lista de selección
"Lenguaje de contacto"?: string;                 // Lista de selección
"Lenguaje de Marketing"?: string;                // Lista de selección
"Lenguaje Secundario"?: string[];                  // Selección múltiple
"Moneda"?: string;                               // Lista de selección
"Móvil"?: string;                                // Teléfono
"Municipio"?: string;                            // Línea única
"Municipio de Facturacion"?: string;             // Línea única
"Nacionalidad"?: string;                         // Lista de selección
"No. Exterior de Facturación"?: string;          // Línea única
"No. Interior de Facturacion"?: string;          // Línea única
"Nombre"?: string;                               // Línea única
"Numero Autorización"?: string;                  // Línea única
"Numero de Noches"?: number;                     // Número
"Número de prospecto"?: number;                  // Número
"Numero Exterior"?: string;                      // Línea única
"Numero Interior"?: string;                      // Línea única
"Numero_de_prospecto_netcenter"?: number;        // Número
"Owner ID"?: string;                             // Línea única
"owner_bridge_id"?: string;                      // Línea única
"País de Facturación"?: string;                  // Lista de selección
"País para correspondencia"?: string;            // Línea única
"prospect_bridge_id"?: string;                   // Línea única
"Régimen Fiscal"?: string;                       // Lista de selección
"Residencia Fiscal"?: string;                    // Lista de selección
"RFC"?: string;                                  // Línea única
"Saludo"?: string;                               // Lista de selección
"Sexo"?: string;                                 // Lista de selección
"Tasa de cambio"?: number;                       // Decimal
"Teléfono"?: string;                             // Teléfono
"Telefono particular"?: string;                  // Teléfono
"Terminal"?: string;                             // Lista de selección
"Tipo de Contacto"?: string;                     // Lista de selección
"Título"?: string;                               // Línea única
"Uso de CFDI"?: string;                          // Lista de selección
"Vigencia"?: number;                             // Número
"CoOwnProsID"?: string;  
            // Línea única

}
