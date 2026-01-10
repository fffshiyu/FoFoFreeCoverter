import { Language } from './i18n';

export function detectLanguage(): Language {
  // 获取浏览器语言
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  
  // 提取语言代码（例如 'zh-CN' -> 'zh'）
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // 映射到支持的语言
  const languageMap: Record<string, Language> = {
    'en': 'en',
    'zh': 'zh',
    'es': 'es',
    'fr': 'fr',
    'de': 'de',
    'ja': 'ja',
  };
  
  // 特殊处理中文变体
  if (browserLang.toLowerCase().includes('zh')) {
    return 'zh';
  }
  
  return languageMap[langCode] || 'en';
}
