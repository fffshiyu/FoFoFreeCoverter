import { UnitCategory, unitCategories } from '../utils/converters';
import { useLanguage } from '../contexts/LanguageContext';
import AdSense from './AdSense';
import './Footer.css';

interface FooterProps {
  onCategorySelect?: (category: UnitCategory) => void;
}

export default function Footer({ onCategorySelect }: FooterProps) {
  const { t } = useLanguage();
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
    currency: 'currency',
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">{t.unitConverters}</h3>
          <div className="footer-links">
            {categories.slice(0, 8).map(([key]) => (
              <a 
                key={key} 
                href={`#${key}`} 
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  onCategorySelect?.(key as UnitCategory);
                }}
              >
                {t[categoryLabels[key as UnitCategory]]} {t.converter}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">{t.moreCategories}</h3>
          <div className="footer-links">
            {categories.slice(8).map(([key]) => (
              <a 
                key={key} 
                href={`#${key}`} 
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  onCategorySelect?.(key as UnitCategory);
                }}
              >
                {t[categoryLabels[key as UnitCategory]]} {t.converter}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">{t.sitemap}</h3>
          <div className="footer-links">
            {categories.slice(0, 8).map(([key]) => (
              <a 
                key={key}
                href={`#${key}`} 
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  onCategorySelect?.(key as UnitCategory);
                }}
              >
                {t[categoryLabels[key as UnitCategory]]}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">{t.contact}</h3>
          <div className="contact-section">
            <p className="contact-text">{t.feedback}:</p>
            <a href="mailto:fangmeixu36@gmail.com" className="contact-email">
              fangmeixu36@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* 页脚底部广告 */}
      <div className="footer-ad-container">
        <AdSense 
          adSlot="footer-bottom" 
          adFormat="horizontal"
          style={{ width: '100%', minHeight: '90px' }}
          className="footer-ad"
        />
      </div>

      <div className="footer-bottom">
        <p className="copyright">{t.copyright}</p>
      </div>
    </footer>
  );
}
