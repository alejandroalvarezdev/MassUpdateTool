export interface OportunidadesApi {
    
        Balance_CDP?: number;                        // Moneda
        Balance_Pick_Up?: number;                    // Moneda
        Calificaciones?: string;                     // Lista de selección
        CAT_Anual?: number;                          // Porcentaje
        Co_Propietario?: string;                     // Buscar
        contract_bridge_id?: string;                 // Línea única (Único)
        previous_contracts?: string;               // Búsqueda de selección múltiple
        club?: string;                               // Línea única
        Cr_ditos_Totales?: number;                   // Número
        Cross_Reference?: string;                    // Lista de selección
        Cuota_Anual_USD?: number;                    // Decimal
      
        Equity?: number;                             // Moneda
        Es_un_club_de_Semanas?: boolean;             // Booleano
        Estado_Civil?: string;                       // Lista de selección
        Tag?: string;                                // Línea única
        Stage?: string;                              // Lista de selección
        Closing_Date?: Date;                         // Fecha
        Fecha_de_Primer_Pago?: Date;                 // Fecha
        Sale_Date?: Date;                            // Fecha
        Fecha_Primer_Uso?: Date;                     // Fecha
        Fecha_Ultimo_Pago?: Date;                    // Fecha
        Finanzas_Aceptada?: string;                  // Buscar
        Campaign_Source?: string;                    // Buscar
        Lead_Source?: string;                        // Lista de selección
        Hook?: boolean;                              // Booleano
        Amount?: number;                             // Moneda
        Ingresos_Mensuales?: string;                 // Lista de selección
        membership_type?: string;                    // Línea única
        Currency?: string;                           // Lista de selección
        Morosidad_AR_USD?: number;                   // Decimal
        Morosidad_Down_Payment?: number;             // Moneda
        Morosidad_Folios_USD?: number;               // Decimal
        Morosidad_Morgage?: number;                  // Moneda
        Reason_For_Loss__s?: string;                 // Lista de selección
        Contact_Name?: string;                       // Buscar
        Deal_Name?: string;                          // Línea única
        Nota_de_Cancelacion?: string;                // Multilínea (pequeño)
        Oportunidad_upgraded?: string;               // Buscar
      
        Probability?: number;                        // Número
        Sala?: string;                               // Buscar
        Sale_type?: string;                          // Línea única
        Exchange_Rate?: number;                      // Decimal
        Type?: string;                               // Lista de selección
        ContractID?: string;                         // Línea única
      
}
