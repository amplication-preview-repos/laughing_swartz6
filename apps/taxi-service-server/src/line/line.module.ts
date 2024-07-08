import { Module } from "@nestjs/common";
import { LineModuleBase } from "./base/line.module.base";
import { LineService } from "./line.service";
import { LineController } from "./line.controller";
import { LineResolver } from "./line.resolver";

@Module({
  imports: [LineModuleBase],
  controllers: [LineController],
  providers: [LineService, LineResolver],
  exports: [LineService],
})
export class LineModule {}
