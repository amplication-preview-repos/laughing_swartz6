import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgencyServiceBase } from "./base/agency.service.base";

@Injectable()
export class AgencyService extends AgencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
