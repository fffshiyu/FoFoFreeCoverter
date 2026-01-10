import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UnitCategory, unitCategories } from '../utils/converters';
import UnitConverter from '../components/UnitConverter';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import AdSense from '../components/AdSense';
import './ConverterPage.css';

// 转换类别到 URL slug 的映射
const categoryToSlug: Record<UnitCategory, string> = {
  length: 'length-converter',
  weight: 'weight-converter',
  temperature: 'temperature-converter',
  volume: 'volume-converter',
  time: 'time-converter',
  area: 'area-converter',
  speed: 'speed-converter',
  energy: 'energy-converter',
  pressure: 'pressure-converter',
  power: 'power-converter',
  data: 'data-converter',
  angle: 'angle-converter',
  frequency: 'frequency-converter',
  force: 'force-converter',
  torque: 'torque-converter',
  density: 'density-converter',
  currency: 'currency-converter',
};

const slugToCategory: Record<string, UnitCategory> = Object.fromEntries(
  Object.entries(categoryToSlug).map(([cat, slug]) => [slug, cat as UnitCategory])
) as Record<string, UnitCategory>;

// 示例转换数据
const examples: Record<UnitCategory, Array<{ from: string; fromValue: number; to: string; toValue: number }>> = {
  length: [
    { from: 'meter', fromValue: 1, to: 'foot', toValue: 3.28084 },
    { from: 'kilometer', fromValue: 1, to: 'mile', toValue: 0.621371 },
    { from: 'inch', fromValue: 1, to: 'centimeter', toValue: 2.54 },
    { from: 'yard', fromValue: 1, to: 'meter', toValue: 0.9144 },
    { from: 'mile', fromValue: 1, to: 'kilometer', toValue: 1.60934 },
    { from: 'foot', fromValue: 1, to: 'meter', toValue: 0.3048 },
  ],
  weight: [
    { from: 'kilogram', fromValue: 1, to: 'pound', toValue: 2.20462 },
    { from: 'pound', fromValue: 1, to: 'kilogram', toValue: 0.453592 },
    { from: 'ounce', fromValue: 1, to: 'gram', toValue: 28.3495 },
    { from: 'ton', fromValue: 1, to: 'kilogram', toValue: 1000 },
    { from: 'gram', fromValue: 1000, to: 'kilogram', toValue: 1 },
    { from: 'stone', fromValue: 1, to: 'kilogram', toValue: 6.35029 },
  ],
  temperature: [
    { from: 'celsius', fromValue: 0, to: 'fahrenheit', toValue: 32 },
    { from: 'celsius', fromValue: 100, to: 'fahrenheit', toValue: 212 },
    { from: 'celsius', fromValue: -40, to: 'fahrenheit', toValue: -40 },
    { from: 'fahrenheit', fromValue: 32, to: 'celsius', toValue: 0 },
    { from: 'celsius', fromValue: 25, to: 'fahrenheit', toValue: 77 },
    { from: 'kelvin', fromValue: 273.15, to: 'celsius', toValue: 0 },
  ],
  volume: [
    { from: 'liter', fromValue: 1, to: 'gallon', toValue: 0.264172 },
    { from: 'milliliter', fromValue: 1000, to: 'liter', toValue: 1 },
    { from: 'gallon', fromValue: 1, to: 'liter', toValue: 3.78541 },
  ],
  time: [
    { from: 'hour', fromValue: 1, to: 'minute', toValue: 60 },
    { from: 'day', fromValue: 1, to: 'hour', toValue: 24 },
    { from: 'week', fromValue: 1, to: 'day', toValue: 7 },
  ],
  area: [
    { from: 'squareMeter', fromValue: 1, to: 'squareFoot', toValue: 10.7639 },
    { from: 'hectare', fromValue: 1, to: 'acre', toValue: 2.47105 },
    { from: 'squareKilometer', fromValue: 1, to: 'squareMile', toValue: 0.386102 },
  ],
  speed: [
    { from: 'kilometerPerHour', fromValue: 100, to: 'milePerHour', toValue: 62.1371 },
    { from: 'meterPerSecond', fromValue: 10, to: 'kilometerPerHour', toValue: 36 },
    { from: 'milePerHour', fromValue: 60, to: 'kilometerPerHour', toValue: 96.5606 },
  ],
  energy: [
    { from: 'joule', fromValue: 1000, to: 'kilojoule', toValue: 1 },
    { from: 'calorie', fromValue: 1, to: 'joule', toValue: 4.184 },
    { from: 'kilowattHour', fromValue: 1, to: 'joule', toValue: 3600000 },
  ],
  pressure: [
    { from: 'pascal', fromValue: 101325, to: 'atmosphere', toValue: 1 },
    { from: 'bar', fromValue: 1, to: 'pascal', toValue: 100000 },
    { from: 'psi', fromValue: 1, to: 'pascal', toValue: 6894.76 },
  ],
  power: [
    { from: 'watt', fromValue: 1000, to: 'kilowatt', toValue: 1 },
    { from: 'horsepower', fromValue: 1, to: 'watt', toValue: 745.7 },
    { from: 'kilowatt', fromValue: 1, to: 'horsepower', toValue: 1.34102 },
  ],
  data: [
    { from: 'byte', fromValue: 1024, to: 'kilobyte', toValue: 1 },
    { from: 'megabyte', fromValue: 1, to: 'kilobyte', toValue: 1024 },
    { from: 'gigabyte', fromValue: 1, to: 'megabyte', toValue: 1024 },
  ],
  angle: [
    { from: 'degree', fromValue: 180, to: 'radian', toValue: 3.14159 },
    { from: 'radian', fromValue: 1, to: 'degree', toValue: 57.2958 },
    { from: 'degree', fromValue: 90, to: 'gradian', toValue: 100 },
  ],
  frequency: [
    { from: 'hertz', fromValue: 1000, to: 'kilohertz', toValue: 1 },
    { from: 'megahertz', fromValue: 1, to: 'kilohertz', toValue: 1000 },
    { from: 'gigahertz', fromValue: 1, to: 'megahertz', toValue: 1000 },
  ],
  force: [
    { from: 'newton', fromValue: 1, to: 'poundForce', toValue: 0.224809 },
    { from: 'kilonewton', fromValue: 1, to: 'newton', toValue: 1000 },
    { from: 'poundForce', fromValue: 1, to: 'newton', toValue: 4.44822 },
  ],
  torque: [
    { from: 'newtonMeter', fromValue: 1, to: 'poundFoot', toValue: 0.737562 },
    { from: 'poundFoot', fromValue: 1, to: 'newtonMeter', toValue: 1.35582 },
    { from: 'kilogramMeter', fromValue: 1, to: 'newtonMeter', toValue: 9.80665 },
  ],
  density: [
    { from: 'kilogramPerCubicMeter', fromValue: 1000, to: 'gramPerCubicCentimeter', toValue: 1 },
    { from: 'poundPerCubicFoot', fromValue: 1, to: 'kilogramPerCubicMeter', toValue: 16.0185 },
    { from: 'gramPerCubicCentimeter', fromValue: 1, to: 'kilogramPerCubicMeter', toValue: 1000 },
  ],
  currency: [
    { from: 'USD', fromValue: 1, to: 'EUR', toValue: 0.92 },
    { from: 'USD', fromValue: 1, to: 'GBP', toValue: 0.79 },
    { from: 'CNY', fromValue: 1, to: 'USD', toValue: 0.14 },
    { from: 'USD', fromValue: 1, to: 'JPY', toValue: 150 },
    { from: 'EUR', fromValue: 1, to: 'GBP', toValue: 0.86 },
    { from: 'USD', fromValue: 1, to: 'CNY', toValue: 7.2 },
  ],
};

export default function ConverterPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const category = slug ? slugToCategory[slug] : null;

  useEffect(() => {
    if (!category || !unitCategories[category]) {
      navigate('/');
    }
  }, [category, navigate]);

  if (!category || !unitCategories[category]) {
    return null;
  }

  const categoryData = unitCategories[category];
  const categoryLabels: Record<UnitCategory, keyof typeof t> = {
    length: 'length',
    weight: 'weight',
    temperature: 'temperature',
    volume: 'volume',
    time: 'time',
    area: 'area',
    speed: 'speed',
    energy: 'energy',
    pressure: 'pressure',
    power: 'power',
    data: 'data',
    angle: 'angle',
    frequency: 'frequency',
    force: 'force',
    torque: 'torque',
    density: 'density',
    currency: 'currency',
  };

  const categoryExamples = examples[category] || [];
  const unitEntries = Object.entries(categoryData.units);

  const handleCategorySelect = (selectedCategory: UnitCategory) => {
    navigate(`/${categoryToSlug[selectedCategory]}`);
  };

  return (
    <div className="converter-page">
      <header className="converter-page-header">
        <div className="converter-page-header-content">
          <h1 className="converter-page-title">
            {t[categoryLabels[category]]} {t.converter}
          </h1>
          <a href="/" className="back-to-home">← {t.siteName}</a>
          <div className="header-language-selector">
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
          </div>
        </div>
      </header>

      <div className="converter-page-layout">
        {/* 左侧广告 */}
        <aside className="sidebar-ads sidebar-ads-left">
          <AdSense 
            adSlot="left-sidebar" 
            adFormat="vertical"
            style={{ minWidth: '160px', minHeight: '600px' }}
            className="sidebar-ad"
          />
        </aside>

        <main className="converter-page-main">
          <UnitConverter category={category} />

          {/* 示例转换 */}
          {categoryExamples.length > 0 && (
            <section className="converter-examples">
              <h2 className="examples-title">Common {t[categoryLabels[category]]} Conversions</h2>
              <div className="examples-grid">
                {categoryExamples.map((example, index) => {
                  const fromUnit = unitEntries.find(([key]) => key === example.from)?.[1];
                  const toUnit = unitEntries.find(([key]) => key === example.to)?.[1];
                  if (!fromUnit || !toUnit) return null;
                  
                  return (
                    <div key={index} className="example-item">
                      <div className="example-value">
                        <span className="example-number">{example.fromValue}</span>
                        <span className="example-unit">{fromUnit.symbol}</span>
                      </div>
                      <div className="example-equals">=</div>
                      <div className="example-value">
                        <span className="example-number">{example.toValue.toFixed(6).replace(/\.?0+$/, '')}</span>
                        <span className="example-unit">{toUnit.symbol}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </main>

        {/* 右侧广告 */}
        <aside className="sidebar-ads sidebar-ads-right">
          <AdSense 
            adSlot="right-sidebar" 
            adFormat="vertical"
            style={{ minWidth: '160px', minHeight: '600px' }}
            className="sidebar-ad"
          />
        </aside>
      </div>

      <Footer onCategorySelect={handleCategorySelect} />
    </div>
  );
}
