export interface EstimacionesAPI {

        "OwnerID"?: string;                                // Línea única (Único)
        "ContractID"?: string;                             // Línea única (Único)
        "ContractNumber"?: string;                         // Línea única (Único)
        "admin_fee": number;                              // Moneda
        "financial_charges": number;                       // Moneda
        "number_authorized_cdp": string;                 // Lista de selección (String)
        "life_insurance_amount": number;                   // Moneda
        "life_insurance_surcharge": number;                // Moneda
        "closing_cost_payment": number;                    // Moneda
        "club": string;                                    // Lista de selección (String)
        "Club_Semanal": string;                            // Lista de selección (String)
        "contract_bridge_id": string;                      // Línea única (Único)
        "previous_contracts": string;                      // Buscar
        "previous_sale_price": number;                     // Decimal
        "vacation_credits": number;                        // Número
        "annual_fee": number;                              // Decimal
        "idp_percentage": number;                          // Porcentaje
        "minimum_down_payment_amount": number;             // Moneda
        "total_down_payment_amount": number;               // Moneda
        "equity_amount": number;                           // Moneda
        "Tag": string;                                     // Línea única
        "date_first_financing": Date;                      // Fecha
        "Fecha_del_Primer_Uso": Date;                      // Fecha
        "membership_expiration_date": Date;                // Fecha
        "date_first_payment_cdp": Date;                    // Fecha
        "date_second_payment_cdp": Date;                   // Fecha
        "date_third_payment_cdp": Date;                    // Fecha
        "date_fourth_payment_cdp": Date;                   // Fecha
        "date_fifth_payment_cdp": Date;                    // Fecha
        "date_sixth_payment_cdp": Date;                    // Fecha
        "date_seventh_payment_cdp": Date;                  // Fecha
        "date_eighth_payment_cdp": Date;                   // Fecha
        "date_ninth_payment_cdp": Date;                    // Fecha
        "date_tenth_payment_cdp": Date;                    // Fecha
        "date_eleventh_payment_cdp": Date;                 // Fecha
        "date_twelveth_payment_cdp": Date;                 // Fecha
        "date_first_payment_idp": Date;                    // Fecha
        "date_second_payment_idp": Date;                   // Fecha
        "date_third_payment_idp": Date; 
        "date_fourth_payment_idp":Date                   // Fecha
        "date_fifth_payment_idp": Date;                    // Fecha
        "date_sixth_payment_idp": Date;                    // Fecha
        "last_idp_date": Date;                             // Fecha
        "flyback_surcharge": number;                        // Formula
        "donation": number;                                // Moneda
        "amount_to_financed": number;                      // Moneda
        "monthly_payment_amount": number;                  // Moneda
        "flyback": number;                                 // Moneda
        "first_payment_cdp": number;                       // Moneda
        "second_payment_cdp": number;                      // Moneda
        "third_payment_cdp": number;                       // Moneda
        "fourth_payment_cdp": number;                      // Moneda
        "fifth_payment_cdp": number;                   // Moneda
        "sixth_payment_cdp": number;                   // Moneda
        "seventh_payment_cdp": number;                     // Moneda
        "eighth_payment_cdp": number;                      // Moneda
        "ninth_payment_cdp": number;                       // Moneda
        "tenth_payment_cdp": number;                       // Moneda
        "eleventh_payment_cdp": number;                    // Moneda
        "twelveth_payment_cdp": number;                    // Moneda
        "first_payment_idp": number;                       // Moneda
        "second_payment_idp": number;                      // Moneda
        "third_payment_idp": number;                       // Moneda
        "fourth_payment_idp": number;                      // Moneda
        "fifth_payment_idp": number;                       // Moneda
        "sixth_payment_idp": number;                       // Moneda
        "rentsure_amount": number;                         // Moneda
        "dp_payment_instrument": string;                   // Lista de selección (String)
        "financing_interest_rate": number;                 // Porcentaje
        "Membresia_club_semanal": string;                  // Línea única
        "financing_months": number;                        // Número
        "Currency": string;                                // Lista de selección (String)
        "No_Serie_Tablet": string;                         // Línea única
        "sala_name": string;                               // Lista de selección (String)
        "deal": string;                                    // Buscar
        "authorized_idps": number;                       // Lista de selección (String)
        "minimum_sale_price": number;                      // Moneda
        "tablet_price": number;                            // Moneda
        "sale_price": number;                              // Moneda
        "previous_points": number;                         // Número
        "accumulated_points": number;                      // Número
        "rentsure": string;                              // Lista de selección (String)
        "Exchange_Rate": number;                           // Decimal
        "alternativeExchangeRate": string;                 // Lista de selección (String)
        "Tasa_de_Cambio_Alterna": number;                  // Decimal
        "adjustment_type": string;                         // Lista de selección (String)
        "type_of_sale": string;                            // Lista de selección (String)
        "membership_type": string;                         // Lista de selección (String)
        "payment_method": string;                          // Lista de selección (String)
        "tablet_type": string;                             // Buscar
        "total_cdp": number;                               // Moneda
        "total_closing_cost": number;                      // Moneda
        "total_pickup": number;                            // Moneda
        "trade_in_amount": number;                         // Moneda
        "transfer_fee": number;                            // Moneda
        "last_cdp_date": Date;                             // Fecha
        "MortgageID": string;    
        "previousExchangeRate"?:number                          // Línea única

        }
        

