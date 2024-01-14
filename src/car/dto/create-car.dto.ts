import {IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    modelo: string;

    @IsNumber()
    @IsNotEmpty()
    ano: number;

    @IsString()
    @IsNotEmpty()
    placa: string;
}
