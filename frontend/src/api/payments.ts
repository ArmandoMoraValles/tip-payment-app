import axios from 'axios';

interface BreakdownItem {
  employee: string;
  amount: number;
  method: string;
}

export interface PaymentPayload {
  totalAmount: number;
  breakdown: BreakdownItem[];
}

const API_URL = 'http://localhost:3000/api/payments';

export const sendPayment = async (paymentData: PaymentPayload) => {
  const response = await axios.post(API_URL, paymentData, {
    responseType: 'blob',
  });

  return response.data;
};
