import { NextFunction, Request, Response } from 'express';
import { savePayment } from '../models/payment.model';
import { Payment, BreakdownItem } from '../types/payment.types';
import { v4 as uuidv4 } from 'uuid';
import PDFDocument from 'pdfkit';

export const createPayment = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { totalAmount, breakdown } = req.body;

    if (!totalAmount || !breakdown || !Array.isArray(breakdown)) {
      res.status(400).json({ message: 'Missing or invalid required fields' });
      return;
    }

    const newPayment: Payment = {
      id: uuidv4(),
      totalAmount,
      breakdown,
      createdAt: new Date(),
    };

    savePayment(newPayment);

    const doc = new PDFDocument({
      size: [220, 600],
      margins: { top: 10, bottom: 10, left: 10, right: 10 }
    });
    const chunks: Uint8Array[] = [];
    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => {
      const result = Buffer.concat(chunks);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=payment.pdf');
      res.send(result);
    });

    doc.fontSize(16).text('TICKET', { align: 'center' });
    doc.moveDown().fontSize(12).text(`Total: $${totalAmount}`);
    doc.text(`Fecha: ${newPayment.createdAt.toLocaleString()}`);
    doc.moveDown().text('Desglose:');

    newPayment.breakdown.forEach((b: BreakdownItem) => {
      doc.text(`-$${b.amount} (${b.method})`);
    });

    doc.end();

  } catch (error) {
    next(error);
  }
};
