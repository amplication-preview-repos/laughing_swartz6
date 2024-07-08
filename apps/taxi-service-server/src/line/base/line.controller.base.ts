/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LineService } from "../line.service";
import { LineCreateInput } from "./LineCreateInput";
import { Line } from "./Line";
import { LineFindManyArgs } from "./LineFindManyArgs";
import { LineWhereUniqueInput } from "./LineWhereUniqueInput";
import { LineUpdateInput } from "./LineUpdateInput";

export class LineControllerBase {
  constructor(protected readonly service: LineService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Line })
  async createLine(@common.Body() data: LineCreateInput): Promise<Line> {
    return await this.service.createLine({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fromLocation: true,
        toLocation: true,
        rides: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Line] })
  @ApiNestedQuery(LineFindManyArgs)
  async lines(@common.Req() request: Request): Promise<Line[]> {
    const args = plainToClass(LineFindManyArgs, request.query);
    return this.service.lines({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fromLocation: true,
        toLocation: true,
        rides: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Line })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async line(
    @common.Param() params: LineWhereUniqueInput
  ): Promise<Line | null> {
    const result = await this.service.line({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fromLocation: true,
        toLocation: true,
        rides: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Line })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLine(
    @common.Param() params: LineWhereUniqueInput,
    @common.Body() data: LineUpdateInput
  ): Promise<Line | null> {
    try {
      return await this.service.updateLine({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fromLocation: true,
          toLocation: true,
          rides: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Line })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLine(
    @common.Param() params: LineWhereUniqueInput
  ): Promise<Line | null> {
    try {
      return await this.service.deleteLine({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fromLocation: true,
          toLocation: true,
          rides: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
