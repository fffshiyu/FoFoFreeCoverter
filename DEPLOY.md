# 部署到 Vercel

## 快速部署

### 方法一：通过 Vercel CLI（推荐）

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 登录 Vercel：
```bash
vercel login
```

3. 在项目根目录运行：
```bash
vercel
```

4. 按照提示完成部署：
   - 选择项目名称（建议：`fofo-unit-converter`）
   - 确认构建设置（Vercel 会自动检测 Vite）
   - 部署完成！

### 方法二：通过 GitHub 集成

1. 将代码推送到 GitHub 仓库

2. 访问 [Vercel Dashboard](https://vercel.com/dashboard)

3. 点击 "Add New Project"

4. 导入你的 GitHub 仓库

5. Vercel 会自动检测配置：
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. 点击 "Deploy" 完成部署

## 自定义域名

部署后，你可以：

1. 在 Vercel 项目设置中添加自定义域名
2. 建议使用简短域名，如：`fofo.unit` 或 `fofo-converter.com`
3. 更新 `sitemap.xml` 和 `robots.txt` 中的域名

## 环境变量

当前项目不需要环境变量，可以直接部署。

## 构建配置

项目已包含 `vercel.json` 配置文件：
- 自动检测 Vite 框架
- SPA 路由支持
- 正确的文件头设置

## 注意事项

- 确保 `package.json` 中的构建脚本正确
- `public` 目录中的文件会自动复制到构建输出
- 站点地图和 robots.txt 会自动包含

部署完成后，你的网站将获得一个类似 `your-project.vercel.app` 的 URL。
