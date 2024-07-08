import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgencyService } from "./agency.service";
import { AgencyControllerBase } from "./base/agency.controller.base";

@swagger.ApiTags("agencies")
@common.Controller("agencies")
export class AgencyController extends AgencyControllerBase {
  constructor(protected readonly service: AgencyService) {
    super(service);
  }
}
