import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LineServiceBase } from "./base/line.service.base";

@Injectable()
export class LineService extends LineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
