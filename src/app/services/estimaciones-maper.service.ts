import { Injectable } from '@angular/core';
import { Estimaciones } from '../models/estimaciones.model';
import { EstimacionesAPI } from '../models/estimaciones-api.model';
import { ConsumeService } from './consume.service';

@Injectable({
    providedIn: 'root'
})
export class EstimacionesMaperService {

    constructor(private consume:ConsumeService) {
    }
    mapearEstimacion(objeto: Estimaciones): EstimacionesAPI {
        // Campos obligatorios
        const objetoMapeado: EstimacionesAPI = {
        };
    

      // Iterar sobre las claves del objeto original
        for (let clave in objeto) {
            if (objeto.hasOwnProperty(clave)) {
                            // Verificamos si el valor es válido
                            const valor = objeto[clave as keyof Estimaciones];
                            if (valor === undefined || valor === null || valor === "" || (typeof valor === 'number' && valor === 0)) {
                                continue; // No mapeamos la propiedad si es vacía o 0
                                }
        switch (clave) {
            // case 'OwnerID':
            //     objetoMapeado['OwnerID'] = objeto[clave];
            //     break;
            // case 'ContractID':
            //     objetoMapeado['ContractID'] = objeto[clave];
            //     break;
            // case 'ContractNumber':
            //     objetoMapeado['ContractNumber'] = objeto[clave];
            //     break;
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
                objetoMapeado['idp_percentage'] = objeto[clave];
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
            case 'Fecha Primer Uso':
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
            case'MortgageID':
                    objetoMapeado['MortgageID'] = objeto[clave]
                break;
            // Continúa agregando el resto de las propiedades necesarias en el mismo patrón
            case'Tipo de membresía':
                objetoMapeado["membership_type"] = objeto[clave];
            break;
            case'Tipo de Venta':
                objetoMapeado["payment_method"] = objeto[clave]; 
            break; 
            case'Precio Venta': 
                objetoMapeado["sale_price"] = objeto[clave];
                break;  
            case'Precio Tablet':
                objetoMapeado["tablet_price"] = objeto[clave]; 
            break; 
            case'Tipo de Contrato': 
            objetoMapeado["type_of_sale"] = objeto[clave];
        }
        }
    }

    
    const objetoFinal: EstimacionesAPI = objetoMapeado as EstimacionesAPI;
    return objetoFinal;
    }
    async zohoIDsUpdateEstimaciones(objeto: any): Promise<EstimacionesAPI> {
        const objetoMapeado:EstimacionesAPI = {

            }; // Objeto donde mapeamos los valores obligatorios
    
        // Creamos un array de promesas para esperar a todas las respuestas de las peticiones
        const peticiones: Promise<void>[] = [];
    
        // Iteramos sobre las propiedades de "objeto"
        for (let clave in objeto) {
            if (objeto.hasOwnProperty(clave)) {
                const valor = objeto[clave];
            
                if (valor === undefined || valor === null) {
                    continue; // No mapeamos la propiedad si no tiene valor
                }
    
                let criteriaBase = '';
                let module = '';
                let trimmedText: string;  // Declaramos la variable fuera del switch

                switch (clave) {
                    
                    case 'Oportunidad':
                        module = 'Deals';
                        trimmedText = valor.substring(2);  // Modificamos el valor para este caso
                        criteriaBase = `(ContractID:equals:${trimmedText})`;
                        
                        try {
                            const response: any = await this.consume.fetchData(criteriaBase, module)
                                .pipe(
                                    
                                ).toPromise();
            
                            if (response?.data?.length > 0) {
                                const zohoid = response.data[0].id;
                                objetoMapeado["deal"] = { "id": zohoid };
                                // console.log('ID obtenido de Campaigns:', zohoid);
                            } else {
                                // console.error('No se encontró campaña con el ID proporcionado', response);
                            }
                        } catch (error) {
                            console.error('Error procesando la petición de Oportunidad:', error);
                        }
                        break;
                        // Pendiente a definir
                    case 'Sala':
                        trimmedText = valor.substring(1);  // Modificamos el valor para este caso
                        module = 'Salas';
                        criteriaBase = `(ContractID:equals:${trimmedText})`;
                        // t_site donde siteid >= 1000 => clientCustom.dbo.cat_office_tsw 
                        try {
                            const response: any = await this.consume.fetchData(criteriaBase, module)
                                .pipe(
                                    
                                ).toPromise();
            
                            if (response?.data?.length > 0) {
                                const zohoid = response.data[0].id;
                                objetoMapeado["deal"] = { "id": zohoid };
                                // console.log('ID obtenido de Campaigns:', zohoid);
                            } else {
                                // console.error('No se encontró campaña con el ID proporcionado', response);
                            }
                        } catch (error) {
                            console.error('Error procesando la petición de Salas:', error);
                        }
                        break;
                    case 'Tipo Tablet':
                        module = 'Products';
                        trimmedText = valor;  // Suponiendo que "valor" tiene el texto original
                        trimmedText = trimmedText.substring(1);  // Asignamos el resultado de substring(2) 
                        criteriaBase = `(prem_inv_id:equals:${trimmedText})`;
                        // t_site donde siteid >= 1000 => clientCustom.dbo.cat_office_tsw 
                        try {
                            const response: any = await this.consume.fetchData(criteriaBase, module)
                                .pipe(
                                    
                                ).toPromise();
            
                            if (response?.data?.length > 0) {
                                const zohoid = response.data[0].id;
                                objetoMapeado["tablet_type"] = { "id": zohoid };
                                // console.log('ID obtenido de Campaigns:', zohoid);
                            } else {
                                // console.error('No se encontró campaña con el ID proporcionado', response);
                            }
                        } catch (error) {
                            console.error('Error procesando la petición de Tipo Tablet:', error);
                        }
                        break;
                    case 'Contrato Anterior':
                        module = 'Deals';
                        trimmedText = valor;  // Suponiendo que "valor" tiene el texto original
                        trimmedText = trimmedText.substring(1);  // Asignamos el resultado de substring(2) 
                        criteriaBase = `(ContractID:equals:${trimmedText})`;
                        // t_site donde siteid >= 1000 => clientCustom.dbo.cat_office_tsw 
                        try {
                            const response: any = await this.consume.fetchData(criteriaBase, module)
                                .pipe(
                                    
                                ).toPromise();
            
                            if (response?.data?.length > 0) {
                                const zohoid = response.data[0].id;
                                objetoMapeado["previous_contracts"] = { "id": zohoid };
                                // console.log('ID obtenido de Campaigns:', zohoid);
                            } else {
                                // console.error('No se encontró campaña con el ID proporcionado', response);
                            }
                        } catch (error) {
                            console.error('Error procesando la petición de Contrato Anterior:', error);
                        }
                        break;
                    default:
                        // Acción por defecto si no se encuentra ninguna coincidencia
                        break;
                }
                
            }
        }
    
        // Esperamos que todas las peticiones asíncronas se completen
        await Promise.all(peticiones);
    
        // Devolvemos el objeto mapeado
        return objetoMapeado;
    }
}
