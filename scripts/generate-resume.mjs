import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 format
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette: Dark Navy #0B1120, Indigo #4F46E5, Cyan #06B6D4, Text #1E293B, Muted #64748B
  const primaryColor = rgb(79 / 255, 70 / 255, 229 / 255);
  const darkNavy = rgb(11 / 255, 17 / 255, 32 / 255);
  const slateText = rgb(30 / 255, 41 / 255, 59 / 255);
  const mutedText = rgb(100 / 255, 116 / 255, 139 / 255);
  const accentCyan = rgb(6 / 255, 182 / 255, 212 / 255);

  let y = height - 45;

  // Header Bar background accent
  page.drawRectangle({
    x: 0,
    y: height - 90,
    width: width,
    height: 90,
    color: darkNavy,
  });

  // Name
  page.drawText("ANISA HAFILA", {
    x: 40,
    y: height - 42,
    size: 22,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  // Professional Title
  page.drawText("Aspiring Digital Marketer  |  SEO & Social Media Specialist", {
    x: 40,
    y: height - 60,
    size: 11,
    font: fontRegular,
    color: accentCyan,
  });

  // Contact info
  const contactLine = "Email: anisa.hafila.marketing@gmail.com   |   LinkedIn: linkedin.com/feed   |   Location: Open to Remote & On-Site";
  page.drawText(contactLine, {
    x: 40,
    y: height - 78,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.85, 0.9, 0.98),
  });

  y = height - 110;

  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: 40,
      y: y,
      size: 11,
      font: fontBold,
      color: primaryColor,
    });
    page.drawLine({
      start: { x: 40, y: y - 4 },
      end: { x: width - 40, y: y - 4 },
      thickness: 1,
      color: rgb(0.85, 0.88, 0.95),
    });
    y -= 18;
  }

  // PROFESSIONAL SUMMARY
  drawSectionHeader("Professional Summary");
  const summaryText =
    "Motivated and detail-oriented Digital Marketing Fresher with strong hands-on foundational skills in Search Engine Optimization (SEO), Social Media Strategy, Content Creation, and Performance Marketing concepts. Passionate about helping businesses grow online through data-driven campaigns, audience intent mapping, and creative digital storytelling. Seeking an entry-level role as Digital Marketing Executive, SEO Executive, or Social Media Executive.";
  
  // Wrap summary
  page.drawText(summaryText, {
    x: 40,
    y: y,
    size: 9,
    font: fontRegular,
    color: slateText,
    lineHeight: 13,
    maxWidth: width - 80,
  });
  y -= 45;

  // CORE SKILLS
  drawSectionHeader("Core Competencies & Digital Marketing Skills");
  const skills = [
    { cat: "SEO & Search Marketing:", val: "Keyword Research, Search Intent, On-Page SEO, Content Optimization, Internal Linking, Google Search Console, Google Trends" },
    { cat: "Social Media Marketing:", val: "Content Calendars, Instagram Strategy, Facebook Marketing Fundamentals, Caption Writing, Community Engagement" },
    { cat: "Content & Creative:", val: "Blog Writing, SEO-friendly Copywriting, Content Structure, Visual Storytelling, Canva Graphic Design" },
    { cat: "Advertising Concepts:", val: "Google Ads Fundamentals, Meta Ads Manager, Audience Research, Ad Copywriting, Campaign Planning, Conversion Tracking Concepts" },
    { cat: "Analytics & AI Tools:", val: "Google Analytics 4 (GA4) Fundamentals, ChatGPT Content Research, Canva Pro, Marketing Reporting" }
  ];

  skills.forEach(s => {
    page.drawText(`•  ${s.cat} `, {
      x: 40,
      y: y,
      size: 8.5,
      font: fontBold,
      color: slateText,
    });
    const prefixWidth = fontBold.widthOfTextAtSize(`•  ${s.cat} `, 8.5);
    page.drawText(s.val, {
      x: 40 + prefixWidth,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: mutedText,
      maxWidth: width - 80 - prefixWidth,
    });
    y -= 14;
  });
  y -= 6;

  // PRACTICAL PROJECTS & CASE STUDIES
  drawSectionHeader("Practical Projects & Portfolio Case Studies");

  const projects = [
    {
      title: "Photo & Video Editing Blog  |  Content Marketing & SEO Practice",
      bullets: [
        "Conducted in-depth keyword research and search intent clustering around photo/video editing workflows and tools.",
        "Engineered SEO-compliant content architecture with optimized H1-H3 headings, meta titles, descriptions, and alt tags.",
        "Developed visual content calendar and promotional distribution plan to maximize organic search discovery."
      ]
    },
    {
      title: "SEO Website Optimization Audit  |  Search Engine Optimization",
      bullets: [
        "Executed simulated technical and on-page SEO audit identifying meta description gaps, heading structures, and duplicate tags.",
        "Built comprehensive keyword mapping and internal linking framework targeting high-intent commercial keywords.",
        "Formulated actionable content optimization recommendations to improve crawlability and user engagement metrics."
      ]
    },
    {
      title: "Social Media Content Strategy  |  Social Media Marketing",
      bullets: [
        "Defined comprehensive target audience persona and crafted 4 core content pillars (Educational, Engagement, Promotional, Proof).",
        "Designed 7-day multi-platform posting calendar with visual mockups created in Canva and tested catchy hook variations.",
        "Engineered hashtag research methodology and proactive audience engagement protocol."
      ]
    },
    {
      title: "Digital Advertising Campaign Concept  |  Paid Ads (Google & Meta)",
      bullets: [
        "Designed full-funnel digital campaign concept with distinct awareness, consideration, and conversion ad sets.",
        "Drafted A/B ad copy variations tailored to demographic personas and planned mock budget allocation across channels.",
        "Established KPI measurement roadmap focusing on CTR, CPC, conversion event tracking, and return on ad spend."
      ]
    }
  ];

  projects.forEach(p => {
    page.drawText(p.title, {
      x: 40,
      y: y,
      size: 9.5,
      font: fontBold,
      color: primaryColor,
    });
    y -= 12;

    p.bullets.forEach(b => {
      page.drawText(`-  ${b}`, {
        x: 50,
        y: y,
        size: 8.5,
        font: fontRegular,
        color: slateText,
        maxWidth: width - 90,
      });
      y -= 12;
    });
    y -= 4;
  });

  // LEARNING JOURNEY & DEVELOPMENT
  drawSectionHeader("Education & Learning Journey");
  const education = [
    {
      role: "Continuous Digital Marketing & SEO Specialization",
      org: "Self-Directed Practical Learning & Certification Preparation",
      desc: "Deep-dive focus on technical SEO fundamentals, Google Analytics 4, Meta Ads Manager, and modern content strategy through real-world case simulations."
    },
    {
      role: "Foundational Marketing Principles & Analytics",
      org: "Independent Academic & Professional Study",
      desc: "Focus on consumer behavior, search intent analysis, digital branding, copy psychology, and marketing data interpretation."
    }
  ];

  education.forEach(e => {
    page.drawText(e.role, {
      x: 40,
      y: y,
      size: 9,
      font: fontBold,
      color: slateText,
    });
    page.drawText(e.org, {
      x: 40,
      y: y - 11,
      size: 8,
      font: fontOblique,
      color: primaryColor,
    });
    page.drawText(e.desc, {
      x: 40,
      y: y - 22,
      size: 8,
      font: fontRegular,
      color: mutedText,
      maxWidth: width - 80,
    });
    y -= 32;
  });

  const pdfBytes = await pdfDoc.save();
  const outPath = path.resolve("public/resume.pdf");
  fs.writeFileSync(outPath, pdfBytes);
  console.log("Resume PDF generated successfully at:", outPath);
}

createResume().catch(console.error);
