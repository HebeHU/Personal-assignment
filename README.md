# 个人网站（静态）

单页（SPA）版本：直接双击打开 `index.html` 即可预览。顶部导航为 5 个“页面”（关于我/教育背景/工作经历/技能特长/学习与探索）。

如需发布到线上：把整个 `personal-website` 文件夹上传到 GitHub Pages / Vercel / Netlify 等静态托管即可。

## 主页：AI 岗位匹配器

该功能使用 **Vercel Serverless 代理**（避免浏览器 CORS，同时更安全）：
1. 部署到 Vercel（见下方步骤）
2. 在 Vercel 项目环境变量中配置：
   - `OPENAI_API_KEY`（必填）
   - `OPENAI_MODEL`（可选，默认模型）
3. 打开网站右上角「AI设置」可选填 `Model`（可不填），并可点「测试连接」
4. 粘贴岗位 JD，点「开始匹配」
5. 可查看匹配度与生成的“岗位优化版简历”，支持预览与下载（Markdown/PDF）

> 注意：API Key **不会**保存在浏览器里，而是放在 Vercel 环境变量（服务端）中。

## 部署到 Vercel（推荐）
1. 将 `personal-website` 文件夹上传到一个 GitHub 仓库
2. 在 Vercel 导入该仓库并部署
3. 在 Vercel -> Project Settings -> Environment Variables 中新增 `OPENAI_API_KEY`（以及可选 `OPENAI_MODEL`）
4. Redeploy 后即可使用 AI 匹配器
