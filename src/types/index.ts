import { MouseEventHandler } from "react";



export type ButtonPropsType= {
    title:string;
    designs?:string;
    btnType?:"button"|"submit"|"reset";
    disabled?:boolean;
    rIcon?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}


export interface CarType{
    city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: 'fwd' | 'rwd ' | 'awd' | '4wd ';
  fuel_type: 'gas' | 'electricity' | 'diesel';
  highway_mpg: number;
  make: string;
  model: string;
  transmission: 'a' | 'm';
  year: number;

}

export type filterType={
    make?: string;
    model?: string;
    limit?: string;
    fuel_type?: string;
    year?: string;
}