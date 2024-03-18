import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSum(soA:number, soB:number): number {
    return soA + soB;
  }
}
