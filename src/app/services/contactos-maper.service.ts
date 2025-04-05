import { Injectable } from '@angular/core';
import { ContactosApi } from '../models/contactos-api.model';
import { Contactos } from '../models/contactos.model';
import { EstimacionesAPI } from '../models/estimaciones-api.model';
import { ConsumeService } from './consume.service';
import { Observable,of,catchError } from 'rxjs';
import { response } from 'express';


@Injectable({
    providedIn: 'root'
})
export class ContactosMaperService {
    
    constructor(private consume:ConsumeService) { }
    
mapearContactos(objeto:Contactos): ContactosApi {
        const objetoMapeado:ContactosApi = {
        "owner_bridge_id": "",
        "Last_Name":"."
    
        };
    // Iteramos sobre las claves del objeto original y asignamos valores al objeto mapeado

        
        for (let clave in objeto) {
            if (objeto.hasOwnProperty(clave)) {
                // Verificamos si el valor es válido
                const valor = objeto[clave as keyof Contactos];
                if (valor === undefined || valor === null ) {
                    continue; // No mapeamos la propiedad si es vacía o 0
                    }
            
            switch (clave) {
                case "4 Digitos":
                    objetoMapeado["Digitos"] = objeto[clave];
                    break;
                // case "Apellido Paterno":
                //     objetoMapeado["X"] = objeto[clave];
                //     break;
                case "Apellidos":
                    objetoMapeado["Last_Name"] = objeto[clave];
                    break;
                case "Calificacion":
                    objetoMapeado["Calificacion"] = objeto[clave];
                    break;
                case "Calle de Facturacion":
                    objetoMapeado["Calle_de_Facturacion"] = objeto[clave];
                    break;
                case "Calle para Correspondencia":
                    objetoMapeado["Calle_para_Correspondencia"] = objeto[clave];
                    break;
                // case "Campaña Principal":
                //     objetoMapeado["Campa_a_Principal"] = objeto[clave];
                //     break;
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
                // case "Coowner":
                //     objetoMapeado["CoOwner"] = objeto[clave];
                //     break;
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
                case "Fecha de nacimiento":
                    objetoMapeado["Date_of_Birth"] = objeto[clave];
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
                // case "Hora de creación":
                //     objetoMapeado["X"] = objeto[clave];
                //     break;
                // case "ID":

                //     objetoMapeado["X"] = objeto[clave];
                //     break;
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
                    if (typeof valor === 'string') {
                            objetoMapeado["Lenguaje_Secundario"] = [valor.trim()]; // Convertir a arreglo
                            } else if (Array.isArray(valor)) {
                                objetoMapeado["Lenguaje_Secundario"] = valor; // Si ya es un arreglo, no hacemos nada
                            } else {
                                objetoMapeado["Lenguaje_Secundario"] = []; // Si no es cadena ni arreglo, asignamos un arreglo vacío
                            }
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
                case "No. Exterior de Facturación":
                    objetoMapeado["No_Exterior_de_Facturaci_n"] = objeto[clave];
                    break;
                case "No. Interior de Facturacion":
                    objetoMapeado["No_Interior_de_Facturacion"] = objeto[clave];
                    break;
                case "Nombre":
                    objetoMapeado["First_Name"] = objeto[clave];
                    break;
                case "Numero Autorización":
                    objetoMapeado["Numero_Autorizaci_n"] = objeto[clave];
                    break;
                case "Numero de Noches":
                    objetoMapeado["Numero_de_Noches"] = objeto[clave];
                    break;
                case "Número de prospecto":
                    objetoMapeado["Numero_de_Prospecto"] = objeto[clave];
                    break;
                case "Numero Exterior":
                    objetoMapeado["Numero_Exterior"] = objeto[clave];
                    break;
                case "Numero Interior":
                    objetoMapeado["Numero_Interior"] = objeto[clave];
                    break;
                case "Numero_de_prospecto_netcenter":
                    objetoMapeado["Numero_de_prospecto_netcenter"] = objeto[clave];
                    break;
                case "Owner ID":
                    objetoMapeado["Numero_de_Socio"] = objeto[clave];
                    break;
                case "owner_bridge_id":
                    objetoMapeado["owner_bridge_id"] = objeto[clave];
                    break;
                case "País de Facturación":
                    objetoMapeado["Pais_de_Facturacion"] = objeto[clave];
                    break;
                case "País para correspondencia":
                    objetoMapeado["Mailing_Country"] = objeto[clave];
                    break;
                case "prospect_bridge_id":
                    objetoMapeado["prospect_bridge_id"] = objeto[clave];
                    break;
                case "Régimen Fiscal":
                    objetoMapeado["Residencia_Fiscal"] = objeto[clave];
                    break;
                case "Residencia Fiscal":
                    objetoMapeado["Regimen_Fiscal"] = objeto[clave];
                    break;
                case "RFC":
                    objetoMapeado["RFC"] = objeto[clave];
                    break;
                case "Saludo":
                    objetoMapeado["Salutation"] = objeto[clave];
                    break;
                case "Sexo":
                    objetoMapeado["Sexo"] = objeto[clave];
                    break;
                case "Tasa de cambio":
                    objetoMapeado["Exchange_Rate"] = objeto[clave];
                    break;
                case "Teléfono":
                    objetoMapeado["Phone"] = objeto[clave];
                    break;
                case "Telefono particular":
                    objetoMapeado["Home_Phone"] = objeto[clave];
                    break;
                case "Terminal":
                    objetoMapeado["Terminal"] = objeto[clave];
                    break;
                case "Tipo de Contacto":
                    objetoMapeado["Tipo_de_Contacto"] = objeto[clave];
                    break;
                // case "Título":
                //     objetoMapeado["Title"] = objeto[clave];
                //     break;
                case "Uso de CFDI":
                    objetoMapeado["Uso_de_CFDI"] = objeto[clave];
                    break;
                case "Vigencia":
                    objetoMapeado["Vigencia"] = objeto[clave];
                    break;
                case "CoOwnProsID":
                    objetoMapeado["CoOwnprosID"] = objeto[clave];
                    break;
                case "contactoID":
                objetoMapeado["contactoID"] = objetoMapeado[clave];
                break; 
                default:
                    // Puedes manejar el caso cuando no se encuentra una coincidencia
                    break;
            }
            
            
                

            

            }
            }
            return objetoMapeado;
        
        

    // const objetoFinal: ContactosApi = objetoMapeado as unknown as ContactosApi;
    //     return objetoFinal;
    }


async zohoIDsUpdateContacts(objeto: any): Promise<ContactosApi> {
    const objetoMapeado:ContactosApi = {
        "owner_bridge_id": ""
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

            switch (clave) {
                case "Apellidos":
                objetoMapeado["Last_Name"] = objeto[clave];
                break;
                case "owner_bridge_id":
                objetoMapeado["owner_bridge_id"] = objeto[clave];
                break;
                case "Campaña Principal":
                    module = 'Campaigns';
                    criteriaBase = `(CampaignID_tsw:equals:${valor})`;
                    
                    try {
                        const response: any = await this.consume.fetchData(criteriaBase, module)
                            .pipe(
                                
                            ).toPromise();
        
                        if (response?.data?.length > 0) {
                            const zohoid = response.data[0].id;
                            objetoMapeado["Campa_a_Principal"] = { "id": zohoid };
                            // console.log('ID obtenido de Campaigns:', zohoid);
                        } else {
                            // console.error('No se encontró campaña con el ID proporcionado', response);
                        }
                    } catch (error) {
                        console.error('Error procesando la petición de Campaigns:', error);
                    }
                    break;
        
                case "COcontactoID":
                    module = 'Contacts';
                    let trimmedText: string = valor;  // Suponiendo que "valor" tiene el texto original
                    trimmedText = trimmedText.substring(2);  // Asignamos el resultado de substring(2) 
                    
                    criteriaBase = `(contactoID:equals:${trimmedText})`;
        
                    try {
                        const response: any = await this.consume.fetchData(criteriaBase, module)
                            .pipe(
                                // catchError((error) => {
                                //     console.error('Error en la petición de Coowner:', error);
                                //     return of(null);
                                // })
                            ).toPromise();
        
                        if (response?.data?.length > 0) {
                            let zohoid = response.data[0].id;
                            objetoMapeado["CoOwner"] = { "id": zohoid };
                            console.log('ID obtenido de Coowner:', zohoid);
                        } else {
                            console.error('No se encontró un Coowner con el ID proporcionado', response);
                        }
                    } catch (error) {
                        // console.error('Error procesando la petición de Coowner:', error);
                    }
                    break;
        
                // Otros casos pueden ser agregados aquí según sea necesario

            }
        }
    }

    // Esperamos que todas las peticiones asíncronas se completen
    await Promise.all(peticiones);

    // Devolvemos el objeto mapeado
    return objetoMapeado;
}
}