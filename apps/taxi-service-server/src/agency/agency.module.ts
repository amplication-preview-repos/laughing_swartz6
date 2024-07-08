import { Module } from "@nestjs/common";
import { AgencyModuleBase } from "./base/agency.module.base";
import { AgencyService } from "./agency.service";
import { AgencyController } from "./agency.controller";
import { AgencyResolver } from "./agency.resolver";

@Module({
  imports: [AgencyModuleBase],
  controllers: [AgencyController],
  providers: [AgencyService, AgencyResolver],
  exports: [AgencyService],
})
export class AgencyModule {}
