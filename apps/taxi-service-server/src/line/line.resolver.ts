import * as graphql from "@nestjs/graphql";
import { LineResolverBase } from "./base/line.resolver.base";
import { Line } from "./base/Line";
import { LineService } from "./line.service";

@graphql.Resolver(() => Line)
export class LineResolver extends LineResolverBase {
  constructor(protected readonly service: LineService) {
    super(service);
  }
}
