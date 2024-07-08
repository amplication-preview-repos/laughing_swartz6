import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LineService } from "./line.service";
import { LineControllerBase } from "./base/line.controller.base";

@swagger.ApiTags("lines")
@common.Controller("lines")
export class LineController extends LineControllerBase {
  constructor(protected readonly service: LineService) {
    super(service);
  }
}
