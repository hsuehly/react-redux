export type StoreState = number;
export type Count = (preState: any, action: any)=>void

export interface perObj {
  id: string
  name: string
  age: number
}