export class Human{}
export class Man extends Human{}
export class Woman extends Human{}

export class God{
/**
 * @returns Human[]
 */
  static create(){
    // code
   return [new Man,new Woman]
  }
}
