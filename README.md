# Online Fofo Unit Converter

免费在线单位转换器，支持16种转换类别，多语言界面。

## 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具和开发服务器
- **CSS3** - 样式和响应式设计

## 功能特性

- 📏 **16种转换类别** - 长度、重量、温度、体积、时间、面积、速度、能量、压力、功率、数据、角度、频率、力、扭矩、密度
- 🌍 **多语言支持** - 英语、中文、西班牙语、法语、德语、日语
- 🔄 **双向转换** - 支持从任意一侧输入，自动转换
- 📱 **响应式设计** - 完美适配桌面、平板和移动设备
- ⚡ **实时转换** - 输入即时计算，精确到小数点后10位

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

应用将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 部署

### 部署到 Vercel

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 部署：
```bash
vercel
```

或通过 GitHub 集成：
- 推送代码到 GitHub
- 在 [Vercel](https://vercel.com) 导入项目
- 自动部署

## 项目结构

```
src/
├── components/          # React 组件
│   ├── UnitConverter.tsx
│   ├── HomeContent.tsx
│   ├── Footer.tsx
│   └── LanguageSelector.tsx
├── contexts/            # React Context
│   └── LanguageContext.tsx
├── utils/              # 工具函数
│   ├── converters.ts   # 单位转换逻辑
│   ├── unitNames.ts    # 单位名称翻译
│   ├── i18n.ts         # 界面文本翻译
│   └── languageDetector.ts  # 语言检测
└── main.tsx            # 应用入口
```

## 许可证

MIT License
