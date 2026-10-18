import { PDFDocument, rgb, StandardFonts, PDFName, PDFString } from "pdf-lib";
import fs from "fs";
import path from "path";

/**
 * Generates an ATS-friendly, single-page, executive digital marketing resume
 * for Anisa Hafila (B.Com Computer Application Graduate & Fresher).
 */
async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // Standard A4 format
  const { width, height } = page.getSize();

  // ATS-Standard Core Typefaces
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Modern Executive Color Palette
  // Navy: #0F172A (Deep Slate Navy), Teal: #0D9488, Body: #1E293B, Muted: #475569, Line: #E2E8F0
  const navyHeading = rgb(15 / 255, 23 / 255, 42 / 255);
  const tealAccent = rgb(13 / 255, 148 / 255, 136 / 255);
  const slateBody = rgb(30 / 255, 41 / 255, 59 / 255);
  const slateMuted = rgb(71 / 255, 85 / 255, 105 / 255);
  const dividerGray = rgb(226 / 255, 232 / 255, 240 / 255);

  const leftMargin = 40;
  const rightMargin = width - 40;
  const contentWidth = rightMargin - leftMargin;

  let y = height - 38;

  // Helper: Add clickable link annotation to PDF page
  function addLinkAnnotation(url, rect) {
    const linkAnnotation = pdfDoc.context.obj({
      Type: "Annot",
      Subtype: "Link",
      Rect: rect,
      Border: [0, 0, 0],
      A: {
        Type: "Action",
        S: "URI",
        URI: PDFString.of(url),
      },
    });
    const linkRef = pdfDoc.context.register(linkAnnotation);
    let annots = page.node.Annots();
    if (!annots) {
      annots = pdfDoc.context.obj([linkRef]);
      page.node.set(PDFName.of("Annots"), annots);
    } else {
      annots.push(linkRef);
    }
  }

  // Helper: Wrap text to fit within specified maximum width
  function wrapText(text, font, size, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine.length === 0 ? word : currentLine + " " + word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine.length > 0) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine.length > 0) lines.push(currentLine);
    return lines;
  }

  // ==========================================
  // HEADER SECTION
  // ==========================================
  page.drawText("ANISA HAFILA", {
    x: leftMargin,
    y: y,
    size: 22,
    font: fontBold,
    color: navyHeading,
  });
  y -= 17;

  page.drawText("Aspiring Digital Marketer  |  B.Com Computer Application Graduate  |  Fresher", {
    x: leftMargin,
    y: y,
    size: 9.8,
    font: fontBold,
    color: tealAccent,
  });
  y -= 15;

  // Contact items with individual positioning for clickable links
  let contactX = leftMargin;

  // Email
  const emailLabel = "Email: ";
  page.drawText(emailLabel, { x: contactX, y, size: 8.5, font: fontRegular, color: slateMuted });
  contactX += fontRegular.widthOfTextAtSize(emailLabel, 8.5);

  const emailVal = "anisahafila0@gmail.com";
  page.drawText(emailVal, { x: contactX, y, size: 8.5, font: fontBold, color: navyHeading });
  const emailWidth = fontBold.widthOfTextAtSize(emailVal, 8.5);
  addLinkAnnotation("mailto:anisahafila0@gmail.com", [contactX, y - 2, contactX + emailWidth, y + 10]);
  contactX += emailWidth;

  // Separator 1
  const sep1 = "   •   ";
  page.drawText(sep1, { x: contactX, y, size: 8.5, font: fontRegular, color: slateMuted });
  contactX += fontRegular.widthOfTextAtSize(sep1, 8.5);

  // LinkedIn
  const linkedinLabel = "LinkedIn: ";
  page.drawText(linkedinLabel, { x: contactX, y, size: 8.5, font: fontRegular, color: slateMuted });
  contactX += fontRegular.widthOfTextAtSize(linkedinLabel, 8.5);

  const linkedinVal = "linkedin.com/in/anisa-hafila";
  page.drawText(linkedinVal, { x: contactX, y, size: 8.5, font: fontBold, color: navyHeading });
  const linkedinWidth = fontBold.widthOfTextAtSize(linkedinVal, 8.5);
  addLinkAnnotation("https://www.linkedin.com/in/anisa-hafila", [contactX, y - 2, contactX + linkedinWidth, y + 10]);
  contactX += linkedinWidth;

  // Separator 2
  const sep2 = "   •   ";
  page.drawText(sep2, { x: contactX, y, size: 8.5, font: fontRegular, color: slateMuted });
  contactX += fontRegular.widthOfTextAtSize(sep2, 8.5);

  // Portfolio
  const portLabel = "Portfolio: ";
  page.drawText(portLabel, { x: contactX, y, size: 8.5, font: fontRegular, color: slateMuted });
  contactX += fontRegular.widthOfTextAtSize(portLabel, 8.5);

  const portVal = "anisahafila.dev";
  page.drawText(portVal, { x: contactX, y, size: 8.5, font: fontBold, color: navyHeading });
  const portWidth = fontBold.widthOfTextAtSize(portVal, 8.5);
  addLinkAnnotation("https://anisahafila.dev", [contactX, y - 2, contactX + portWidth, y + 10]);
  contactX += portWidth;

  // Separator 3
  const sep3 = "   •   ";
  page.drawText(sep3, { x: contactX, y, size: 8.5, font: fontRegular, color: slateMuted });
  contactX += fontRegular.widthOfTextAtSize(sep3, 8.5);

  // Location
  const locVal = "Open to Remote & On-Site";
  page.drawText(locVal, { x: contactX, y, size: 8.5, font: fontRegular, color: slateMuted });

  y -= 11;

  // Top Accent Bar: Teal highlight followed by subtle divider line
  page.drawLine({
    start: { x: leftMargin, y },
    end: { x: leftMargin + 50, y },
    thickness: 2,
    color: tealAccent,
  });
  page.drawLine({
    start: { x: leftMargin + 50, y },
    end: { x: rightMargin, y },
    thickness: 0.75,
    color: dividerGray,
  });
  y -= 15;

  // Helper for Section Headings
  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: leftMargin,
      y: y,
      size: 10,
      font: fontBold,
      color: navyHeading,
    });
    // Two-tone accent rule: teal anchor + slate divider
    page.drawLine({
      start: { x: leftMargin, y: y - 3.5 },
      end: { x: leftMargin + 32, y: y - 3.5 },
      thickness: 1.5,
      color: tealAccent,
    });
    page.drawLine({
      start: { x: leftMargin + 32, y: y - 3.5 },
      end: { x: rightMargin, y: y - 3.5 },
      thickness: 0.65,
      color: dividerGray,
    });
    y -= 14;
  }

  // ==========================================
  // 1. PROFESSIONAL SUMMARY
  // ==========================================
  drawSectionHeader("Professional Summary");
  const summaryParagraph =
    "Proactive and detail-oriented B.Com Computer Application graduate seeking an entry-level position as a Digital Marketing Executive, SEO Executive, or Social Media Executive. Combines strong business acumen and computer literacy with hands-on, self-directed practice across Search Engine Optimization (SEO), keyword research, social media strategy, content marketing, email marketing, and digital advertising fundamentals. Demonstrated practical competence through comprehensive portfolio projects including full website SEO audits, 7-day multi-pillar content calendars, keyword research matrices, and demo multi-channel ad campaigns. Motivated to leverage analytical discipline, creative storytelling, and an eager learning mindset to drive measurable online growth.";

  const summaryLines = wrapText(summaryParagraph, fontRegular, 8.5, contentWidth);
  summaryLines.forEach((line) => {
    page.drawText(line, {
      x: leftMargin,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: slateBody,
      lineHeight: 12.2,
    });
    y -= 12.2;
  });
  y -= 8;

  // ==========================================
  // 2. CORE DIGITAL MARKETING SKILLS
  // ==========================================
  drawSectionHeader("Core Competencies & Digital Marketing Skills");
  const skillCategories = [
    {
      label: "Search Engine Optimization (SEO):",
      items: "Keyword Research, Search Intent Mapping, On-Page SEO (Headings H1-H3, Meta Titles, Meta Descriptions, Image Alt Tags), Internal Linking Strategy, Google Search Console Basics, Google Trends",
    },
    {
      label: "Social Media Marketing:",
      items: "Multi-Pillar Content Planning (7-Day & 30-Day Calendars), Instagram & Facebook Strategy, Engaging Caption Writing & Actionable CTAs, Audience Engagement, Trend Discovery",
    },
    {
      label: "Content Marketing & Design:",
      items: "Blog Article Structuring & Outlines, SEO-Friendly Copywriting, Canva (Multi-Slide Carousels, Social Creatives, Infographics), Visual Storytelling, ChatGPT for Research & Ideation",
    },
    {
      label: "Advertising & Email Marketing:",
      items: "Google Search Ads Fundamentals, Meta Ads Manager Concepts, Audience Persona Research, A/B Ad Copy Variations, Email Marketing Campaign Basics & Newsletter Structuring",
    },
    {
      label: "Analytics & Marketing Tools:",
      items: "Google Analytics 4 (GA4) Fundamentals, Google Keyword Planner, WordPress (CMS Basics), Performance Reporting & Traffic Summaries, Competitor Research",
    },
  ];

  skillCategories.forEach((sc) => {
    const bulletPrefix = "•  ";
    page.drawText(bulletPrefix, {
      x: leftMargin + 2,
      y: y,
      size: 8.4,
      font: fontBold,
      color: tealAccent,
    });
    const bulletWidth = fontBold.widthOfTextAtSize(bulletPrefix, 8.4);

    page.drawText(sc.label + " ", {
      x: leftMargin + 2 + bulletWidth,
      y: y,
      size: 8.4,
      font: fontBold,
      color: navyHeading,
    });
    const labelWidth = fontBold.widthOfTextAtSize(sc.label + " ", 8.4);

    const remainingWidth = contentWidth - (2 + bulletWidth + labelWidth);
    const words = sc.items.split(" ");
    let firstLine = "";
    let remainingWords = [];

    for (let w = 0; w < words.length; w++) {
      const test = firstLine.length === 0 ? words[w] : firstLine + " " + words[w];
      if (fontRegular.widthOfTextAtSize(test, 8.2) <= remainingWidth) {
        firstLine = test;
      } else {
        remainingWords = words.slice(w);
        break;
      }
    }

    page.drawText(firstLine, {
      x: leftMargin + 2 + bulletWidth + labelWidth,
      y: y,
      size: 8.2,
      font: fontRegular,
      color: slateMuted,
    });
    y -= 11.4;

    if (remainingWords.length > 0) {
      const nextLines = wrapText(remainingWords.join(" "), fontRegular, 8.2, contentWidth - 14);
      nextLines.forEach((nl) => {
        page.drawText(nl, {
          x: leftMargin + 14,
          y: y,
          size: 8.2,
          font: fontRegular,
          color: slateMuted,
        });
        y -= 11.4;
      });
    }
  });
  y -= 8;

  // ==========================================
  // 3. PRACTICAL MARKETING PROJECTS & CASE STUDIES
  // ==========================================
  drawSectionHeader("Practical Marketing Projects & Case Studies");

  const projectData = [
    {
      title: "Website SEO Optimization Audit & Keyword Strategy",
      role: "Self-Initiated Portfolio Case Study  |  Search Engine Optimization",
      bullets: [
        "Executed simulated technical and on-page SEO audit identifying title tag lengths, meta description gaps, heading structures, and duplicate tags.",
        "Built comprehensive keyword research mapping matrix targeting informational and commercial search queries using Google Keyword Planner and Trends.",
        "Formulated actionable content optimization recommendations and internal linking architecture to enhance crawlability and user engagement metrics.",
      ],
    },
    {
      title: "Photo & Video Editing Blog Strategy",
      role: "Self-Initiated Portfolio Case Study  |  Content Marketing & SEO Practice",
      bullets: [
        "Researched long-tail, low-competition keyword clusters and search intent around mobile video editing apps (CapCut, Premiere Rush, Lightroom Mobile).",
        "Structured SEO-compliant blog pillar articles with semantic heading hierarchy (H1-H3), optimized meta tags, bullet points, and image alt text.",
        "Designed cohesive visual graphics, educational multi-slide carousels, and promotional templates in Canva to maximize organic reach and shares.",
      ],
    },
    {
      title: "Multi-Pillar Social Media Content Strategy",
      role: "Self-Initiated Portfolio Case Study  |  Social Media Marketing",
      bullets: [
        "Engineered a 7-day multi-platform posting calendar organized across 4 strategic pillars: Educate (Carousels), Inspire, Engage (Polls), and Convert.",
        "Authored high-converting headline hooks, value-packed captions, and clear calls to action (CTAs) tailored to target creator personas on Instagram and Facebook.",
        "Designed ready-to-publish visual templates in Canva and established proactive community engagement and hashtag research methodologies.",
      ],
    },
    {
      title: "Full-Funnel Digital Ad Campaign & Email Marketing Blueprint",
      role: "Simulated Portfolio Campaign  |  Paid Advertising (Google & Meta) & Email Nurturing",
      bullets: [
        "Constructed a multi-stage campaign blueprint balancing Google Search intent capture with Meta Ads visual discovery and retargeting reserves.",
        "Drafted A/B split-test ad copy variations addressing audience pain points versus direct benefits, defining CTR and CPC performance benchmarks.",
        "Designed an email marketing lead nurture sequence outlining automated welcome emails, educational value delivery, and conversion touchpoints.",
      ],
    },
  ];

  projectData.forEach((p) => {
    page.drawText(p.title, {
      x: leftMargin,
      y: y,
      size: 9.2,
      font: fontBold,
      color: navyHeading,
    });
    const pTitleWidth = fontBold.widthOfTextAtSize(p.title, 9.2);
    page.drawText("  —  " + p.role, {
      x: leftMargin + pTitleWidth,
      y: y,
      size: 7.8,
      font: fontOblique,
      color: tealAccent,
    });
    y -= 11.5;

    p.bullets.forEach((bullet) => {
      page.drawText("•", {
        x: leftMargin + 6,
        y: y,
        size: 7.8,
        font: fontBold,
        color: slateMuted,
      });
      const bulletLines = wrapText(bullet, fontRegular, 8.1, contentWidth - 18);
      bulletLines.forEach((bLine) => {
        page.drawText(bLine, {
          x: leftMargin + 16,
          y: y,
          size: 8.1,
          font: fontRegular,
          color: slateBody,
          lineHeight: 11.2,
        });
        y -= 11.2;
      });
    });
    y -= 4;
  });
  y -= 4;

  // ==========================================
  // 4. EDUCATION & FOUNDATIONAL STUDIES
  // ==========================================
  drawSectionHeader("Education & Foundational Studies");

  const educationEntries = [
    {
      degree: "Bachelor of Commerce in Computer Application (B.Com Computer Application)",
      institution: "Undergraduate Degree  |  Fresher / Recent Graduate",
      details: "Core Coursework: Computer Applications, Business Communication, Principles of Marketing, E-Commerce, Commercial Data Analysis, and Office Automation.",
    },
    {
      degree: "Digital Marketing & Analytics Self-Directed Specialization",
      institution: "Practical Coursework & Industry Frameworks Study",
      details: "Hands-on study covering Technical SEO Fundamentals, Google Analytics 4, Meta Ads Manager, Keyword Planning, and Data-Driven Content Strategy.",
    },
  ];

  educationEntries.forEach((edu) => {
    page.drawText(edu.degree, {
      x: leftMargin,
      y: y,
      size: 9,
      font: fontBold,
      color: navyHeading,
    });
    const degWidth = fontBold.widthOfTextAtSize(edu.degree, 9);
    page.drawText("  —  " + edu.institution, {
      x: leftMargin + degWidth,
      y: y,
      size: 7.8,
      font: fontOblique,
      color: tealAccent,
    });
    y -= 11;

    page.drawText(edu.details, {
      x: leftMargin + 10,
      y: y,
      size: 8,
      font: fontRegular,
      color: slateMuted,
      maxWidth: contentWidth - 10,
    });
    y -= 14;
  });

  const pdfBytes = await pdfDoc.save();
  const outPath = path.resolve("public/resume.pdf");
  fs.writeFileSync(outPath, pdfBytes);
  console.log("Resume PDF generated successfully at:", outPath);
  console.log("Total pages:", pdfDoc.getPageCount(), "| Final y coordinate:", y);
}

createResume().catch(console.error);
