import { Controller, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseDto } from 'src/common/response.dto';
import { PlatformVo } from './dto/platformVo';

@ApiTags('04. 플랫폼')
@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformService: PlatformsService) {}

  /**
   * 플랫폼 전체 조회
   *
   *
   */
  @Get()
  @HttpCode(200)
  async getAllPlatforms(): Promise<ResponseDto<PlatformVo[]>> {
    return new ResponseDto(await this.platformService.findAllPlatforms());
  }

  /**
   * 전체 플랫폼 별점 Top5 조회
   *
   *
   */
  @Get('topRated')
  @HttpCode(200)
  async getTopRatedPlatforms(): Promise<ResponseDto<PlatformVo[]>> {
    return new ResponseDto(await this.platformService.getTopRatedPlatforms());
  }

  /**
   * 플랫폼 ID로 상세조회
   *
   */
  @Get(':id')
  @HttpCode(200)
  async getOnePlatformById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseDto<PlatformVo>> {
    return new ResponseDto(await this.platformService.findOnePlatformById(id));
  }
}
