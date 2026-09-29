import { NextResponse } from "next/server";
import { PERSONAL_INFO, EXPERIENCES } from "@/lib/data";

export async function GET() {
  const cvHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Muhammad Abubakar - Curriculum Vitae</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root {
      --primary: #E76F51;
      --secondary: #7A8B72;
      --dark: #2B2622;
      --muted: #6F665F;
      --bg: #FFF9F2;
      --card-bg: #FFFFFF;
      --border: #E8DFD5;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--dark);
      padding: 40px 20px;
      line-height: 1.5;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: var(--card-bg);
      padding: 40px;
      border: 1px solid var(--border);
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(43, 38, 34, 0.05);
    }
    header {
      border-bottom: 2px solid var(--border);
      padding-bottom: 24px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 16px;
    }
    h1 {
      font-size: 28px;
      color: var(--dark);
      margin-bottom: 4px;
    }
    .title {
      font-size: 15px;
      font-weight: 600;
      color: var(--primary);
    }
    .subtitle {
      font-size: 13px;
      color: var(--muted);
    }
    .contact-info {
      font-size: 13px;
      color: var(--muted);
      text-align: right;
    }
    .contact-info a {
      color: var(--primary);
      text-decoration: none;
    }
    section {
      margin-bottom: 24px;
    }
    h2 {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--primary);
      border-bottom: 1px solid var(--border);
      padding-bottom: 6px;
      margin-bottom: 14px;
    }
    p {
      font-size: 13px;
      color: var(--muted);
      margin-bottom: 12px;
    }
    .exp-item {
      margin-bottom: 18px;
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
      font-size: 14px;
      font-weight: bold;
      color: var(--dark);
    }
    .exp-duration {
      font-size: 12px;
      color: var(--primary);
      font-family: monospace;
    }
    .exp-env {
      font-size: 12px;
      color: var(--muted);
      font-style: italic;
      margin-bottom: 8px;
    }
    ul {
      padding-left: 20px;
      font-size: 12px;
      color: var(--muted);
    }
    li {
      margin-bottom: 6px;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
    }
    .skill-block {
      background: var(--bg);
      padding: 12px;
      border-radius: 6px;
      border: 1px solid var(--border);
    }
    .skill-title {
      font-weight: bold;
      font-size: 12px;
      color: var(--dark);
      margin-bottom: 4px;
    }
    .skill-list {
      font-size: 12px;
      color: var(--muted);
    }
    .print-btn {
      background: var(--primary);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    @media print {
      body { background: white; padding: 0; }
      .container { border: none; box-shadow: none; padding: 0; }
      .print-btn { display: none; }
    }
  </style>
</head>
<body>
  <div class="container">
    <button class="print-btn" onclick="window.print()">Print or Save as PDF</button>
    <header>
      <div>
        <h1>${PERSONAL_INFO.name}</h1>
        <div class="title">${PERSONAL_INFO.primaryTitle}</div>
        <div class="subtitle">${PERSONAL_INFO.secondaryTitle}</div>
      </div>
      <div class="contact-info">
        <div>Email: <a href="mailto:${PERSONAL_INFO.email}">${PERSONAL_INFO.email}</a></div>
        <div>LinkedIn: <a href="${PERSONAL_INFO.linkedIn}">linkedin.com/in/abubakardeveloper</a></div>
        <div>GitHub: <a href="${PERSONAL_INFO.github}">github.com/bakartechnology</a></div>
      </div>
    </header>

    <section>
      <h2>Professional Summary</h2>
      <p>
        Experienced Web Developer, Full-Stack Engineer, and CMS Specialist with 20 years frontend/full-stack craft, 10 years UI/UX architecture, and 10 years prompt engineering experience. Delivered 18+ verified live production projects spanning commercial WordPress portals, bespoke Shopify e-commerce storefronts, and responsive React &amp; TypeScript applications.
      </p>
    </section>

    <section>
      <h2>Core Technical Capabilities</h2>
      <div class="skills-grid">
        <div class="skill-block">
          <div class="skill-title">Frontend &amp; Applications</div>
          <div class="skill-list">React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, shadcn/ui</div>
        </div>
        <div class="skill-block">
          <div class="skill-title">CMS &amp; E-Commerce</div>
          <div class="skill-list">WordPress, Shopify, Theme Customization, WooCommerce, Liquid, PHP, Live Deployments</div>
        </div>
        <div class="skill-block">
          <div class="skill-title">Tools, Search &amp; AI</div>
          <div class="skill-list">Git, GitHub, REST APIs, Vercel, Technical SEO, AI SEO (AEO/GEO), Prompt Engineering</div>
        </div>
      </div>
    </section>

    <section>
      <h2>Professional Experience (Dawley Institute of Technology)</h2>
      ${EXPERIENCES.map(
        (exp) => `
        <div class="exp-item">
          <div class="exp-header">
            <span>${exp.role} &mdash; ${exp.company}</span>
            <span class="exp-duration">${exp.duration}</span>
          </div>
          <div class="exp-env">${exp.environment}</div>
          <ul>
            ${exp.responsibilities.map((r) => `<li>${r}</li>`).join("")}
          </ul>
        </div>
      `
      ).join("")}
    </section>
  </div>
</body>
</html>`;

  return new NextResponse(cvHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Muhammad_Abubakar_CV.html"',
    },
  });
}
