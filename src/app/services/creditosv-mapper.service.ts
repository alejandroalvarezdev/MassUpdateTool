import { Injectable } from '@angular/core';
import { ConsumeService } from './consume.service';
import { Creditosv } from '../models/creditosv.model';
import { CreditosvApi } from '../models/creditosv-api.model';

@Injectable({
    providedIn: 'root'
    })
    export class CreditosvMapperService {

        constructor(private consume:ConsumeService) {
        }
        mapearCreditoV(objeto: Creditosv): CreditosvApi {
            // Campos obligatorios
            const objetoMapeado: CreditosvApi = {
            };
        
    
            // Iterar sobre las claves del objeto original
            for (let clave in objeto) {
                if (objeto.hasOwnProperty(clave)) {
                                // Verificamos si el valor es válido
                                const valor = objeto[clave as keyof Creditosv];
                                if (valor === undefined || valor === null ) {
                                    continue; // No mapeamos la propiedad si es vacía o 0
                                    }
                                switch (clave) {
                                        case 'Tipo de Creditos':
                                            objetoMapeado['Tipo_de_Creditos'] = objeto[clave];
                                            break;
                                        case 'SoldInventoryID':
                                            objetoMapeado['SoldInventoryID'] = objeto[clave];
                                            break;
                                        // case 'Oportunidad':
                                        //     objetoMapeado['Oportunidad'] = objeto[clave];
                                        //     break;
                                        // case 'Contacto':
                                        //     objetoMapeado['Contacto'] = objeto[clave];
                                        //     break;
                                    
                                    }
            }
        }
    
        
        const objetoFinal: CreditosvApi = objetoMapeado as CreditosvApi;
        return objetoFinal;
        }
        async zohoIDsUpdateCreditoV(objeto: any): Promise<CreditosvApi> {
            const objetoMapeado:CreditosvApi = {
    
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
                                  // objetoMapeado["deal"] = { "id": zohoid };
                                  // console.log('ID obtenido de Campaigns:', zohoid);
                              } else {
                                  // console.error('No se encontró campaña con el ID proporcionado', response);
                              }
                          } catch (error) {
                              console.error('Error procesando la petición de Oportunidad:', error);
                          }
                          break;
                          // Pendiente a definir
                        case 'contactoID':
                            module = 'Contacts';
                            trimmedText = valor.substring(2);  // Modificamos el valor para este caso
                            criteriaBase = `(contactoID:equals:${trimmedText})`;
                            
                            try {
                                const response: any = await this.consume.fetchData(criteriaBase, module)
                                    .pipe(
                                        
                                    ).toPromise();
                
                                if (response?.data?.length > 0) {
                                    const zohoid = response.data[0].id;
                                    // objetoMapeado["deal"] = { "id": zohoid };
                                    // console.log('ID obtenido de Campaigns:', zohoid);
                                } else {
                                    // console.error('No se encontró campaña con el ID proporcionado', response);
                                }
                            } catch (error) {
                                console.error('Error procesando la petición de Contacto:', error);
                            }
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
