import { UnitCategory, unitCategories } from '../utils/converters';
import './Sitemap.css';

export default function Sitemap() {
  const categories = Object.entries(unitCategories) as [UnitCategory, { name: string; units: Record<string, { name: string; symbol: string }> }][];

  return (
    <div className="sitemap-container">
      <h1 className="sitemap-title">网站地图</h1>
      <div className="sitemap-content">
        <div className="sitemap-section">
          <h2 className="section-title">单位转换器</h2>
          <div className="categories-grid">
            {categories.map(([key, category]) => {
              const unitCount = Object.keys(category.units).length;
              return (
                <div key={key} className="category-item">
                  <h3 className="category-name">{category.name}转换器</h3>
                  <div className="units-list">
                    {Object.entries(category.units).map(([unitKey, unit]) => (
                      <span key={unitKey} className="unit-item">
                        {unit.name} ({unit.symbol})
                      </span>
                    ))}
                  </div>
                  <div className="unit-count">{unitCount} 种单位</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="sitemap-section">
          <h2 className="section-title">转换类别</h2>
          <div className="categories-list">
            {categories.map(([key, category]) => (
              <div key={key} className="category-link-item">
                <a href={`#${key}`} className="category-link">
                  {category.name}转换器
                </a>
                <span className="category-description">
                  - {Object.keys(category.units).length} 种单位转换
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="sitemap-section">
          <h2 className="section-title">所有单位列表</h2>
          {categories.map(([key, category]) => (
            <div key={key} className="category-detail">
              <h3 className="category-name">{category.name}转换器</h3>
              <div className="units-grid-detailed">
                {Object.entries(category.units).map(([unitKey, unit]) => (
                  <div key={unitKey} className="unit-card">
                    <span className="unit-name-detailed">{unit.name}</span>
                    <span className="unit-symbol-detailed">{unit.symbol}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
