import fs from 'fs';
import path from 'path';
import { Payment } from '../types/payment.types';

const dbPath = path.join(__dirname, '../database/payments.json');

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, '[]');
}

export const savePayment = (payment: Payment): Payment => {
  let payments: Payment[] = [];

  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
    payments = data.trim() ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading payments.json:', error);
    payments = [];
  }

  payments.push(payment);

  fs.writeFileSync(dbPath, JSON.stringify(payments, null, 2));
  return payment;
};

export const getPayments = (): Payment[] => {
  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return data.trim() ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading payments.json:', error);
    return [];
  }
};
