import { useState } from 'react';
import { UnitCategory, unitCategories } from './utils/converters';
import UnitConverter from './components/UnitConverter';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import { useLanguage } from './contexts/LanguageContext';
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
} from './components/Icons';
import './App.css';

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

function AppContent() {
  const [selectedCategory, setSelectedCategory] = useState<UnitCategory>('length');
  const { language, setLanguage, t } = useLanguage();

  const handleCategoryClick = (category: UnitCategory) => {
    if (!unitCategories[category]) {
      console.error('Invalid category:', category);
      return;
    }
    setSelectedCategory(category);
    // 滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

        <HomeContent onCategorySelect={handleCategoryClick} />
      </main>

      <Footer onCategorySelect={handleCategoryClick} />
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
