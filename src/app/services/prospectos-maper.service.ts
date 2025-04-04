import { Injectable } from '@angular/core';
import { ProspectosApi } from '../models/prospectos-api.model';
import { Prospectos } from '../models/prospectos.model';
import { ConsumeService } from './consume.service';
import { ObjConId } from '../models/obj-con-id.model';

@Injectable({
    providedIn: 'root'
})
export class ProspectosMaperService {

    constructor(private consume:ConsumeService) { }
    mapearProspectos(objeto:Prospectos): ProspectosApi {
            const objetoMapeado:ProspectosApi = {
        
            };
        // Iteramos sobre las claves del objeto original y asignamos valores al objeto mapeado
    
            
            for (let clave in objeto) {
                if (objeto.hasOwnProperty(clave)) {
                    // Verificamos si el valor es válido
                    let valor = objeto[clave as keyof Prospectos];
                    if (valor === "true") {
                        valor = true;
                    } else if (valor === "false") {
                        valor = false;
                    }
                    if (valor === undefined || valor === null ) {
                        continue; // No mapeamos la propiedad si es vacía o 0
                        }

                            switch (clave) {
                            case "4 Digitos":
                                objetoMapeado["Digitos"] = objeto[clave];
                                break;
                            case "Apellido Materno":
                                objetoMapeado["Apellido_Materno"] = objeto[clave];
                                break;
                            case "Apellido Paterno":
                                objetoMapeado["Apellido_Paterno"] = objeto[clave];
                                break;
                                case "Apellidos":
                                // Elimina los espacios en blanco al principio y al final
                                valor = valor.trim();
                                objetoMapeado["Last_Name"] = objeto[clave];
                                // Si el valor recortado está vacío, asigna un valor por defecto (en este caso, un punto ".")
                                if (valor === '') {
                                    objetoMapeado["Last_Name"] = ".";
                                } else {
                                    // Si el valor no está vacío, asigna el valor recortado
                                    objetoMapeado["Last_Name"] = valor;
                                }
                                break;
                            case "Calificación":
                                objetoMapeado["Rating"] = objeto[clave];
                                break;
                            case "Calle":
                                objetoMapeado["Calle"] = objeto[clave];
                                break;
                            // case "Campaña Principal":
                            //     objetoMapeado["Campana_Principal"] = objeto[clave];
                            //     break;
                            case "Caza Ofertas":
                                valor = this.convertirValor(valor);
                                objetoMapeado["Casa_Ofertas"] = objeto[clave];
                                objetoMapeado["Casa_Ofertas"] = valor;
                                break;
                            case "Ciudad":
                                objetoMapeado["City"] = objeto[clave];
                                break;
                            case "Ciudad Locación":
                                objetoMapeado["Fuente_Aeropuertos"] = objeto[clave];
                                break;
                            case "Código postal":
                                objetoMapeado["Zip_Code"] = objeto[clave];
                                break;
                            case "Colonia":
                                objetoMapeado["Colonia"] = objeto[clave];
                                break;
                            case "coprospect_bridge_id":
                                objetoMapeado["coprospect_bridge_id"] = objeto[clave];
                                break;
                            case "Correo electrónico":
                                objetoMapeado["Email"] = objeto[clave];
                                break;
                            case "Correo electrónico secundario":
                                objetoMapeado["Secondary_Email"] = objeto[clave];
                                break;
                            case "CP Apellido Materno":
                                objetoMapeado["CP_Apellido_Materno"] = objeto[clave];
                                break;
                            case "CP Apellido Paterno":
                                objetoMapeado["CP_Apellido"] = objeto[clave];
                                break;
                            case "CP Correo Electronico":
                                objetoMapeado["CP_Correo_Electronico"] = objeto[clave];
                                break;
                            case "CP Edad":
                                objetoMapeado["CP_Edad"] = objeto[clave];
                                break;
                            case "CP Empresa donde labora":
                                objetoMapeado["CP_Empresa_donde_labora"] = objeto[clave];
                                break;
                            case "CP Fecha de Nacimiento":
                                
                                const dateParts = valor.split("-");

                                // Si el año es menor que 1900 (por ejemplo, 0001), lo ajustamos a 1900
                                if (parseInt(dateParts[0]) < 1900) {
                                dateParts[0] = "1900";
                                }

                                // Unificamos la fecha de nuevo a formato "yyyy-MM-dd"
                                const adjustedDateString = dateParts.join("-");

                                objetoMapeado["CP_Fecha_de_Nacimiento"] = objeto[clave];
                                objetoMapeado["CP_Fecha_de_Nacimiento"] = adjustedDateString;
                                break;
                            case "CP Movil":
                                objetoMapeado["CP_Movil"] = objeto[clave];
                                break;
                            case "CP Nombre":
                                objetoMapeado["CP_Nombre"] = objeto[clave];
                                break;
                            case "CP Ocupación":
                                objetoMapeado["Designation"] = objeto[clave];
                                break;
                            case "CP Telefono":
                                objetoMapeado["CP_Telefono"] = objeto[clave];
                                break;
                            // case "CP Título":
                            //     objetoMapeado["CP_Titulo"] = objeto[clave];
                            //     break;
                            case "Empresa donde labora":
                                objetoMapeado["Empresa_donde_labora"] = objeto[clave];
                                break;
                            case "Estado civil":
                                objetoMapeado["Estado_civil"] = objeto[clave];
                                break;
                            case "Estado de Prospecto":
                                objetoMapeado["Lead_Status"] = objeto[clave];
                                break;
                            case "Estado/Provincia":
                                objetoMapeado["State"] = objeto[clave];
                                break;
                            case "Fecha de Nacimiento":
                                objetoMapeado["Fecha_de_Nacimiento"] = objeto[clave];
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
                            case "Hook":
                                valor = this.convertirValor(valor);
                                objetoMapeado["Hook"] = objeto[clave];
                                objetoMapeado["Hook"] = valor;
                                break;
                            // case "ID":
                            //     objetoMapeado["ID"] = objeto[clave];
                            //     break;
                            case "Importe Cobrado":
                                objetoMapeado["Importe_Cobrado"] = objeto[clave];
                                break;
                            case "Ingresos Mensuales":
                                objetoMapeado["Ingresos_Mensuales"] = objeto[clave];
                                break;
                            case "Lenguaje de Contacto":
                                objetoMapeado["Lenguaje_de_Contacto"] = objeto[clave];
                                break;
                            case "Locacion":
                                objetoMapeado["Locacion1"] = objeto[clave];
                                break;
                                case "Moneda":
                                    objetoMapeado["Currency"] = objeto[clave] || "USD"; // Si objeto[clave] es vacío, asigna "MXN"
                                    break;                                
                            case "Móvil":
                                objetoMapeado["Mobile"] = objeto[clave];
                                break;
                            case "Municipio":
                                objetoMapeado["Municipio"] = objeto[clave];
                                break;
                            case "Nacionalidad":
                                objetoMapeado["Pais_de_Nacimiento"] = objeto[clave];
                                break;
                            case "Nombre":
                                objetoMapeado["First_Name"] = objeto[clave];
                                break;
                            case "No. Exterior":
                                objetoMapeado["No_Exterior"] = objeto[clave];
                                break;
                            case "No. Interior":
                                objetoMapeado["No_Interior"] = objeto[clave];
                                break;
                            case "Numero Autorización":
                                objetoMapeado["Numero_Autorizacion"] = objeto[clave];
                                break;
                            case "Numero de Noches":
                                objetoMapeado["Numero_de_Noches"] = objeto[clave];
                                break;
                            case "Numero de Prospecto":
                                objetoMapeado["Numero_de_Prospecto"] = objeto[clave];
                                break;
                            case "Numero_de_prospecto_netcenter":
                                objetoMapeado["Numero_de_prospecto_netcenter"] = objeto[clave];
                                break;
                            case "Ocupación":
                                objetoMapeado["Designation"] = objeto[clave];
                                break;
                            case "País":
                                objetoMapeado["Country"] = objeto[clave];
                                break;
                            case "prospect_bridge_id":
                                objetoMapeado["prospect_bridge_id"] = objeto[clave];
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
                            case "Terminal":
                                objetoMapeado["Terminal"] = objeto[clave];
                                break;
                            // case "Título":
                            //     objetoMapeado["Titulo"] = objeto[clave];
                            //     break;
                            case "Vigencia (Meses)":
                                objetoMapeado["Vigencia"] = objeto[clave]
                                valor = parseInt(valor);

                                // Verificamos si el valor es un número válido
                                if (!isNaN(valor)) {
                                    objetoMapeado["Vigencia"] = valor;
                                } else {
                                    // Si no es un número válido, se asigna un valor por defecto o un mensaje de error
                                    objetoMapeado["Vigencia"] = 0;  // O cualquier valor por defecto que desees
                                    // console.warn("Valor de 'Vigencia' no es un número válido.");
                                }
                                break;
                                case 'teventoid':
                                objetoMapeado["TEventoId"] = objeto[clave];
                                break; 
                            default:
                                // Manejar caso por defecto si es necesario
                                break;
                        }
                        
                
                
                    
    
                
    
                }
                }
                return objetoMapeado;
            
            
                
       // const objetoFinal: ContactosApi = objetoMapeado as unknown as ContactosApi;
       //     return objetoFinal;
        }
    async zohoIDsUpdateProspects(objeto: any): Promise<ProspectosApi> {
        const objetoMapeado:ProspectosApi = {
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
                    case "Nombre": 
                    objetoMapeado["First_Name"] = objeto[clave];
                    break; 
                    case "Móvil": 
                    objetoMapeado["Mobile"] = objeto[clave];
                    break;
                    case "Lenguaje de Contacto": 
                    objetoMapeado["Lenguaje_de_Contacto"] = objeto[clave]; 
                    break;
                    case "Apellidos":
                    objetoMapeado["Last_Name"] = objeto[clave];
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
                    
                    case 'prospect_bridge_id': 
                    objetoMapeado["prospect_bridge_id"] = objeto[clave];
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
    
    convertirValor(valor: string | number | boolean | ObjConId): string | number | boolean | ObjConId {
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

