import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const LengthIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round"/>
    <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round"/>
    <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round"/>
  </svg>
);

export const WeightIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H18L17 20H7L6 9Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9V6C9 4.89543 9.89543 4 11 4H13C14.1046 4 15 4.89543 15 6V9" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="20" x2="12" y2="24" strokeLinecap="round"/>
  </svg>
);

export const TemperatureIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 4V10.54C15.5 11.5 16.5 13.2 16.5 15C16.5 18.04 14.04 20.5 11 20.5C7.96 20.5 5.5 18.04 5.5 15C5.5 13.2 6.5 11.5 8 10.54V4H14Z" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="11" y1="8" x2="11" y2="12" strokeLinecap="round"/>
  </svg>
);

export const VolumeIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 7H21L20 20H4L3 7Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 7V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TimeIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="12" x2="12" y2="7" strokeLinecap="round"/>
    <line x1="12" y1="12" x2="16" y2="12" strokeLinecap="round"/>
  </svg>
);

export const AreaIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="9" y1="3" x2="9" y2="21" strokeLinecap="round"/>
    <line x1="3" y1="9" x2="21" y2="9" strokeLinecap="round"/>
  </svg>
);

export const SpeedIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const EnergyIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

export const PressureIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8"/>
    <line x1="12" y1="4" x2="12" y2="8" strokeLinecap="round"/>
    <line x1="12" y1="16" x2="12" y2="20" strokeLinecap="round"/>
  </svg>
);

export const PowerIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8"/>
    <path d="M12 4V12" strokeLinecap="round"/>
  </svg>
);

export const DataIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="9" y1="3" x2="9" y2="21" strokeLinecap="round"/>
    <line x1="15" y1="3" x2="15" y2="21" strokeLinecap="round"/>
  </svg>
);

export const AngleIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L20 20H4L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FrequencyIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12C3 8 6 6 9 6C12 6 15 8 15 12C15 16 12 18 9 18C6 18 3 16 3 12Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12C21 8 18 6 15 6C12 6 9 8 9 12C9 16 12 18 15 18C18 18 21 16 21 12Z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ForceIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round"/>
    <path d="M8 6L12 2L16 6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 18L12 22L16 18" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TorqueIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8"/>
    <line x1="12" y1="4" x2="12" y2="12" strokeLinecap="round"/>
    <line x1="12" y1="12" x2="20" y2="12" strokeLinecap="round"/>
  </svg>
);

export const DensityIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="6" width="18" height="12" rx="1"/>
    <line x1="9" y1="6" x2="9" y2="18" strokeLinecap="round"/>
    <line x1="15" y1="6" x2="15" y2="18" strokeLinecap="round"/>
  </svg>
);
