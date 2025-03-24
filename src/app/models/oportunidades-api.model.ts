import { ObjConId } from '../models/obj-con-id.model';


export interface OportunidadesApi {
        
        Balance_CDP?: string;                        // Moneda
        Balance_Pick_Up?: string;                    // Moneda
        Calificaciones?: string;                     // Lista de selección
        CAT_Anual?: string;                          // Porcentaje
        Co_Propietario?: ObjConId;                     // Buscar
        contract_bridge_id?: string;                 // Línea única (Único)
        previous_contracts?: ObjConId;               // Búsqueda de selección múltiple
        club?: string;                               // Línea única
        Cr_ditos_Totales?: number;                   // Número
        Cross_Reference?: string;                    // Lista de selección
        Cuota_Anual_USD?: string;                    // Decimal
      
        Equity?: string;                             // Moneda
        Es_un_club_de_Semanas?: boolean;             // Booleano
        Estado_Civil?: string;                       // Lista de selección
        Tag?: string;                                // Línea única
        Stage?: string;                              // Lista de selección
        Closing_Date?: string;                         // Fecha
        Fecha_de_Primer_Pago?: string;                 // Fecha
        Sale_Date?: string;                            // Fecha
        Fecha_Primer_Uso?: string;                     // Fecha
        Fecha_Ultimo_Pago?: string;                    // Fecha
        Finanzas_Aceptada?: ObjConId;                  // Buscar
        Campaign_Source?: ObjConId;                    // Buscar
        Lead_Source?: string;                        // Lista de selección
        Hook?: boolean;                              // Booleano
        Amount?: string;                             // Moneda
        Ingresos_Mensuales?: string;                 // Lista de selección
        membership_type?: string;                    // Línea única
        Currency?: string;                           // Lista de selección
        Morosidad_AR_USD?: string;                   // Decimal
        Morosidad_Down_Payment?: string;             // Moneda
        Morosidad_Folios_USD?: string;               // Decimal
        Morosidad_Morgage?: string;                  // Moneda
        Reason_For_Loss__s?: string;                 // Lista de selección
        Contact_Name?: ObjConId;                       // Buscar
        Deal_Name?: string;                          // Línea única
        Nota_de_Cancelacion?: string;                // Multilínea (pequeño)
        Oportunidad_upgraded?: ObjConId;               // Buscar
      
        Probability?: string;                        // Número
        Sala?: ObjConId;                               // Buscar
        Sale_type?: string;                          // Línea única
        Exchange_Rate?: string;                      // Decimal
        Type?: string;                               // Lista de selección
        ContractID?: string;                         // Línea única

}
