import { ObjConId } from "./obj-con-id.model";

export interface ReservasApi {
    // Información de la reserva (1)
    Autorizaci_n?: string;
    Banco?: string;
    Digitos?: string;
    Fecha?: string;
    Monto?: number;
    Tipo_de_Tarjeta?: string;
    Titular?: string;

    // Información de la reserva (2)
    Autorizaci_n1?: string;
    Banco1?: string;
    Digitos1?: string;
    Fecha1?: string;
    Monto1?: number;
    Tipo_de_Tarjeta1?: string;
    Titular1?: string;

    // Información de la reserva (3)
    Autorizaci_n2?: string;
    Banco2?: string;
    Digitos2?: string;
    Fecha2?: string;
    Monto2?: number;
    Tipo_de_Tarjeta2?: string;
    Titular2?: string;

    // Datos personales
    Adults?: number;
    Last_Name?: string;
    Campa_a?: string;
    Certificado?: string;
    Costo_Certificado?: number;
    Costo_de_la_reserva?: number;
    Destino?: string;
    Edades_menores?: string;
    Estado?: string;
    reservationSource?: string;
    Hotel?:ObjConId;
    Infants?: number;
    Check_In?: string;
    Menores?: string;
    Currency?: string;
    Noches?: number;
    First_Name?: string;
    Numero_de_habitaciones?: number;
    Contact?: ObjConId;
    Lead?: ObjConId;
    Name?: string;
    Reserva_Pagada?: boolean;

    // Información adicional
    CampaignID_nectcenter?: string;
    Sala_de_Presentaci_n?: ObjConId;
    Check_Out?: string;
    Tarifa_Preferencial?: boolean;
    Tipo_de_Habitaci_n?: string;
    Tipo_de_reserva?: string;
    TW_Poliza?: string;
}
