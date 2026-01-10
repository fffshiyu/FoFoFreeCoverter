// 单位转换工具函数

export type UnitCategory = 
  | 'length' 
  | 'weight' 
  | 'temperature' 
  | 'volume' 
  | 'time' 
  | 'area' 
  | 'speed' 
  | 'energy'
  | 'pressure'
  | 'power'
  | 'data'
  | 'angle'
  | 'frequency'
  | 'force'
  | 'torque'
  | 'density'
  | 'currency';

export interface Unit {
  name: string;
  symbol: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

// 长度单位转换（以米为基准）
export const lengthUnits: Record<string, Unit> = {
  meter: {
    name: '米',
    symbol: 'm',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilometer: {
    name: '千米',
    symbol: 'km',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  centimeter: {
    name: '厘米',
    symbol: 'cm',
    toBase: (v) => v / 100,
    fromBase: (v) => v * 100,
  },
  millimeter: {
    name: '毫米',
    symbol: 'mm',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  inch: {
    name: '英寸',
    symbol: 'in',
    toBase: (v) => v * 0.0254,
    fromBase: (v) => v / 0.0254,
  },
  foot: {
    name: '英尺',
    symbol: 'ft',
    toBase: (v) => v * 0.3048,
    fromBase: (v) => v / 0.3048,
  },
  yard: {
    name: '码',
    symbol: 'yd',
    toBase: (v) => v * 0.9144,
    fromBase: (v) => v / 0.9144,
  },
  mile: {
    name: '英里',
    symbol: 'mi',
    toBase: (v) => v * 1609.344,
    fromBase: (v) => v / 1609.344,
  },
  nauticalMile: {
    name: '海里',
    symbol: 'nmi',
    toBase: (v) => v * 1852,
    fromBase: (v) => v / 1852,
  },
};

// 重量单位转换（以千克为基准）
export const weightUnits: Record<string, Unit> = {
  kilogram: {
    name: '千克',
    symbol: 'kg',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  gram: {
    name: '克',
    symbol: 'g',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  milligram: {
    name: '毫克',
    symbol: 'mg',
    toBase: (v) => v / 1000000,
    fromBase: (v) => v * 1000000,
  },
  ton: {
    name: '吨',
    symbol: 't',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  pound: {
    name: '磅',
    symbol: 'lb',
    toBase: (v) => v * 0.453592,
    fromBase: (v) => v / 0.453592,
  },
  ounce: {
    name: '盎司',
    symbol: 'oz',
    toBase: (v) => v * 0.0283495,
    fromBase: (v) => v / 0.0283495,
  },
  stone: {
    name: '英石',
    symbol: 'st',
    toBase: (v) => v * 6.35029,
    fromBase: (v) => v / 6.35029,
  },
};

// 温度单位转换（特殊处理）
export const temperatureUnits: Record<string, Unit> = {
  celsius: {
    name: '摄氏度',
    symbol: '°C',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  fahrenheit: {
    name: '华氏度',
    symbol: '°F',
    toBase: (v) => (v - 32) * 5 / 9,
    fromBase: (v) => v * 9 / 5 + 32,
  },
  kelvin: {
    name: '开尔文',
    symbol: 'K',
    toBase: (v) => v - 273.15,
    fromBase: (v) => v + 273.15,
  },
};

// 体积单位转换（以升为基准）
export const volumeUnits: Record<string, Unit> = {
  liter: {
    name: '升',
    symbol: 'L',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  milliliter: {
    name: '毫升',
    symbol: 'mL',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  cubicMeter: {
    name: '立方米',
    symbol: 'm³',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  cubicCentimeter: {
    name: '立方厘米',
    symbol: 'cm³',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  gallon: {
    name: '加仑',
    symbol: 'gal',
    toBase: (v) => v * 3.78541,
    fromBase: (v) => v / 3.78541,
  },
  quart: {
    name: '夸脱',
    symbol: 'qt',
    toBase: (v) => v * 0.946353,
    fromBase: (v) => v / 0.946353,
  },
  pint: {
    name: '品脱',
    symbol: 'pt',
    toBase: (v) => v * 0.473176,
    fromBase: (v) => v / 0.473176,
  },
  cup: {
    name: '杯',
    symbol: 'cup',
    toBase: (v) => v * 0.236588,
    fromBase: (v) => v / 0.236588,
  },
  fluidOunce: {
    name: '液盎司',
    symbol: 'fl oz',
    toBase: (v) => v * 0.0295735,
    fromBase: (v) => v / 0.0295735,
  },
};

// 时间单位转换（以秒为基准）
export const timeUnits: Record<string, Unit> = {
  second: {
    name: '秒',
    symbol: 's',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  millisecond: {
    name: '毫秒',
    symbol: 'ms',
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  minute: {
    name: '分钟',
    symbol: 'min',
    toBase: (v) => v * 60,
    fromBase: (v) => v / 60,
  },
  hour: {
    name: '小时',
    symbol: 'h',
    toBase: (v) => v * 3600,
    fromBase: (v) => v / 3600,
  },
  day: {
    name: '天',
    symbol: 'd',
    toBase: (v) => v * 86400,
    fromBase: (v) => v / 86400,
  },
  week: {
    name: '周',
    symbol: 'wk',
    toBase: (v) => v * 604800,
    fromBase: (v) => v / 604800,
  },
  month: {
    name: '月',
    symbol: 'mo',
    toBase: (v) => v * 2592000,
    fromBase: (v) => v / 2592000,
  },
  year: {
    name: '年',
    symbol: 'yr',
    toBase: (v) => v * 31536000,
    fromBase: (v) => v / 31536000,
  },
};

// 面积单位转换（以平方米为基准）
export const areaUnits: Record<string, Unit> = {
  squareMeter: {
    name: '平方米',
    symbol: 'm²',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  squareKilometer: {
    name: '平方千米',
    symbol: 'km²',
    toBase: (v) => v * 1000000,
    fromBase: (v) => v / 1000000,
  },
  squareCentimeter: {
    name: '平方厘米',
    symbol: 'cm²',
    toBase: (v) => v / 10000,
    fromBase: (v) => v * 10000,
  },
  hectare: {
    name: '公顷',
    symbol: 'ha',
    toBase: (v) => v * 10000,
    fromBase: (v) => v / 10000,
  },
  acre: {
    name: '英亩',
    symbol: 'ac',
    toBase: (v) => v * 4046.86,
    fromBase: (v) => v / 4046.86,
  },
  squareFoot: {
    name: '平方英尺',
    symbol: 'ft²',
    toBase: (v) => v * 0.092903,
    fromBase: (v) => v / 0.092903,
  },
  squareInch: {
    name: '平方英寸',
    symbol: 'in²',
    toBase: (v) => v * 0.00064516,
    fromBase: (v) => v / 0.00064516,
  },
  squareMile: {
    name: '平方英里',
    symbol: 'mi²',
    toBase: (v) => v * 2589988.11,
    fromBase: (v) => v / 2589988.11,
  },
};

// 速度单位转换（以米/秒为基准）
export const speedUnits: Record<string, Unit> = {
  meterPerSecond: {
    name: '米/秒',
    symbol: 'm/s',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilometerPerHour: {
    name: '千米/小时',
    symbol: 'km/h',
    toBase: (v) => v / 3.6,
    fromBase: (v) => v * 3.6,
  },
  milePerHour: {
    name: '英里/小时',
    symbol: 'mph',
    toBase: (v) => v * 0.44704,
    fromBase: (v) => v / 0.44704,
  },
  knot: {
    name: '节',
    symbol: 'kn',
    toBase: (v) => v * 0.514444,
    fromBase: (v) => v / 0.514444,
  },
  footPerSecond: {
    name: '英尺/秒',
    symbol: 'ft/s',
    toBase: (v) => v * 0.3048,
    fromBase: (v) => v / 0.3048,
  },
};

// 能量单位转换（以焦耳为基准）
export const energyUnits: Record<string, Unit> = {
  joule: {
    name: '焦耳',
    symbol: 'J',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilojoule: {
    name: '千焦',
    symbol: 'kJ',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  calorie: {
    name: '卡路里',
    symbol: 'cal',
    toBase: (v) => v * 4.184,
    fromBase: (v) => v / 4.184,
  },
  kilocalorie: {
    name: '千卡',
    symbol: 'kcal',
    toBase: (v) => v * 4184,
    fromBase: (v) => v / 4184,
  },
  wattHour: {
    name: '瓦时',
    symbol: 'Wh',
    toBase: (v) => v * 3600,
    fromBase: (v) => v / 3600,
  },
  kilowattHour: {
    name: '千瓦时',
    symbol: 'kWh',
    toBase: (v) => v * 3600000,
    fromBase: (v) => v / 3600000,
  },
  btu: {
    name: '英热单位',
    symbol: 'BTU',
    toBase: (v) => v * 1055.06,
    fromBase: (v) => v / 1055.06,
  },
};

// 压力单位转换（以帕斯卡为基准）
export const pressureUnits: Record<string, Unit> = {
  pascal: {
    name: '帕斯卡',
    symbol: 'Pa',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilopascal: {
    name: '千帕',
    symbol: 'kPa',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  bar: {
    name: '巴',
    symbol: 'bar',
    toBase: (v) => v * 100000,
    fromBase: (v) => v / 100000,
  },
  atmosphere: {
    name: '标准大气压',
    symbol: 'atm',
    toBase: (v) => v * 101325,
    fromBase: (v) => v / 101325,
  },
  psi: {
    name: '磅力每平方英寸',
    symbol: 'psi',
    toBase: (v) => v * 6894.76,
    fromBase: (v) => v / 6894.76,
  },
  torr: {
    name: '托',
    symbol: 'Torr',
    toBase: (v) => v * 133.322,
    fromBase: (v) => v / 133.322,
  },
};

// 功率单位转换（以瓦特为基准）
export const powerUnits: Record<string, Unit> = {
  watt: {
    name: '瓦特',
    symbol: 'W',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilowatt: {
    name: '千瓦',
    symbol: 'kW',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  megawatt: {
    name: '兆瓦',
    symbol: 'MW',
    toBase: (v) => v * 1000000,
    fromBase: (v) => v / 1000000,
  },
  horsepower: {
    name: '马力',
    symbol: 'hp',
    toBase: (v) => v * 745.7,
    fromBase: (v) => v / 745.7,
  },
  btuPerHour: {
    name: 'BTU/小时',
    symbol: 'BTU/h',
    toBase: (v) => v * 0.293071,
    fromBase: (v) => v / 0.293071,
  },
};

// 数据存储单位转换（以字节为基准）
export const dataUnits: Record<string, Unit> = {
  bit: {
    name: '位',
    symbol: 'bit',
    toBase: (v) => v / 8,
    fromBase: (v) => v * 8,
  },
  byte: {
    name: '字节',
    symbol: 'B',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilobyte: {
    name: '千字节',
    symbol: 'KB',
    toBase: (v) => v * 1024,
    fromBase: (v) => v / 1024,
  },
  megabyte: {
    name: '兆字节',
    symbol: 'MB',
    toBase: (v) => v * 1048576,
    fromBase: (v) => v / 1048576,
  },
  gigabyte: {
    name: '吉字节',
    symbol: 'GB',
    toBase: (v) => v * 1073741824,
    fromBase: (v) => v / 1073741824,
  },
  terabyte: {
    name: '太字节',
    symbol: 'TB',
    toBase: (v) => v * 1099511627776,
    fromBase: (v) => v / 1099511627776,
  },
};

// 角度单位转换（以度数为基准）
export const angleUnits: Record<string, Unit> = {
  degree: {
    name: '度',
    symbol: '°',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  radian: {
    name: '弧度',
    symbol: 'rad',
    toBase: (v) => v * 180 / Math.PI,
    fromBase: (v) => v * Math.PI / 180,
  },
  gradian: {
    name: '百分度',
    symbol: 'grad',
    toBase: (v) => v * 0.9,
    fromBase: (v) => v / 0.9,
  },
  arcminute: {
    name: '角分',
    symbol: "'",
    toBase: (v) => v / 60,
    fromBase: (v) => v * 60,
  },
  arcsecond: {
    name: '角秒',
    symbol: '"',
    toBase: (v) => v / 3600,
    fromBase: (v) => v * 3600,
  },
};

// 频率单位转换（以赫兹为基准）
export const frequencyUnits: Record<string, Unit> = {
  hertz: {
    name: '赫兹',
    symbol: 'Hz',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilohertz: {
    name: '千赫',
    symbol: 'kHz',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  megahertz: {
    name: '兆赫',
    symbol: 'MHz',
    toBase: (v) => v * 1000000,
    fromBase: (v) => v / 1000000,
  },
  gigahertz: {
    name: '吉赫',
    symbol: 'GHz',
    toBase: (v) => v * 1000000000,
    fromBase: (v) => v / 1000000000,
  },
};

// 力单位转换（以牛顿为基准）
export const forceUnits: Record<string, Unit> = {
  newton: {
    name: '牛顿',
    symbol: 'N',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilonewton: {
    name: '千牛',
    symbol: 'kN',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  poundForce: {
    name: '磅力',
    symbol: 'lbf',
    toBase: (v) => v * 4.44822,
    fromBase: (v) => v / 4.44822,
  },
  kilogramForce: {
    name: '千克力',
    symbol: 'kgf',
    toBase: (v) => v * 9.80665,
    fromBase: (v) => v / 9.80665,
  },
};

// 扭矩单位转换（以牛米为基准）
export const torqueUnits: Record<string, Unit> = {
  newtonMeter: {
    name: '牛米',
    symbol: 'N·m',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  poundFoot: {
    name: '磅英尺',
    symbol: 'lb·ft',
    toBase: (v) => v * 1.35582,
    fromBase: (v) => v / 1.35582,
  },
  poundInch: {
    name: '磅英寸',
    symbol: 'lb·in',
    toBase: (v) => v * 0.112985,
    fromBase: (v) => v / 0.112985,
  },
  kilogramMeter: {
    name: '千克米',
    symbol: 'kg·m',
    toBase: (v) => v * 9.80665,
    fromBase: (v) => v / 9.80665,
  },
};

// 密度单位转换（以千克/立方米为基准）
export const densityUnits: Record<string, Unit> = {
  kilogramPerCubicMeter: {
    name: '千克/立方米',
    symbol: 'kg/m³',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  gramPerCubicCentimeter: {
    name: '克/立方厘米',
    symbol: 'g/cm³',
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  poundPerCubicFoot: {
    name: '磅/立方英尺',
    symbol: 'lb/ft³',
    toBase: (v) => v * 16.0185,
    fromBase: (v) => v / 16.0185,
  },
  poundPerCubicInch: {
    name: '磅/立方英寸',
    symbol: 'lb/in³',
    toBase: (v) => v * 27679.9,
    fromBase: (v) => v / 27679.9,
  },
};

// 货币单位（使用 ISO 4217 货币代码）
export const currencyUnits: Record<string, Unit> = {
  USD: {
    name: '美元',
    symbol: 'USD',
    toBase: (v) => v, // 基准货币
    fromBase: (v) => v,
  },
  EUR: {
    name: '欧元',
    symbol: 'EUR',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  GBP: {
    name: '英镑',
    symbol: 'GBP',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  JPY: {
    name: '日元',
    symbol: 'JPY',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  CNY: {
    name: '人民币',
    symbol: 'CNY',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  AUD: {
    name: '澳元',
    symbol: 'AUD',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  CAD: {
    name: '加元',
    symbol: 'CAD',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  CHF: {
    name: '瑞士法郎',
    symbol: 'CHF',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  HKD: {
    name: '港币',
    symbol: 'HKD',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  INR: {
    name: '印度卢比',
    symbol: 'INR',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  KRW: {
    name: '韩元',
    symbol: 'KRW',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  MXN: {
    name: '墨西哥比索',
    symbol: 'MXN',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  NZD: {
    name: '新西兰元',
    symbol: 'NZD',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  SGD: {
    name: '新加坡元',
    symbol: 'SGD',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  ZAR: {
    name: '南非兰特',
    symbol: 'ZAR',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  BRL: {
    name: '巴西雷亚尔',
    symbol: 'BRL',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  RUB: {
    name: '俄罗斯卢布',
    symbol: 'RUB',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  TRY: {
    name: '土耳其里拉',
    symbol: 'TRY',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
};

export const unitCategories: Record<UnitCategory, { name: string; units: Record<string, Unit> }> = {
  length: {
    name: '长度',
    units: lengthUnits,
  },
  weight: {
    name: '重量',
    units: weightUnits,
  },
  temperature: {
    name: '温度',
    units: temperatureUnits,
  },
  volume: {
    name: '体积',
    units: volumeUnits,
  },
  time: {
    name: '时间',
    units: timeUnits,
  },
  area: {
    name: '面积',
    units: areaUnits,
  },
  speed: {
    name: '速度',
    units: speedUnits,
  },
  energy: {
    name: '能量',
    units: energyUnits,
  },
  pressure: {
    name: '压力',
    units: pressureUnits,
  },
  power: {
    name: '功率',
    units: powerUnits,
  },
  data: {
    name: '数据',
    units: dataUnits,
  },
  angle: {
    name: '角度',
    units: angleUnits,
  },
  frequency: {
    name: '频率',
    units: frequencyUnits,
  },
  force: {
    name: '力',
    units: forceUnits,
  },
  torque: {
    name: '扭矩',
    units: torqueUnits,
  },
  density: {
    name: '密度',
    units: densityUnits,
  },
  currency: {
    name: '货币',
    units: currencyUnits,
  },
};

export function convertUnit(
  value: number,
  fromUnit: Unit,
  toUnit: Unit
): number {
  if (isNaN(value)) return 0;
  if (value === 0) return 0;
  const baseValue = fromUnit.toBase(value);
  return toUnit.fromBase(baseValue);
}
