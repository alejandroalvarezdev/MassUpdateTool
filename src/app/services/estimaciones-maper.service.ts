import { Injectable } from '@angular/core';
import { Estimaciones } from '../models/estimaciones.model';
import { EstimacionesAPI } from '../models/estimaciones-api.model';

@Injectable({
    providedIn: 'root'
})
export class EstimacionesMaperService {

    constructor() {
    }
    mapearEstimacion(objeto: Estimaciones): EstimacionesAPI {
        const objetoMapeado: EstimacionesAPI = {
        OwnerID: "",
        ContractID: "",
        ContractNumber: "",
        admin_fee: 0,
        financial_charges: 0,
        number_authorized_cdp: "",
        life_insurance_amount: 0,
        life_insurance_surcharge: 0,
        closing_cost_payment: 0,
        club: "",
        Club_Semanal: "",
        contract_bridge_id: "",
        previous_contracts: "",
        previous_sale_price: 0,
        vacation_credits: 0,
        annual_fee: 0,
        idp_percentage: 0,
        minimum_down_payment_amount: 0,
        total_down_payment_amount: 0,
        equity_amount: 0,
        Tag: "",
        date_first_financing: new Date(),
        Fecha_del_Primer_Uso: new Date(),
        membership_expiration_date: new Date(),
        date_first_payment_cdp: new Date(),
        date_second_payment_cdp: new Date(),
        date_third_payment_cdp: new Date(),
        date_fourth_payment_cdp: new Date(),
        date_fifth_payment_cdp: new Date(),
        date_sixth_payment_cdp: new Date(),
        date_seventh_payment_cdp: new Date(),
        date_eighth_payment_cdp: new Date(),
        date_ninth_payment_cdp: new Date(),
        date_tenth_payment_cdp: new Date(),
        date_first_payment_idp: new Date(),
        date_second_payment_idp: new Date(),
        date_third_payment_idp: new Date(),
        date_fourth_payment_idp: new Date(),
        date_fifth_payment_idp: new Date(),
        date_sixth_payment_idp: new Date(),
        last_idp_date: new Date(),
        flyback_surcharge: 0,
        donation: 0,
        sala_name: 0,
        amount_to_financed: 0,
        monthly_payment_amount: 0,
        flyback: 0,
        first_payment_cdp: 0,
        second_payment_cdp: 0,
        third_payment_cdp: 0,
        fourth_payment_cdp: 0,
        fifth_payment_cdp: 0,
        sixth_payment_cdp: 0,
        seventh_payment_cdp: 0,
        eighth_payment_cdp: 0,
        ninth_payment_cdp: 0,
        tenth_payment_cdp: 0,
        eleventh_payment_cdp: 0,
        twelveth_payment_cdp: 0,
        first_payment_idp: 0,
        second_payment_idp: 0,
        third_payment_idp: 0,
        fourth_payment_idp: 0,
        fifth_payment_idp: 0,
        sixth_payment_idp: 0,
        rentsure_amount: 0,
        dp_payment_instrument: "",
        financing_interest_rate: 0,
        Membresia_club_semanal: "",
        financing_months: 0,
        Currency: "",
        No_Serie_Tablet: "",
        deal: "",
        authorized_idps: "",
        minimum_sale_price: 0,
        tablet_price: 0,
        sale_price: 0,
        previous_points: 0,
        accumulated_points: 0,
        rentsure: "",
        Exchange_Rate: 0,
        alternativeExchangeRate: "",
        adjustment_type: "",
        type_of_sale: "",
        membership_type: "",
        payment_method: "",
        tablet_type: "",
        total_cdp: 0,
        total_closing_cost: 0,
        total_pickup: 0,
        trade_in_amount: 0,
        transfer_fee: 0,
        last_cdp_date: new Date(),
        MortgageID: "",
        date_eleventh_payment_cdp: new Date,
        date_twelveth_payment_cdp: new Date,
        Tasa_de_Cambio_Alterna: 0
        };
    

      // Iterar sobre las claves del objeto original
        for (let clave in objeto) {
        switch (clave) {
            case 'OwnerID':
                objetoMapeado['OwnerID'] = objeto[clave];
                break;
            case 'ContractID':
                objetoMapeado['ContractID'] = objeto[clave];
                break;
            case 'ContractNumber':
                objetoMapeado['ContractNumber'] = objeto[clave];
                break;
            case 'Admin Fee':
                objetoMapeado['admin_fee'] = objeto[clave];
                break;
            case 'Cargo financiero':
                objetoMapeado['financial_charges'] = objeto[clave];
                break;
            case 'CDPs Autorizados':
                objetoMapeado['number_authorized_cdp'] = objeto[clave];
                break;
            case 'Certificado de Vida Closing Cost':
                objetoMapeado['life_insurance_amount'] = objeto[clave];
                break;
            case 'Certificado de Vida en Sobreprecio':
                objetoMapeado['life_insurance_surcharge'] = objeto[clave];
                break;
            case 'Closing Cost Pagado':
                objetoMapeado['closing_cost_payment'] = objeto[clave];
                break;
            case 'Club':
                objetoMapeado['club'] = objeto[clave];
                break;
            case 'Club Semanal':
                objetoMapeado['Club_Semanal'] = objeto[clave];
                break;
            case 'contract_bridge_id':
                objetoMapeado['contract_bridge_id'] = objeto[clave];
                break;
            case 'Contrato Anterior':
                objetoMapeado['previous_contracts'] = objeto[clave];
                break;
            case 'Costo de venta del contrato previo':
                objetoMapeado['previous_sale_price'] = objeto[clave];
                break;
            case 'Créditos Vacacionales':
                objetoMapeado['vacation_credits'] = objeto[clave];
                break;
            case 'Cuota Anual USD':
                objetoMapeado['annual_fee'] = objeto[clave];
                break;
            case 'Down Payment':
                objetoMapeado['minimum_down_payment_amount'] = objeto[clave];
                break;
            case 'Enganche Inicial':
                objetoMapeado['minimum_down_payment_amount'] = objeto[clave];
                break;
            case 'Enganche Total':
                objetoMapeado['total_down_payment_amount'] = objeto[clave];
                break;
            case 'Equity transferred':
                objetoMapeado['equity_amount'] = objeto[clave];
                break;
            case 'Etiqueta':
                objetoMapeado['Tag'] = objeto[clave];
                break;
            case 'Fecha de primera Mensualidad':
                objetoMapeado['date_first_financing'] = objeto[clave];
                break;
            case 'Fecha del Primer Uso':
                objetoMapeado['Fecha_del_Primer_Uso'] = objeto[clave];
                break;
            case 'Fecha Expiración':
                objetoMapeado['membership_expiration_date'] = objeto[clave];
                break;
            case 'Fecha Primer Pago':
                objetoMapeado['date_first_payment_cdp'] = objeto[clave];
                break;
            case 'Fecha Segundo Pago':
                objetoMapeado['date_second_payment_cdp'] = objeto[clave];
                break;
            case 'Fecha Tercer Pago':
                objetoMapeado['date_third_payment_cdp'] = objeto[clave];
                break;
            case 'Fecha Cuarto Pago':
                objetoMapeado['date_fourth_payment_cdp'] = objeto[clave];
                break;
            case 'Fecha Quinto Pago':
                objetoMapeado['date_fifth_payment_cdp'] = objeto[clave];
                break;
            case 'Fecha Sexto Pago':
                objetoMapeado['date_sixth_payment_cdp'] = objeto[clave];
                break;
            case 'Fecha Séptimo Pago':
                objetoMapeado['date_seventh_payment_cdp'] = objeto[clave];
                break;
            case 'Fecha Octavo Pago':
                objetoMapeado['date_eighth_payment_cdp'] = objeto[clave];
                break;
            case 'Fecha Noveno Pago':
                objetoMapeado['date_ninth_payment_cdp'] = objeto[clave];
                break;
            case 'Fecha Decimo Pago':
                objetoMapeado['date_tenth_payment_cdp'] = objeto[clave];
                break;
            case 'Fecha Decimo Primer Pago':
                objetoMapeado['date_first_payment_idp'] = objeto[clave];
                break;
            case 'Fecha Decimo Segundo Pago':
                objetoMapeado['date_second_payment_idp'] = objeto[clave];
                break;
            case 'Fecha Primer Pago Pickup':
                objetoMapeado['date_first_payment_idp'] = objeto[clave];
                break;
            case 'Fecha Segundo Pago Pickup':
                objetoMapeado['date_second_payment_idp'] = objeto[clave];
                break;
            case 'Fecha Tercer Pago Pickup':
                objetoMapeado['date_third_payment_idp'] = objeto[clave];
                break;
            case 'Fecha Cuarto Pago Pickup':
                objetoMapeado['date_fourth_payment_idp'] = objeto[clave];
                break;
            case 'Fecha Quinto Pago Pickup':
                objetoMapeado['date_fifth_payment_idp'] = objeto[clave];
                break;
            case 'Fecha Sexto Pago Pickup':
                objetoMapeado['date_sixth_payment_idp'] = objeto[clave];
                break;
            case 'Flyback en Sobreprecio':
                objetoMapeado['flyback_surcharge'] = objeto[clave];
                break;
            case 'Fundación':
                objetoMapeado['donation'] = objeto[clave];
                break;
            case 'ID de la Sala':
                objetoMapeado['sala_name'] = objeto[clave];
                break;
            case 'Importe a Financiar':
                objetoMapeado['amount_to_financed'] = objeto[clave];
                break;
            case 'Importe de la Mensualidad':
                objetoMapeado['monthly_payment_amount'] = objeto[clave];
                break;
            case 'Importe FlyBack en CC':
                objetoMapeado['flyback'] = objeto[clave];
                break;
            // Continúa agregando el resto de las propiedades necesarias en el mismo patrón
            
        }
    }

    
    const objetoFinal: EstimacionesAPI = objetoMapeado as EstimacionesAPI;
    return objetoFinal;
    }
}
