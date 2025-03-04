import { ObjConId } from '../models/obj-con-id.model';

export interface Oportunidades {
  "ContractID"?: string;  // Línea única
  "Balance CDP"?: string;  // Cambio a string ya que contiene valores vacíos o numéricos como string
  "Balance Pick Up"?: string;  // Cambio a string ya que contiene valores vacíos o numéricos como string
  "Calificaciones"?: string;  // Asumido como texto (string)
  "CAT Anual"?: string;  // Cambio a string ya que está representado como un string (por ejemplo, "11.900")
  "Co-Propietario"?: ObjConId;  // Reemplazamos con ObjConId (opcional)
  "contract_bridge_id"?: string;  // Reemplazamos con ObjConId (opcional)
  "Contratos Anteriores (Ajuste)"?: ObjConId;  // Reemplazamos con ObjConId (opcional)
  "Club"?: string;  // Lista de selección
  "Créditos Totales"?: string;  // Cambio a string porque está representado como string (por ejemplo, "15000.00") (opcional)
  "Cross Reference"?: string;  // Asumido como texto (string)
  "Cuota Anual (USD)"?: string;  // Cambio a string ya que contiene valores como "555.00" en formato string
  "Enganche_Pactado"?: string;  // Cambio a string ya que contiene valores como "2987.50" en formato string
  "Equity"?: string;  // Cambio a string ya que contiene valores como "8950.65" en formato string
  "Es un club de Semanas?"?: boolean;  // Valor booleano
  "Estado Civil"?: string;  // Asumido como texto (string) (opcional)
  "Etiqueta"?: string;  // Línea única
  "Fase"?: string;  // Asumido como texto (string)
  "Fecha de cierre"?: string;  // Cambio a string ya que es representado como "1996-03-12"
  "Fecha de primera Mensualidad"?: string;  // Cambio a string ya que es representado como "1996-04-16"
  "Fecha de Venta"?: string;  // Cambio a string ya que es representado como "1996-03-12"
  "Fecha Primer Uso"?: string;  // Cambio a string ya que es representado como "1997-01-01"
  "Fecha Ultimo Pago"?: string;  // Cambio a string ya que está vacío o no tiene fecha (opcional)
  "Finanzas Aceptada"?: ObjConId;  // Reemplazamos con ObjConId (opcional)
  "Fuente de Campaña"?: ObjConId;  // Reemplazamos con ObjConId (opcional)
  "Fuente de Prospecto"?: string;  // Asumido como texto (string)
  "Hook"?: boolean;  // Asumido como booleano (opcional)
  "Importe"?: string;  // Cambio a string ya que contiene valores como "11950.00" en formato string
  "Ingresos Mensuales"?: string;  // Cambio a string ya que está vacío o no contiene valor numérico (opcional)
  "Membresía del Club"?: string;  // Línea única
  "Moneda"?: string;  // Lista de selección
  "Morosidad AR (USD)"?: string;  // Cambio a string porque está representado como "9.63"
  "Morosidad Down Payment"?: string;  // Cambio a string porque está representado como "0.0000"
  "Morosidad Folios (USD)"?: string;  // Cambio a string ya que está vacío (opcional)
  "Morosidad Morgage"?: string;  // Cambio a string ya que está vacío (opcional)
  "Motivo de la pérdida"?: string;  // Asumido como texto (string) (opcional)
  "Nombre de Contacto"?: ObjConId;  // Línea única (opcional)
  "Nombre de Oportunidad"?: ObjConId;  // Línea única
  "Nota de Cancelacion"?: string;  // Asumido como texto (string) (opcional)
  "Oportunidad upgraded"?: ObjConId;  // Reemplazamos con ObjConId (opcional)
  "PremPromisedID"?: string;  // Línea única (opcional)
  "Probabilidad (%)"?: string;  // Cambio a string porque es representado como "100" en formato string
  "Sala"?: ObjConId;  // Reemplazamos con ObjConId (opcional)
  "Sale_type"?: string;  // Asumido como texto (string)
  "Tasa de cambio"?: string;  // Cambio a string porque está representado como "1.00000"
  "Tipo"?: string;  // Asumido como texto (string)
  "ContractID2"?: string;  // Línea única
}
