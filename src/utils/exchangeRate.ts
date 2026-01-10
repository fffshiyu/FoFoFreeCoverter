// 汇率 API 服务
// 使用 exchangerate-api.com 免费 API（无需 API key）

export interface ExchangeRates {
  [currencyCode: string]: number;
}

let cachedRates: ExchangeRates | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1小时缓存

export async function fetchExchangeRates(): Promise<ExchangeRates> {
  const now = Date.now();
  
  // 如果缓存有效，直接返回
  if (cachedRates && (now - cacheTimestamp) < CACHE_DURATION) {
    return cachedRates;
  }

  try {
    // 使用 exchangerate-api.com 免费 API
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    
    const data = await response.json();
    const rates: ExchangeRates = data.rates || {};
    
    // 确保 USD 在汇率表中（基准货币）
    rates['USD'] = 1;
    
    // 更新缓存
    cachedRates = rates;
    cacheTimestamp = now;
    
    return rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    
    // 如果获取失败，返回缓存的汇率或默认汇率
    if (cachedRates) {
      return cachedRates;
    }
    
    // 返回一些常见货币的默认汇率（作为后备）
    return {
      USD: 1,
      EUR: 0.92,
      GBP: 0.79,
      JPY: 150,
      CNY: 7.2,
      AUD: 1.52,
      CAD: 1.35,
      CHF: 0.88,
      HKD: 7.82,
      INR: 83,
      KRW: 1330,
      MXN: 17,
      NZD: 1.64,
      SGD: 1.34,
      ZAR: 19,
    };
  }
}

export async function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string
): Promise<number> {
  if (fromCurrency === toCurrency) {
    return amount;
  }
  
  const rates = await fetchExchangeRates();
  
  // 如果货币不在汇率表中，返回原值
  if (!rates[fromCurrency] || !rates[toCurrency]) {
    return amount;
  }
  
  // 转换为 USD，然后转换为目标货币
  const usdAmount = amount / rates[fromCurrency];
  const result = usdAmount * rates[toCurrency];
  
  return result;
}
