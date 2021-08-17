import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { Invoice, Prisma } from '@prisma/client';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async invoice(id: Prisma.InvoiceWhereUniqueInput): Promise<Invoice | null> {
    return this.prisma.invoice.findUnique({ where: id });
  }

  async invoices(): Promise<Invoice[]> {
    return this.prisma.invoice.findMany();
  }

  async createInvoice(data: Prisma.InvoiceCreateInput): Promise<Invoice> {
    return this.prisma.invoice.create({
      data,
    });
  }
}
