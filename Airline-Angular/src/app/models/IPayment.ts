export interface IPayment{
  id: number,
  user_id: number,
  flight_id: number,
  payment_mode: string,
  date_of_payment: any,
  amount: any
}