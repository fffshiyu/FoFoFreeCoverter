import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UnitCategory, unitCategories } from '../utils/converters';
import UnitConverter from '../components/UnitConverter';
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';
import LanguageSelector from '../components/LanguageSelector';
import AdSense from '../components/AdSense';
import { useLanguage } from '../contexts/LanguageContext';
import {
  LengthIcon,
  WeightIcon,
  TemperatureIcon,
  VolumeIcon,
  TimeIcon,
  AreaIcon,
  SpeedIcon,
  EnergyIcon,
  PressureIcon,
  PowerIcon,
  DataIcon,
  AngleIcon,
  FrequencyIcon,
  ForceIcon,
  TorqueIcon,
  DensityIcon,
  CurrencyIcon,
} from '../components/Icons';
import '../App.css';

const categoryIcons: Record<UnitCategory, React.ComponentType<{ className?: string; size?: number }>> = {
  length: LengthIcon,
  weight: WeightIcon,
  temperature: TemperatureIcon,
  volume: VolumeIcon,
  time: TimeIcon,
  area: AreaIcon,
  speed: SpeedIcon,
  energy: EnergyIcon,
  pressure: PressureIcon,
  power: PowerIcon,
  data: DataIcon,
  angle: AngleIcon,
  frequency: FrequencyIcon,
  force: ForceIcon,
  torque: TorqueIcon,
  density: DensityIcon,
  currency: CurrencyIcon,
};

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

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<UnitCategory>('length');
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleCategoryClick = (category: UnitCategory) => {
    if (!unitCategories[category]) {
      console.error('Invalid category:', category);
      return;
    }
    // 只在首页切换类别，不跳转
    setSelectedCategory(category);
    // 滚动到转换器位置
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryCardClick = (category: UnitCategory) => {
    if (!unitCategories[category]) {
      console.error('Invalid category:', category);
      return;
    }
    // 导航到子页面
    navigate(`/${categoryToSlug[category]}`);
  };

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

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{t.appTitle}</h1>
        <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
      </header>

      <div className="app-layout">
        {/* 左侧广告 */}
        <aside className="sidebar-ads sidebar-ads-left">
          <AdSense 
            adSlot="2768442529" 
            adFormat="vertical"
            style={{ minWidth: '160px', minHeight: '600px' }}
            className="sidebar-ad"
          />
        </aside>

        <main className="app-main">
          <div className="category-selector">
            {Object.entries(unitCategories).map(([key]) => {
              const IconComponent = categoryIcons[key as UnitCategory];
              const labelKey = categoryLabels[key as UnitCategory];
              return (
                <button
                  key={key}
                  className={`category-button ${selectedCategory === key ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(key as UnitCategory)}
                  title={t[labelKey]}
                >
                  <IconComponent className="button-icon" size={16} />
                  <span className="button-text">{t[labelKey]}</span>
                </button>
              );
            })}
          </div>

          <div className="converter-wrapper">
            <UnitConverter category={selectedCategory} />
          </div>

          <HomeContent onCategorySelect={handleCategoryCardClick} />
        </main>

        {/* 右侧广告 */}
        <aside className="sidebar-ads sidebar-ads-right">
          <AdSense 
            adSlot="8666802318" 
            adFormat="vertical"
            style={{ minWidth: '160px', minHeight: '600px' }}
            className="sidebar-ad"
          />
        </aside>
      </div>

      <Footer onCategorySelect={handleCategoryClick} />
    </div>
  );
}
