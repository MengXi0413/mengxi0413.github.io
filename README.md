# Mengxi Notes

一个使用 `Astro + GitHub Actions + GitHub Pages` 搭建的私人博客，用来记录：

- 2027 软微考研备战过程
- 数字芯片设计与开发心得
- 日常生活里想留下来的片段

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址：`http://localhost:4321`

## 常用命令

```bash
npm run dev
npm run build
npm run preview
npm run check
```

## 内容结构

- 所有文章都放在 `src/content/posts/`
- 栏目通过 frontmatter 的 `section` 字段区分
- 当前支持栏目：
  - `kaoyan`
  - `chip-design`
  - `life`

## 在线写作后台

项目已经预留 `Pages CMS` 配置文件 `.pages.yml`，文章使用 `Markdown + YAML frontmatter`。

使用方式：

1. 登录 `https://pagescms.org/`
2. 选择仓库 `MengXi0413/mengxi0413.github.io`
3. 在文章集合里直接创建或编辑 Markdown 内容

## 部署

GitHub Pages 使用 `.github/workflows/deploy.yml` 自动发布。

仓库需要在 GitHub 设置页中将 Pages 发布源设为 `GitHub Actions`。
