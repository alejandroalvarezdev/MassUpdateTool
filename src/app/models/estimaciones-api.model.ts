        export interface EstimacionesAPI {

                // Línea única (Único)
        OwnerID: string;                  // Línea única (Único)
        ContractID: string;                  // Línea única (Único)
        ContractNumber: string;                 // Moneda
        admin_fee: number;  // Asumimos que "Moneda" es un valor numérico representando la cantidad en dinero                  // Moneda
        financial_charges: number;  // Asumimos que "Moneda" es un valor numérico representando la cantidad en dinero                // Lista de selección (String)
        number_authorized_cdp: string;  // Lista de selección                  // Moneda
        life_insurance_amount: number;  // Asumimos que "Moneda" es un valor numérico representando la cantidad en dineror;                // Moneda
        life_insurance_surcharge: number;  // Asumimos que "Moneda" es un valor numérico representando la cantidad en dinero                  // Moneda
        closing_cost_payment: number;  // Asumimos que "Moneda" es un valor numérico representando la cantidad en dinero                  // Lista de selección (String)
        club: string;  // Lista de selección                  // Lista de selección (String)
        Club_Semanal: string;  // Lista de selección                  // Línea única (Único)
        contract_bridge_id: string;  // Línea única (Único)                  // Buscar
        previous_contracts: string;  // Buscar (asumido como string)                  // Decimal
        previous_sale_price: number;  // Decimal                  // Número
        vacation_credits: number;  // Número                  // Decimal
        annual_fee: number;  // Decimal                  // Porcentaje
        idp_percentage: number;  // Porcentajember;             // Moneda
        minimum_down_payment_amount: number;  // Monedaer;               // Moneda
        total_down_payment_amount: number;  // Moneda                  // Moneda
        equity_amount: number;  // Moneda                  // Línea única
        Tag: string;  // Línea única                  // Fecha
        date_first_financing: Date;  // Fecha                  // Fecha
        Fecha_del_Primer_Uso: Date;  // Fechae;                // Fecha
        membership_expiration_date: Date;  // Fecha                  // Fecha
        date_first_payment_cdp: Date;  // Fecha                  // Fecha
        date_second_payment_cdp: Date;  // Fecha                  // Fecha
        date_third_payment_cdp: Date;  // Fecha                  // Fecha
        date_fourth_payment_cdp: Date;  // Fecha                  // Fecha
        date_fifth_payment_cdp: Date;  // Fecha                  // Fecha
        date_sixth_payment_cdp: Date;  // Fecha                  // Fecha
        date_seventh_payment_cdp: Date;  // Fecha                  // Fecha
        date_eighth_payment_cdp: Date;  // Fecha                  // Fecha
        date_ninth_payment_cdp: Date;  // Fecha                  // Fecha
        date_tenth_payment_cdp: Date;  // Fecha;                 // Fecha
        date_eleventh_payment_cdp: Date;  // Fecha;                 // Fecha
        date_twelveth_payment_cdp: Date;  // Fecha                  // Fecha
        date_first_payment_idp: Date;  // Fecha                  // Fecha
        date_second_payment_idp: Date;  // Fecha
        date_fourth_payment_idp:Date;
        date_third_payment_idp: Date;  // Fecha                // Fecha
        date_fifth_payment_idp: Date;  // Fecha                  // Fecha
        date_sixth_payment_idp: Date;  // Fecha                  // Fecha
        last_idp_date: Date;  // Fecha                  // Fecha
        flyback_surcharge: number;  // Fórmula (asumido como número)                   // Formula
        donation: number;  // Moneda                  // Moneda
        amount_to_financed: number;  // Moneda                  // Moneda
        monthly_payment_amount: number;  // Moneda                  // Moneda
        flyback: number;  // Moneda                  // Moneda
        first_payment_cdp: number;  // Moneda                  // Moneda
        second_payment_cdp: number;  // Moneda                  // Moneda
        third_payment_cdp: number;  // Moneda                  // Moneda
        fourth_payment_cdp: number;  // Moneda                  // Moneda
        fifth_payment_cdp: number;  // Moneda              // Moneda
        sixth_payment_cdp: number;  // Moneda              // Moneda
        seventh_payment_cdp: number;  // Moneda                  // Moneda
        eighth_payment_cdp: number;  // Moneda                  // Moneda
        ninth_payment_cdp: number;  // Moneda                  // Moneda
        tenth_payment_cdp: number;  // Moneda                  // Moneda
        eleventh_payment_cdp: number;  // Moneda                  // Moneda
        twelveth_payment_cdp: number;  // Moneda                  // Moneda
        first_payment_idp: number;  // Moneda                  // Moneda
        second_payment_idp: number;  // Moneda                  // Moneda
        third_payment_idp: number;  // Moneda                  // Moneda
        fourth_payment_idp: number;  // Moneda                  // Moneda
        fifth_payment_idp: number;  // Moneda                  // Moneda
        sixth_payment_idp: number;  // Moneda                  // Moneda
        rentsure_amount: number;  // Moneda                  // Moneda
        dp_payment_instrument: string;  // Lista de selección                  // Lista de selección (String)
        financing_interest_rate: number;  // Porcentaje;                 // Porcentaje
        Membresia_club_semanal: string;  // Línea única                  // Línea única
        financing_months: number;  // Número                  // Número
        Currency: string;  // Lista de selección                  // Lista de selección (String)
        No_Serie_Tablet: string;  // Línea única                  // Línea única
        sala_name: number;  // Lista de selección               // Lista de selección (String)
        deal: string;  // Buscar (asumido como string)                  // Buscar
        authorized_idps: string;  // Lista de selección                // Lista de selección (String)
        minimum_sale_price: number;  // Moneda                  // Moneda
        tablet_price: number;  // Moneda                  // Moneda
        sale_price: number;  // Moneda                  // Moneda
        previous_points: number;  // Número                  // Número
        accumulated_points: number;  // Número                  // Número
        rentsure: string;  // Lista de selección                // Lista de selección (String)
        Exchange_Rate: number;  // Decimal                  // Decimal
        alternativeExchangeRate: string;  // Lista de selección;                 // Lista de selección (String)
        Tasa_de_Cambio_Alterna: number;  // Decimal                  // Decimal
        adjustment_type: string;  // Lista de selección                  // Lista de selección (String)
        type_of_sale: string;  // Lista de selección                  // Lista de selección (String)
        membership_type: string;  // Lista de selección                  // Lista de selección (String)
        payment_method: string;  // Lista de selección                  // Lista de selección (String)
        tablet_type: string;  // Buscar (asumido como string)                  // Buscar
        total_cdp: number;  // Moneda                  // Moneda
        total_closing_cost: number;  // Moneda                  // Moneda
        total_pickup: number;  // Moneda                  // Moneda
        trade_in_amount: number;  // Moneda                  // Moneda
        transfer_fee: number;  // Moneda                  // Moneda
        last_cdp_date: Date;  // Fecha                  // Fecha
        MortgageID: string;  // Línea única

                }
                

