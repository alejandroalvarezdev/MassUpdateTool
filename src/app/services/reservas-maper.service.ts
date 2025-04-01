import { Injectable } from '@angular/core';
import { ReservasApi } from '../models/reservas-api.model';
import { Reservas } from '../models/reservas.model';
import { ConsumeService } from './consume.service';

@Injectable({
    providedIn: 'root'
})
export class ReservasService {

    constructor(private consume:ConsumeService) { }
    mapearReserva(objeto: Reservas): ReservasApi {
    // Campos obligatorios
    const objetoMapeado: ReservasApi = {};

    // Iterar sobre las claves del objeto original
    for (let clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
            // Verificamos si el valor es válido
            let valor = objeto[clave as keyof Reservas];
             // Convertir "true" o "false" (en formato string) a booleano
                if (valor === "true") {
                    valor = true;
                } else if (valor === "false") {
                    valor = false;
                }
            if (valor === undefined || valor === null || valor === "" || (typeof valor === 'number' && valor === 0)) {
                continue; // No mapeamos la propiedad si es vacía o 0
            }
            // Asignar los valores según las claves proporcionadas
            switch (clave) {
                case 'Adultos':
                    objetoMapeado["Adults"] = objeto[clave];
                    break;
                case 'Apellidos':
                    objetoMapeado['Last_Name'] = objeto[clave];
                    break;
                case 'Campaña':
                    objetoMapeado['Campa_a'] = objeto[clave];
                    break;
                case 'Certificado':
                    objetoMapeado['Certificado'] = objeto[clave];
                    break;
                case 'Costo Certificado':
                    objetoMapeado['Costo_Certificado'] = objeto[clave];
                    break;
                case 'Costo de la reserva':
                    objetoMapeado['Costo_de_la_reserva'] = objeto[clave];
                    break;
                case 'Destino':
                    objetoMapeado['Destino'] = objeto[clave];
                    break;
                case 'Edades menores':
                    objetoMapeado['Edades_menores'] = objeto[clave];
                    break;
                case 'Estado':
                    objetoMapeado['Estado'] = objeto[clave];
                    break;
                // case 'SiteId':
                //     objetoMapeado['SiteId'] = objeto[clave];
                    break;
                // case 'Hotel':
                //     objetoMapeado['Hotel'] = objeto[clave];
                //     break;
                // case 'ID':
                //     objetoMapeado['ID'] = objeto[clave];
                //     break;
                case 'Infantes':
                    objetoMapeado['Infants'] = objeto[clave];
                    break;
                case 'Llegada':
                    objetoMapeado['Check_In'] = objeto[clave];
                    break;
                case 'Menores':
                    objetoMapeado["Menores"] = objeto[clave];
                    break;
                case 'Moneda':
                    objetoMapeado['Currency'] = objeto[clave];
                    break;
                case 'Noches':
                    objetoMapeado['Noches'] = objeto[clave];
                    break;
                case 'Nombre':
                    objetoMapeado['First_Name'] = objeto[clave];
                    break;
                case 'Numero de habitaciones':
                    objetoMapeado['Numero_de_habitaciones'] = objeto[clave];
                    break;
                // case 'Owner':
                //     objetoMapeado['Owner'] = objeto[clave];
                //     break;
                // case 'Prospecto':
                //     objetoMapeado['Lead'] = objeto[clave];
                //     break;
                case 'Reserva Pagada':
                    // Convertir valor a booleano (asegurándonos que siempre sea un booleano)
                    valor = this.convertirValor(valor);
                    objetoMapeado['Reserva_Pagada'] =  objeto[clave];; // Asignar solo si es un booleano

                    if (typeof valor === 'boolean') {
                      objetoMapeado['Reserva_Pagada'] = valor; // Asignar solo si es un booleano
                    //   console.log("Reserva Pagada", valor); // Para depurar el valor
                    } else {
                      // Si el valor no es un booleano, se puede dejar sin asignar o asignar undefined
                      objetoMapeado['Reserva_Pagada'] = undefined; // Dejar como undefined si no es un booleano
                        console.log('Valor inválido para "Reserva_Pagada". Se asignará undefined.');
                    }
                    break;
                case 'ReservaID_netcenter':
                    objetoMapeado['CampaignID_nectcenter'] = objeto[clave];
                    break;
                // case 'Sala de Presentación':
                //     objetoMapeado['Sala de Presentación'] = objeto[clave];
                //     break;
                case 'Salida':
                    objetoMapeado['Check_Out'] = objeto[clave];
                    break;
                case 'Tarifa Preferencial':

                    objetoMapeado['Tarifa_Preferencial'] = objeto[clave];
                    
                        if (typeof valor === 'boolean') {
                            objetoMapeado['Tarifa_Preferencial'] = valor; // Asignar solo si es un booleano
                        //   console.log("Reserva Pagada", valor); // Para depurar el valor
                        } else {
                            // Si el valor no es un booleano, se puede dejar sin asignar o asignar undefined
                            objetoMapeado['Tarifa_Preferencial'] = undefined; // Dejar como undefined si no es un booleano
                            console.log('Valor inválido para "Tarifa_Preferencial". Se asignará undefined.');
                        }
                        break
                    
                case 'Tipo de HabitaciÃ³n':
                    objetoMapeado['Tipo_de_Habitaci_n'] = objeto[clave];
                    break;
                case 'Tipo de reserva':
                    objetoMapeado['Tipo_de_reserva'] = objeto[clave];
                    break;
                case 'TW Poliza':
                    objetoMapeado['TW_Poliza'] = objeto[clave];
                    break;
                case '1 AutorizaciÃ³n':
                    objetoMapeado['Autorizaci_n'] = objeto[clave];
                    break;
                case '1 Banco':
                    objetoMapeado['Banco'] = objeto[clave];
                    break;
                case '1 Digitos':
                    objetoMapeado['Digitos'] = objeto[clave];
                    break;
                case '1 Fecha':
                    objetoMapeado['Fecha'] = objeto[clave];
                    break;
                case '1 Monto':
                    objetoMapeado['Monto'] = objeto[clave];
                    break;
                case '1 Tipo de Tarjeta':
                    objetoMapeado['Tipo_de_Tarjeta'] = objeto[clave];
                    break;
                case '1 Titular':
                    objetoMapeado['Titular'] = objeto[clave];
                    break;
                case '2 AutorizaciÃ³n':
                    objetoMapeado['Autorizaci_n1'] = objeto[clave];
                    break;
                case '2 Banco':
                    objetoMapeado['Banco1'] = objeto[clave];
                    break;
                case '2 Digitos':
                    objetoMapeado['Digitos1'] = objeto[clave];
                    break;
                case '2 Fecha':
                    objetoMapeado['Fecha1'] = objeto[clave];
                    break;
                case '2 Monto':
                    objetoMapeado['Monto1'] = objeto[clave];
                    break;
                case '2 Tipo de Tarjeta':
                    objetoMapeado['Tipo_de_Tarjeta1'] = objeto[clave];
                    break;
                case '2 Titular':
                    objetoMapeado['Titular1'] = objeto[clave];
                    break;
                case '3 AutorizaciÃ³n':
                    objetoMapeado['Autorizaci_n2'] = objeto[clave];
                    break;
                case '3 Banco':
                    objetoMapeado['Banco2'] = objeto[clave];
                    break;
                case '3 Digitos':
                    objetoMapeado['Digitos2'] = objeto[clave];
                    break;
                case '3 Fecha':
                    objetoMapeado['Fecha2'] = objeto[clave];
                    break;
                case '3 Monto':
                    objetoMapeado['Monto2'] = objeto[clave];
                    break;
                case '3 Tipo de Tarjeta':
                    objetoMapeado['Tipo_de_Tarjeta2'] = objeto[clave];
                    break;
                case '3 Titular':
                    objetoMapeado['Titular2'] = objeto[clave];
                    break;
                case 'Reserva':
                    objetoMapeado['Name'] = objeto[clave];
                    break;
                case 'Fuente Reserva':
                    objetoMapeado['reservationSource'] = objeto[clave];
                    break;
                default:
                    break;
            }
        }
    }

    return objetoMapeado;
}
    async zohoIDsUpdateReservas(objeto: any): Promise<ReservasApi> {
        const objetoMapeado:ReservasApi = {

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
                    
                    case 'SiteId':
                        module = 'Hoteles';
                        criteriaBase = `(ContractID:equals:${valor})`;
                        
                        try {
                            const response: any = await this.consume.fetchData(criteriaBase, module)
                                .pipe(
                                    
                                ).toPromise();
            
                            if (response?.data?.length > 0) {
                                const zohoid = response.data[0].id;
                                objetoMapeado["Hotel"] = { "id": zohoid };
                                // console.log('ID obtenido de Campaigns:', zohoid);
                            } else {
                                // console.error('No se encontró campaña con el ID proporcionado', response);
                            }
                        } catch (error) {
                            console.error('Error procesando la petición de Oportunidad:', error);
                        }
                        break;
                    // case 'CampaÃƒa':
                    //     module = 'Salas';
                    //     criteriaBase = `(ContractID:equals:${valor})`;
                    //     // t_site donde siteid >= 1000 => clientCustom.dbo.cat_office_tsw 
                    //     try {
                    //         const response: any = await this.consume.fetchData(criteriaBase, module)
                    //             .pipe(
                                    
                    //             ).toPromise();
            
                    //         if (response?.data?.length > 0) {
                    //             const zohoid = response.data[0].id;
                    //             objetoMapeado["deal"] = { "id": zohoid };
                    //             // console.log('ID obtenido de Campaigns:', zohoid);
                    //         } else {
                    //             // console.error('No se encontró campaña con el ID proporcionado', response);
                    //         }
                    //     } catch (error) {
                    //         console.error('Error procesando la petición de Salas:', error);
                    //     }
                    //     break;
                
                }
                
            }
        }
    
        // Esperamos que todas las peticiones asíncronas se completen
        await Promise.all(peticiones);
    
        // Devolvemos el objeto mapeado
        return objetoMapeado;
    }

    convertirValor(valor: string | number | boolean): string | number | boolean {
            // Si es un string "true" o "false", convertirlo a booleano
            if (typeof valor === 'string') {
            if (valor === 'true') return true;
            if (valor === 'false') return false;
            }
            // Si es un string que representa un número, convertirlo a número
            if (typeof valor === 'string' && !isNaN(Number(valor))) {
            return Number(valor);
            }
            // Retornar el valor tal cual si ya es número o booleano
            return valor;
        }
}
