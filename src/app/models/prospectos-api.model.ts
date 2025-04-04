import { ObjConId } from "./obj-con-id.model";

export interface ProspectosApi {
        API_Name?: string;
        Digitos?: string;
        Apellido_Materno?: string;
        Apellido_Paterno?: string;
        Last_Name?: string;
        Rating?: string;
        Calle?: string;
        Campana_Principal?: string;
        Casa_Ofertas?: boolean;
        City?: string;
        Fuente_Aeropuertos?: string;
        Colonia?: string;
        coprospect_bridge_id?: string;
        Email?: string;
        Secondary_Email?: string;
        CP_Apellido_Materno?: string;
        CP_Apellido?: string;
        CP_Correo_Electronico?: string;
        CP_Edad?: number;
        CP_Empresa_donde_labora?: string;
        CP_Fecha_de_Nacimiento?: string;
        CP_Movil?: string;
        CP_Nombre?: string;
        CP_Puesto?: string;
        CP_Telefono?: string;
        Empresa_donde_labora?: string;
        Estado_civil?: string;
        Lead_Status?: string;
        State?: string;
        Fecha_de_Nacimiento?: string;
        Folio?: string;
        Forma_de_Pago?: string;
        Lead_Source?: string;
        Hook?: boolean;
        Importe_Cobrado?: number;
        Ingresos_Mensuales?: string;
        Lenguaje_de_Contacto?: string;
        Locacion1?: string;
        Currency?: string;
        Mobile?: string;
        Municipio?: string;
        Pais_de_Nacimiento?: string;
        First_Name?: string;
        No_Exterior?: string;
        No_Interior?: string;
        Numero_Autorizacion?: string;
        Numero_de_Noches?: number;
        Numero_de_Prospecto?: string;
        Numero_de_prospecto_netcenter?: string;
        Designation?: string;
        Country?: string;
        prospect_bridge_id?: string;
        Sala_Referido?: string;
        Sexo?: string;
        Exchange_Rate?: number;
        Phone?: string;
        Terminal?: string;
        Vigencia?: number;
        Zip_Code?:string
        Campa_a_Principal?:ObjConId
        TEventoId?:number
}
