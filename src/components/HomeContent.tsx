import { UnitCategory, unitCategories } from '../utils/converters';
import { useLanguage } from '../contexts/LanguageContext';
import { getUnitName } from '../utils/unitNames';
import './HomeContent.css';

interface HomeContentProps {
  onCategorySelect?: (category: UnitCategory) => void;
}

export default function HomeContent({ onCategorySelect }: HomeContentProps) {
  const { t, language } = useLanguage();
  const categories = Object.entries(unitCategories) as [UnitCategory, { name: string; units: Record<string, { name: string; symbol: string }> }][];
  
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
  };

  return (
    <div className="home-content">
      <section className="content-section">
        <h2 className="section-title">{t.allCategories}</h2>
        <div className="categories-grid">
          {categories.map(([key, category]) => {
            const unitCount = Object.keys(category.units).length;
            return (
              <div 
                key={key} 
                className="category-card" 
                id={key}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onCategorySelect) {
                    onCategorySelect(key as UnitCategory);
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                <h3 className="category-card-title">{t[categoryLabels[key as UnitCategory]]} {t.converter}</h3>
                <div className="category-units">
                  {Object.entries(category.units).slice(0, 6).map(([unitKey, unit]) => (
                    <span key={unitKey} className="unit-tag">
                      {getUnitName(unitKey, language)} ({unit.symbol})
                    </span>
                  ))}
                  {unitCount > 6 && (
                    <span className="unit-more">+{unitCount - 6} {t.more}</span>
                  )}
                </div>
                <div className="category-info">
                  <span className="unit-count-badge">{unitCount} {t.units}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">{t.quickConversions}</h2>
        <div className="quick-conversions">
          <div className="quick-item">
            <span className="quick-label">{t.commonLengthConversions}</span>
            <div className="quick-examples">
              <span>{t.lengthExample1}</span>
              <span>{t.lengthExample2}</span>
              <span>{t.lengthExample3}</span>
            </div>
          </div>
          <div className="quick-item">
            <span className="quick-label">{t.commonWeightConversions}</span>
            <div className="quick-examples">
              <span>{t.weightExample1}</span>
              <span>{t.weightExample2}</span>
              <span>{t.weightExample3}</span>
            </div>
          </div>
          <div className="quick-item">
            <span className="quick-label">{t.commonTemperatureConversions}</span>
            <div className="quick-examples">
              <span>{t.temperatureExample1}</span>
              <span>{t.temperatureExample2}</span>
              <span>{t.temperatureExample3}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">{t.conversionTables}</h2>
        <div className="conversion-tables">
          {categories.map(([key, category]) => (
            <div key={key} className="conversion-table">
              <h3 className="table-title">{t[categoryLabels[key as UnitCategory]]}</h3>
              <div className="table-content">
                {Object.entries(category.units).map(([unitKey, unit]) => (
                  <div key={unitKey} className="table-row">
                    <span className="table-unit-name">{getUnitName(unitKey, language)}</span>
                    <span className="table-unit-symbol">{unit.symbol}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">{t.instructions}</h2>
        <div className="instructions">
          <div className="instruction-item">
            <h4 className="instruction-title">1. {t.selectCategory}</h4>
            <p className="instruction-text">{t.instruction1}</p>
          </div>
          <div className="instruction-item">
            <h4 className="instruction-title">2. {t.enterValue}</h4>
            <p className="instruction-text">{t.instruction2}</p>
          </div>
          <div className="instruction-item">
            <h4 className="instruction-title">3. {t.selectUnits}</h4>
            <p className="instruction-text">{t.instruction3}</p>
          </div>
          <div className="instruction-item">
            <h4 className="instruction-title">4. {t.viewResult}</h4>
            <p className="instruction-text">{t.instruction4}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
