import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateCarDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    modelo: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    ano: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    placa: string;
}
