import { Language, languageNames } from '../utils/i18n';
import './LanguageSelector.css';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const languages: Language[] = ['en', 'zh', 'es', 'fr', 'de', 'ja'];

  return (
    <div className="language-selector">
      <select
        className="language-select"
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        title="Select Language"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {languageNames[lang]}
          </option>
        ))}
      </select>
    </div>
  );
}
