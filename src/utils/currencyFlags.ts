// 货币代码到国旗 emoji 的映射

export const currencyFlags: Record<string, string> = {
  USD: '🇺🇸', // 美国
  EUR: '🇪🇺', // 欧盟
  GBP: '🇬🇧', // 英国
  JPY: '🇯🇵', // 日本
  CNY: '🇨🇳', // 中国
  AUD: '🇦🇺', // 澳大利亚
  CAD: '🇨🇦', // 加拿大
  CHF: '🇨🇭', // 瑞士
  HKD: '🇭🇰', // 香港
  INR: '🇮🇳', // 印度
  KRW: '🇰🇷', // 韩国
  MXN: '🇲🇽', // 墨西哥
  NZD: '🇳🇿', // 新西兰
  SGD: '🇸🇬', // 新加坡
  ZAR: '🇿🇦', // 南非
  BRL: '🇧🇷', // 巴西
  RUB: '🇷🇺', // 俄罗斯
  TRY: '🇹🇷', // 土耳其
};

export function getCurrencyFlag(currencyCode: string): string {
  return currencyFlags[currencyCode] || '';
}
