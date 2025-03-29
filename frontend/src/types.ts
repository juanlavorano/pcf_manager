export type PCF = {
  id: string;
  productName: string;
  emission: number;
  declaredUnit: Unit;
};

export type Unit = "kg" | "liter" | "m2";
