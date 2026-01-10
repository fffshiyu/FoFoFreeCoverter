import { useState, useEffect } from 'react';
import { Unit, UnitCategory, unitCategories, convertUnit } from '../utils/converters';
import { useLanguage } from '../contexts/LanguageContext';
import { getUnitName } from '../utils/unitNames';
import './UnitConverter.css';

interface UnitConverterProps {
  category: UnitCategory;
}

export default function UnitConverter({ category }: UnitConverterProps) {
  const { t, language } = useLanguage();
  const categoryData = unitCategories[category];
  const unitEntries = Object.entries(categoryData.units);
  
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
  
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>(unitEntries[0]?.[0] || '');
  const [toUnit, setToUnit] = useState<string>(unitEntries[1]?.[0] || unitEntries[0]?.[0] || '');
  const [lastEdited, setLastEdited] = useState<'from' | 'to'>('from');

  // 当类别改变时，重置单位选择
  useEffect(() => {
    const entries = Object.entries(categoryData.units);
    if (entries.length > 0) {
      setFromUnit(entries[0][0]);
      setToUnit(entries[1]?.[0] || entries[0][0]);
      setFromValue('1');
      setToValue('');
      setLastEdited('from');
    }
  }, [category, categoryData]);

  const fromUnitObj = categoryData.units[fromUnit];
  const toUnitObj = categoryData.units[toUnit];

  // 从左侧转换到右侧
  useEffect(() => {
    if (!fromUnitObj || !toUnitObj || lastEdited !== 'from') return;
    
    const numValue = parseFloat(fromValue);
    if (!isNaN(numValue) && fromValue !== '') {
      const converted = convertUnit(numValue, fromUnitObj, toUnitObj);
      setToValue(converted.toFixed(10).replace(/\.?0+$/, ''));
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, fromUnitObj, toUnitObj, lastEdited]);

  // 从右侧转换到左侧
  useEffect(() => {
    if (!fromUnitObj || !toUnitObj || lastEdited !== 'to') return;
    
    const numValue = parseFloat(toValue);
    if (!isNaN(numValue) && toValue !== '') {
      const converted = convertUnit(numValue, toUnitObj, fromUnitObj);
      setFromValue(converted.toFixed(10).replace(/\.?0+$/, ''));
    } else {
      setFromValue('');
    }
  }, [toValue, fromUnit, toUnit, fromUnitObj, toUnitObj, lastEdited]);

  const handleFromChange = (value: string) => {
    setFromValue(value);
    setLastEdited('from');
  };

  const handleToChange = (value: string) => {
    setToValue(value);
    setLastEdited('to');
  };

  const handleSwap = () => {
    const tempUnit = fromUnit;
    const tempValue = fromValue;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    setFromValue(toValue);
    setToValue(tempValue);
    setLastEdited(lastEdited === 'from' ? 'to' : 'from');
  };

  if (!categoryData || !fromUnitObj || !toUnitObj) {
    return (
      <div className="converter-container">
        <div className="converter-header">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="converter-container">
      <div className="converter-header">
        <h2>{t[categoryLabels[category]]} {t.converter}</h2>
      </div>

      <div className="converter-input-output-section">
        <div className="input-output-row">
          <div className="value-input-group">
            <input
              type="number"
              className="main-input"
              value={fromValue}
              onChange={(e) => handleFromChange(e.target.value)}
              placeholder={t.inputValue}
            />
            <div className="input-unit-label">{fromUnitObj.symbol}</div>
          </div>

          <button className="swap-button-large" onClick={handleSwap} title="交换单位">
            <svg className="swap-icon-large" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3L4 7L8 11" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 7H20" strokeLinecap="round"/>
              <path d="M16 21L20 17L16 13" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 17H4" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="value-output-group">
            <input
              type="number"
              className="main-output"
              value={toValue}
              onChange={(e) => handleToChange(e.target.value)}
              placeholder={t.inputValue}
            />
            <div className="output-unit-label">{toUnitObj.symbol}</div>
          </div>
        </div>
      </div>

      <div className="converter-units-section">
        <div className="units-group">
          <div className="units-label">{t.from}</div>
          <div className="units-grid">
            {unitEntries.map(([key, unit]) => (
              <button
                key={key}
                className={`unit-button ${fromUnit === key ? 'active' : ''}`}
                onClick={() => setFromUnit(key)}
              >
                <span className="unit-name">{getUnitName(key, language)}</span>
                <span className="unit-symbol">({unit.symbol})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="units-group">
          <div className="units-label">{t.to}</div>
          <div className="units-grid">
            {unitEntries.map(([key, unit]) => (
              <button
                key={key}
                className={`unit-button ${toUnit === key ? 'active' : ''}`}
                onClick={() => setToUnit(key)}
              >
                <span className="unit-name">{getUnitName(key, language)}</span>
                <span className="unit-symbol">({unit.symbol})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
