import * as graphql from "@nestjs/graphql";
import { AgencyResolverBase } from "./base/agency.resolver.base";
import { Agency } from "./base/Agency";
import { AgencyService } from "./agency.service";

@graphql.Resolver(() => Agency)
export class AgencyResolver extends AgencyResolverBase {
  constructor(protected readonly service: AgencyService) {
    super(service);
  }
}
