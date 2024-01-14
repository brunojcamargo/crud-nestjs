import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCarDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    modelo: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    ano: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    placa: string;
}
