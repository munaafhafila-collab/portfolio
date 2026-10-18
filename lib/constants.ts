export interface SkillItem {
  name: string;
  level: "Practiced in Projects" | "Currently Learning";
  category: "seo" | "social" | "content" | "ads" | "analytics";
  description: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  tagline: string;
  badge: "Content & SEO" | "Search Engine Optimization" | "Social Media Marketing" | "Paid Advertising";
  isPracticeProject: boolean;
  statusLabel: string;
  thumbnail: string;
  shortDescription: string;
  toolsUsed: string[];
  overview: string;
  challenge: string;
  strategySteps: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  keyInsights: string[];
  deliverablePreview: {
    type: "table" | "calendar" | "adCopy" | "seoChecklist";
    title: string;
    data: any;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
  suitableFor: string;
}

export interface ToolItem {
  name: string;
  category: string;
  status: "Practiced in Projects" | "Currently Learning";
  iconName: string;
  description: string;
  badgeColor: string;
}

export interface JourneyMilestone {
  stage: string;
  title: string;
  description: string;
  skillsAcquired: string[];
  status: "Completed Milestone" | "Active Pursuit";
}

export const PERSONAL_INFO = {
  name: "Anisa Hafila",
  title: "Aspiring Digital Marketer",
  experienceLevel: "Fresher",
  careerGoals: [
    "Digital Marketing Executive",
    "SEO Executive",
    "Social Media Marketing Executive",
  ],
  heroBio:
    "I help businesses grow online through strategic digital marketing, engaging content, search engine optimization, and data-driven campaigns that attract the right audience and drive meaningful results.",
  email: "anisa.hafila.marketing@gmail.com",
  linkedin: "https://www.linkedin.com/feed/",
  github: "https://github.com",
  location: "Open to Remote & On-Site Opportunities",
  rotatingTitles: [
    "Aspiring Digital Marketer",
    "SEO Enthusiast",
    "Social Media Marketer",
    "Content Creator",
    "Digital Growth Enthusiast",
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Tools", href: "#tools" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_HIGHLIGHTS = [
  {
    title: "Digital Marketing Learning Journey",
    description:
      "Self-directed student of modern marketing principles, actively applying frameworks through hands-on sandbox projects, mock audits, and strategic content planning.",
    icon: "GraduationCap",
  },
  {
    title: "SEO & Content Optimization",
    description:
      "Deeply interested in search intent matching, on-page content architecture, keyword clustering, and crafting metadata that improves visibility and click-through rates.",
    icon: "Search",
  },
  {
    title: "Social Media Strategy",
    description:
      "Focused on building structured multi-platform content calendars, defining clear audience personas, and writing engaging captions with clear calls to action.",
    icon: "Share2",
  },
  {
    title: "Creative Content Development",
    description:
      "Designing clean visual assets and promotional graphics in Canva, balancing brand consistency with scroll-stopping digital storytelling.",
    icon: "Sparkles",
  },
  {
    title: "Marketing Analytics Fundamentals",
    description:
      "Developing practical competency in interpreting Google Analytics 4, Search Console impressions, and performance metrics to guide tactical adjustments.",
    icon: "BarChart3",
  },
  {
    title: "Continuous Professional Development",
    description:
      "Staying on top of search algorithm updates, AI-assisted research workflows, and modern paid advertising frameworks to deliver forward-thinking ideas.",
    icon: "TrendingUp",
  },
];

export const SKILLS_CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "seo", label: "SEO & Optimization" },
  { id: "social", label: "Social Media Marketing" },
  { id: "content", label: "Content & Copywriting" },
  { id: "ads", label: "Advertising Fundamentals" },
  { id: "analytics", label: "Analytics & AI Tools" },
];

export const SKILLS_DATA: SkillItem[] = [
  // SEO
  {
    name: "Keyword Research",
    level: "Practiced in Projects",
    category: "seo",
    description: "Identifying high-relevance search terms using Google Keyword Planner, Google Trends, and competitor search intent analysis.",
  },
  {
    name: "Search Intent Mapping",
    level: "Practiced in Projects",
    category: "seo",
    description: "Aligning informational, navigational, commercial, and transactional search queries with appropriate content types.",
  },
  {
    name: "On-Page SEO Optimization",
    level: "Practiced in Projects",
    category: "seo",
    description: "Optimizing H1-H3 heading hierarchies, keyword density, internal anchor links, and clean semantic structures.",
  },
  {
    name: "Metadata & Snippet Crafting",
    level: "Practiced in Projects",
    category: "seo",
    description: "Writing compelling meta titles, meta descriptions, and image alt attributes adhering to recommended character counts.",
  },
  {
    name: "Internal Linking Strategy",
    level: "Practiced in Projects",
    category: "seo",
    description: "Creating logical topic clusters and contextual links between pillar articles to distribute page authority.",
  },
  {
    name: "Google Search Console",
    level: "Currently Learning",
    category: "seo",
    description: "Learning to monitor organic clicks, impressions, average position, indexing status, and sitemap submissions.",
  },
  {
    name: "Off-Page SEO Fundamentals",
    level: "Currently Learning",
    category: "seo",
    description: "Understanding backlink profiles, domain authority factors, and organic digital PR outreach basics.",
  },

  // Social Media
  {
    name: "Instagram Content Planning",
    level: "Practiced in Projects",
    category: "social",
    description: "Planning carousel educational posts, single-image quotes, and Reels scripts designed around target user interests.",
  },
  {
    name: "Social Media Calendars",
    level: "Practiced in Projects",
    category: "social",
    description: "Structuring 7-day and 30-day posting schedules balancing educational, engagement, and promotional content pillars.",
  },
  {
    name: "Caption Writing & CTAs",
    level: "Practiced in Projects",
    category: "social",
    description: "Drafting engaging hooks, concise body storytelling, and clear calls to action that encourage comments and shares.",
  },
  {
    name: "Audience Engagement Tactics",
    level: "Practiced in Projects",
    category: "social",
    description: "Proactive community interaction, story polls, question stickers, and strategic hashtag selection.",
  },
  {
    name: "Facebook Marketing Fundamentals",
    level: "Currently Learning",
    category: "social",
    description: "Understanding Facebook Business Pages, group community engagement, and organic reach optimization.",
  },

  // Content Marketing
  {
    name: "Blog Writing & Structuring",
    level: "Practiced in Projects",
    category: "content",
    description: "Writing well-researched, reader-friendly articles with scannable bullet points, actionable tips, and clear summaries.",
  },
  {
    name: "Copywriting Fundamentals",
    level: "Practiced in Projects",
    category: "content",
    description: "Applying AIDA (Attention, Interest, Desire, Action) and PAS (Problem, Agitate, Solve) frameworks to headlines and copy.",
  },
  {
    name: "Canva Graphic Design",
    level: "Practiced in Projects",
    category: "content",
    description: "Creating visually cohesive social media graphics, blog thumbnails, carousel slides, and promotional banners.",
  },
  {
    name: "Visual Storytelling",
    level: "Practiced in Projects",
    category: "content",
    description: "Transforming dry information into diagrams, infographic snippets, and digestible visual slides.",
  },
  {
    name: "Content Research & Ideation",
    level: "Practiced in Projects",
    category: "content",
    description: "Uncovering trending industry topics, audience pain points, and competitor content gaps.",
  },

  // Advertising
  {
    name: "Google Ads Fundamentals",
    level: "Currently Learning",
    category: "ads",
    description: "Studying Google Search Campaign setup, keyword match types (exact, phrase, broad), ad extensions, and Quality Score.",
  },
  {
    name: "Meta Ads Fundamentals",
    level: "Currently Learning",
    category: "ads",
    description: "Understanding Meta Ads Manager campaign structures, custom & lookalike audiences, and ad placements.",
  },
  {
    name: "Ad Copywriting & Variations",
    level: "Practiced in Projects",
    category: "ads",
    description: "Drafting concise, benefit-driven ad headlines and descriptions for A/B testing across target buyer personas.",
  },
  {
    name: "Audience Persona Research",
    level: "Practiced in Projects",
    category: "ads",
    description: "Mapping demographics, pain points, motivations, and purchase triggers for digital ad targeting.",
  },
  {
    name: "Conversion Tracking Concepts",
    level: "Currently Learning",
    category: "ads",
    description: "Grasping pixel setup, event triggers, thank-you page conversions, and attribution modeling basics.",
  },

  // Analytics & AI Tools
  {
    name: "Google Analytics 4 Fundamentals",
    level: "Currently Learning",
    category: "analytics",
    description: "Navigating GA4 reports, user acquisition channels, event counts, engagement rates, and key metrics.",
  },
  {
    name: "ChatGPT for Content Research",
    level: "Practiced in Projects",
    category: "analytics",
    description: "Leveraging structured prompts to brainstorm content ideas, draft initial outlines, and analyze search intent.",
  },
  {
    name: "Marketing Performance Reporting",
    level: "Practiced in Projects",
    category: "analytics",
    description: "Compiling actionable summaries of traffic sources, top-performing posts, and keyword ranking movements.",
  },
  {
    name: "Google Trends",
    level: "Practiced in Projects",
    category: "analytics",
    description: "Evaluating seasonal search volume trends and regional interest to time content publication effectively.",
  },
];

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "photo-video-editing-blog",
    title: "Photo & Video Editing Blog Strategy",
    category: "Content Marketing and SEO",
    tagline: "Content architecture, keyword research, and on-page optimization for a creative media blog.",
    badge: "Content & SEO",
    isPracticeProject: true,
    statusLabel: "Self-Initiated Portfolio Case Study",
    thumbnail: "/images/projects/blog-seo.jpg",
    shortDescription:
      "A comprehensive content marketing and on-page SEO case study demonstrating topic clustering, search intent analysis, and structured blog article optimization.",
    toolsUsed: ["Google Keyword Planner", "Canva", "Google Trends", "WordPress (CMS)", "ChatGPT Research"],
    overview:
      "This project showcases a complete content marketing and SEO roadmap for a niche blog dedicated to aspiring content creators, mobile photographers, and video editors. The focus was on identifying high-intent informational queries that beginner creators search for, then structuring helpful, readable articles designed to rank organically.",
    challenge:
      "The creative media and video editing space is saturated with technical tutorials. The objective was to design a targeted content strategy focusing on long-tail, low-competition keywords that beginner creators search for, paired with visually appealing Canva-designed graphics.",
    strategySteps: [
      {
        title: "1. Topic Research & Audience Identification",
        description: "Profiled beginner creators who use smartphone editing apps (CapCut, Lightroom Mobile, Premiere Rush) and struggle with color grading, lighting, and pacing.",
        deliverables: [
          "Primary Persona: The Solo Smartphone Creator",
          "Secondary Persona: Emerging Freelance Social Media Manager",
          "5 Core Content Buckets: App Comparisons, Color Grading, Sound Design, Export Settings, Workflow Hacks"
        ],
      },
      {
        title: "2. Keyword Research & Search Intent Mapping",
        description: "Used keyword research frameworks to uncover low-competition, high-relevance search queries with clear informational intent.",
        deliverables: [
          "Target Keyword: 'best mobile video editing apps for beginners' (Informational)",
          "Secondary Keyword: 'how to color grade in capcut mobile' (Tutorial/Action)",
          "Long-tail Keyword: 'capcut export settings for instagram reels high quality' (Specific Problem)",
        ],
      },
      {
        title: "3. On-Page SEO Architecture & Headings",
        description: "Structured a pillar article template adhering to clean semantic HTML hierarchy (H1, H2, H3), concise paragraphs, bullet points, and optimized metadata.",
        deliverables: [
          "Optimized Meta Title (58 chars): Best Video Editing Apps for Beginners in 2025 (Tested)",
          "Meta Description (154 chars): Discover the top beginner-friendly video editing apps for mobile & desktop. Compare features, export options, and tips to level up your video edits today.",
          "Image Alt Text Guidelines for all tutorial screenshots",
        ],
      },
      {
        title: "4. Visual Content Planning & Distribution",
        description: "Designed accompanying visual assets in Canva, including custom featured headers, comparison charts, and Instagram carousel snippets to drive multi-channel discovery.",
        deliverables: [
          "Featured Blog Banner (1200x630px)",
          "Step-by-step 5-slide Instagram recap carousel",
          "Internal linking map linking tutorial articles to software recommendation pages"
        ],
      },
    ],
    keyInsights: [
      "Long-tail, problem-solving keywords (e.g. export settings) offer significantly easier organic ranking paths for new websites than broad terms like 'video editing'.",
      "Pairing blog content with scannable visuals and social media carousels increases dwell time and encourages bookmarking.",
      "Thorough search intent analysis prevents mismatched content format (e.g. providing a quick listicle when the user needs a step-by-step tutorial).",
    ],
    deliverablePreview: {
      type: "table",
      title: "Keyword Research & Target Mapping Matrix",
      data: [
        { keyword: "best video editing apps for beginners", volume: "14,800/mo", intent: "Informational", difficulty: "Medium", targetPage: "Pillar Guide" },
        { keyword: "how to color grade in capcut", volume: "6,600/mo", intent: "Tutorial", difficulty: "Low-Med", targetPage: "Step-by-Step Guide" },
        { keyword: "capcut high quality export settings", volume: "4,200/mo", intent: "Problem-Solving", difficulty: "Low", targetPage: "Quick Solution Post" },
        { keyword: "lightroom mobile preset installation", volume: "2,900/mo", intent: "How-To Guide", difficulty: "Low", targetPage: "Visual Walkthrough" },
      ],
    },
  },
  {
    id: "seo-website-optimization",
    title: "SEO Website Optimization Audit",
    category: "Search Engine Optimization",
    tagline: "Comprehensive on-page technical checklist, metadata optimization, and internal linking framework.",
    badge: "Search Engine Optimization",
    isPracticeProject: true,
    statusLabel: "Simulated On-Page Audit Project",
    thumbnail: "/images/projects/seo-audit.jpg",
    shortDescription:
      "A hands-on simulated on-page SEO audit analyzing website architecture, metadata gaps, keyword cannibalization risks, and content optimization recommendations.",
    toolsUsed: ["Google Search Console (Study)", "Google Keyword Planner", "Screaming Frog (Learning)", "Google Docs"],
    overview:
      "In this practice project, I performed an in-depth on-page SEO evaluation for a sample modern web services platform. The analysis focused on auditing title tags, meta descriptions, heading structure hierarchy, URL hygiene, internal linking bottlenecks, and image accessibility.",
    challenge:
      "Many small businesses and service websites fail to capture organic search traffic because their web pages have generic title tags (like 'Home' or 'Services'), missing meta descriptions, poorly structured H1/H2 tags, and no internal link distribution.",
    strategySteps: [
      {
        title: "1. Baseline Audit & Crawl Analysis",
        description: "Evaluated key page templates (Homepage, 3 Service Pages, 4 Blog Posts) to identify on-page deficiencies and content gaps.",
        deliverables: [
          "Identified 4 pages missing meta descriptions resulting in generic search engine snippets.",
          "Detected missing H1 tags on 2 landing pages where styling classes replaced semantic tags.",
          "Found 18 images without descriptive alt text.",
        ],
      },
      {
        title: "2. Title & Meta Description Rewrite Framework",
        description: "Created standardized, click-worthy metadata formulations following the [Primary Keyword] – [Secondary Benefit] | [Brand] pattern within safe pixel/character boundaries.",
        deliverables: [
          "Before: 'Home - Fast Tech Solutions'",
          "Optimized: 'Modern Web & Digital Growth Solutions | Fast Tech'",
          "Meta Description: 'Empower your business with scalable web development and strategic digital marketing. Discover our transparent process and book a free discovery session today.' (156 chars)",
        ],
      },
      {
        title: "3. Internal Linking & Content Architecture",
        description: "Constructed a visual internal linking blueprint establishing parent-child relationships between core service offerings and supporting informational articles.",
        deliverables: [
          "Defined contextual in-text anchor links using descriptive keyword phrases rather than generic 'click here' text.",
          "Implemented breadcrumb navigation recommendations.",
        ],
      },
      {
        title: "4. Actionable Content Recommendations",
        description: "Delivered a structured optimization checklist with prioritized effort-vs-impact scores for engineering and content teams.",
        deliverables: [
          "Schema Markup recommendations (LocalBusiness & FAQPage)",
          "Page speed and image compression guidelines (WebP format adoption)",
          "Clean URL slug rewriting plan removing stop words and query parameters",
        ],
      },
    ],
    keyInsights: [
      "Fixing semantic H1 tags and writing targeted meta descriptions is one of the highest-leverage initial optimizations for any website.",
      "Clear internal linking helps search engine crawlers understand contextual topical authority and keeps visitors exploring related services.",
      "Descriptive image alt text not only aids accessibility compliance (WCAG) but also opens an additional traffic channel via Google Images.",
    ],
    deliverablePreview: {
      type: "seoChecklist",
      title: "Sample On-Page Audit Checklist & Recommendations",
      data: [
        { item: "Single H1 Tag per Page with Primary Keyword", status: "Resolved", priority: "High" },
        { item: "Unique Meta Title (50-60 characters) with Brand Suffix", status: "Resolved", priority: "High" },
        { item: "Compelling Meta Description (140-160 chars) with Call-to-Action", status: "Resolved", priority: "High" },
        { item: "Descriptive Alt Text on all Informative Images", status: "Resolved", priority: "Medium" },
        { item: "Descriptive Internal Anchor Text (No 'Click Here')", status: "Resolved", priority: "Medium" },
        { item: "Schema.org Structured Data Implementation", status: "Recommended", priority: "High" },
      ],
    },
  },
  {
    id: "social-media-content-strategy",
    title: "Social Media Multi-Pillar Content Strategy",
    category: "Social Media Marketing",
    tagline: "Audience persona profiling, 4 content pillars, 7-day posting calendar, and creative Canva concepts.",
    badge: "Social Media Marketing",
    isPracticeProject: true,
    statusLabel: "Strategic Social Media Blueprint",
    thumbnail: "/images/projects/social-strategy.jpg",
    shortDescription:
      "A complete social media marketing blueprint featuring detailed audience persona mapping, a 4-pillar content engine, weekly calendar scheduling, and visual Canva concepts.",
    toolsUsed: ["Canva Pro", "Instagram Creator Studio", "Notion Content Calendar", "ChatGPT Prompting"],
    overview:
      "This project showcases a cohesive social media marketing plan tailored to a modern lifestyle brand or online service provider. It establishes an authentic brand voice, balances educational value with promotional messages, and outlines an active community engagement framework.",
    challenge:
      "Businesses often struggle with consistency on social media because they lack structured content pillars, leading to last-minute posting, fragmented aesthetics, and low engagement rates.",
    strategySteps: [
      {
        title: "1. Target Audience Persona Development",
        description: "Created 'Maya The Mindful Professional' (Age 24-34, values work-life balance, active on Instagram and LinkedIn, seeks actionable tips over fluff).",
        deliverables: [
          "Key Motivations: Career growth, personal well-being, practical time management tools.",
          "Pain Points: Overwhelmed by generic advice, limited time to read long articles.",
          "Preferred Formats: 5-slide carousels, 15-second Reels with captions, quote graphics.",
        ],
      },
      {
        title: "2. The 4 Content Pillars Framework",
        description: "Balanced weekly posts across four purposeful pillars to maintain variety and prevent audience fatigue.",
        deliverables: [
          "Pillar 1: Educate (40%) – Step-by-step guides, how-to carousels, industry tool recommendations.",
          "Pillar 2: Inspire (25%) – Relatable lessons, motivational quotes, behind-the-scenes milestones.",
          "Pillar 3: Engage (20%) – Polls, 'This or That' stories, question prompts to spark comment conversations.",
          "Pillar 4: Convert (15%) – Service highlights, client problem scenarios, invitations to connect.",
        ],
      },
      {
        title: "3. 7-Day Posting Schedule & Copywriting",
        description: "Designed a weekly content calendar with tailored hooks, value-dense body text, and direct calls to action.",
        deliverables: [
          "Hook Formula: 'The 3 Mistakes Keeping You Stuck in [Problem] (And How to Fix Them)'",
          "Hashtag Strategy: 3 broad tags, 5 community tags, and 4 niche-specific long-tail tags.",
        ],
      },
      {
        title: "4. Canva Creative Direction",
        description: "Built a cohesive visual design system in Canva with a defined color palette, typography pairing, and reusable templates.",
        deliverables: [
          "Carousel template suite for educational posts",
          "Story interaction templates (Polls, Q&A)",
          "Consistent typography: Bold modern sans-serif headlines with clean body text"
        ],
      },
    ],
    keyInsights: [
      "Educational carousels generate significantly higher save and share rates than single-image graphics.",
      "A clear 4-pillar system removes creative block by giving every post a defined strategic objective.",
      "The first 2 lines of a caption (the hook) determine whether a user clicks '...more' or keeps scrolling.",
    ],
    deliverablePreview: {
      type: "calendar",
      title: "Sample 7-Day Content Calendar & Posting Matrix",
      data: [
        { day: "Monday", pillar: "Inspire", format: "Single Graphic", topic: "Weekly Mindset Reset: Focus on Systems, Not Just Goals", cta: "Save this for your week ahead" },
        { day: "Tuesday", pillar: "Educate", format: "5-Slide Carousel", topic: "3 Free Marketing Tools Every Beginner Should Know", cta: "Share with a creator friend" },
        { day: "Wednesday", pillar: "Engage", format: "Stories + Poll", topic: "What's your biggest digital marketing headache right now?", cta: "Vote in the poll below" },
        { day: "Thursday", pillar: "Educate", format: "Infographic", topic: "The Anatomy of a High-Converting Landing Page", cta: "Drop a bookmark if helpful" },
        { day: "Friday", pillar: "Convert", format: "Case Example", topic: "How small on-page tweaks doubled organic discoverability", cta: "DM 'GROWTH' to discuss your site" },
        { day: "Saturday", pillar: "Community", format: "Behind the Scenes", topic: "My weekly learning recap & what I'm experimenting with next", cta: "What did you learn this week?" },
        { day: "Sunday", pillar: "Light / Rest", format: "Quote Card", topic: "Consistency over perfection: Enjoy your weekend rest", cta: "Double-tap if you agree" },
      ],
    },
  },
  {
    id: "digital-advertising-campaign-concept",
    title: "Digital Advertising Campaign Concept",
    category: "Paid Advertising",
    tagline: "Full-funnel campaign blueprint, audience segmentation, A/B ad copy variations, and KPI measurement plan.",
    badge: "Paid Advertising",
    isPracticeProject: true,
    statusLabel: "Simulated Ad Campaign Blueprint",
    thumbnail: "/images/projects/ad-campaign.jpg",
    shortDescription:
      "A strategic paid advertising campaign concept across Google Search and Meta Ads, demonstrating audience segmentation, A/B ad variations, and KPI measurement frameworks.",
    toolsUsed: ["Meta Ads Manager (Concept)", "Google Ads (Concept)", "Canva", "Google Sheets"],
    overview:
      "This project showcases a complete paid advertising campaign concept engineered for a modern digital course or productivity software launch. The plan outlines top-of-funnel brand awareness, middle-of-funnel consideration, and bottom-of-funnel lead generation.",
    challenge:
      "Launching paid ads without structured audience segmentation or ad copy testing frequently wastes ad budget on low-intent clicks. The goal was to build a disciplined campaign blueprint with clear testing hypotheses and guardrails.",
    strategySteps: [
      {
        title: "1. Campaign Objectives & Target Personas",
        description: "Defined primary campaign objective as Lead Generation (capturing email leads via a free high-value guide) with clear demographic boundaries.",
        deliverables: [
          "Audience 1 (Interest-based): Ages 22-38, interested in Entrepreneurship, Freelancing, Digital Marketing tools.",
          "Audience 2 (Search Intent): Users actively searching for 'digital marketing basics guide' and 'seo checklist pdf'.",
        ],
      },
      {
        title: "2. Multi-Channel Budget Allocation Concept",
        description: "Formulated a hypothetical $1,000 monthly test budget distribution designed to balance search intent capture with social visual discovery.",
        deliverables: [
          "Google Search Ads (40% - $400): High-intent capture on commercial keywords.",
          "Meta Ads (Feed & Story) (50% - $500): Eye-catching visual creatives and carousel lead magnets.",
          "Retargeting Reserve (10% - $100): Re-engaging website visitors who did not download the guide.",
        ],
      },
      {
        title: "3. A/B Ad Copy Variations & Creative Formats",
        description: "Developed split-test copy variations testing Pain-Point framing vs Aspiration/Benefit framing.",
        deliverables: [
          "Variant A (Pain-Point): 'Struggling to get eyes on your website? Download our free 10-step SEO starter blueprint.'",
          "Variant B (Benefit-Driven): 'Unlock organic traffic without paid ads. Get the exact step-by-step SEO checklist used by top marketers.'",
        ],
      },
      {
        title: "4. KPI Measurement Roadmap & Success Guardrails",
        description: "Established core metric benchmarks to evaluate campaign health and determine scaling criteria.",
        deliverables: [
          "Click-Through Rate (CTR) Benchmark: Target > 2.5% on Search, > 1.2% on Meta Feed.",
          "Cost Per Click (CPC) Cap: Max $0.80 on Meta, $1.50 on Search.",
          "Lead Conversion Rate: Target > 12% on dedicated landing page.",
        ],
      },
    ],
    keyInsights: [
      "Pairing Google Search (capturing active demand) with Meta Ads (generating new interest) creates a synergistic paid funnel.",
      "Rigorous A/B testing of ad headlines often yields a 20-40% improvement in Click-Through Rates with zero increase in ad spend.",
      "Clear tracking event hygiene (Form Submissions, Button Clicks) is essential before spending the first dollar on any ad campaign.",
    ],
    deliverablePreview: {
      type: "adCopy",
      title: "Sample A/B Ad Creative Variations & Target Copy",
      data: [
        {
          variant: "Variant A (Direct Benefit)",
          platform: "Meta Feed (1080x1080)",
          headline: "Stop Guessing Your SEO. Get The Proven Roadmap.",
          body: "Overwhelmed by conflicting digital marketing advice? Our free 2025 Beginner SEO Checklist shows you the exact steps to rank on Google without expensive software. Download free now.",
          cta: "Download Now",
        },
        {
          variant: "Variant B (Curiosity / Question)",
          platform: "Meta Story (1080x1920)",
          headline: "Are These 3 SEO Mistakes Costing You Traffic?",
          body: "Most new websites overlook these 3 simple on-page tweaks. Discover how to fix your title tags, headings, and internal links in under 30 minutes. 100% Free PDF guide.",
          cta: "Learn More",
        },
      ],
    },
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "seo-support",
    title: "SEO Support",
    tagline: "Keyword research, on-page optimization, and content recommendations.",
    description:
      "Helping websites improve their search engine visibility by identifying relevant search queries, auditing meta tags, optimizing heading structures, and providing actionable on-page recommendations.",
    deliverables: [
      "In-depth keyword research & search intent analysis",
      "Title tag and meta description writing",
      "Heading hierarchy (H1-H3) optimization",
      "Image alt text and basic internal linking suggestions",
    ],
    icon: "Search",
    suitableFor: "Small businesses, personal blogs, and emerging websites wanting foundational organic search visibility.",
  },
  {
    id: "social-media-planning",
    title: "Social Media Content Planning",
    tagline: "Structured content calendars, post ideas, and engagement strategies.",
    description:
      "Developing organized weekly and monthly content calendars tailored to your target audience. Structuring posts across distinct content pillars with engaging hooks and clear calls to action.",
    deliverables: [
      "Weekly and monthly posting calendar templates",
      "4-pillar content strategy (Educate, Inspire, Engage, Convert)",
      "Engaging caption writing with targeted hashtags",
      "Story and community interaction ideas",
    ],
    icon: "Calendar",
    suitableFor: "Creators and brands looking to post consistently without the stress of daily guesswork.",
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    tagline: "Blog planning, content research, and SEO-friendly content structures.",
    description:
      "Conducting audience research to discover what questions your customers are asking online, then structuring well-researched, reader-friendly blog outlines designed to educate and rank.",
    deliverables: [
      "Blog topic ideation & competitive gap analysis",
      "SEO-friendly article outlines with headings",
      "Scannable, reader-first copywriting",
      "Content repurposing frameworks for social media",
    ],
    icon: "FileText",
    suitableFor: "Businesses seeking informative articles that establish credibility and answer buyer questions.",
  },
  {
    id: "canva-creative-design",
    title: "Canva Creative Design",
    tagline: "Social media graphics, carousel slides, and promotional visuals.",
    description:
      "Designing clean, visually harmonious graphics in Canva that maintain your brand colors, typography, and visual tone across social platforms and websites.",
    deliverables: [
      "Multi-slide educational Instagram carousels",
      "Blog header images and article thumbnails",
      "Quote cards, announcement graphics, and story banners",
      "Editable Canva templates for ongoing brand use",
    ],
    icon: "Palette",
    suitableFor: "Anyone needing polished, professional visual assets without the complexity of heavy software.",
  },
  {
    id: "digital-advertising-support",
    title: "Digital Advertising Support",
    tagline: "Campaign concepts, audience research, and ad copy planning.",
    description:
      "Assisting with early-stage paid advertising planning across Google and Meta. Mapping target buyer personas, drafting benefit-driven ad copy variations, and outlining KPI goals.",
    deliverables: [
      "Audience persona definition and targeting recommendations",
      "A/B ad copy headlines and description variants",
      "Campaign objective selection and funnel mapping",
      "Measurement roadmap and key metric benchmarks (CTR, CPC)",
    ],
    icon: "Megaphone",
    suitableFor: "Startups and small teams planning their first paid advertising test with structured guardrails.",
  },
  {
    id: "marketing-research-reporting",
    title: "Marketing Research & Reporting",
    tagline: "Competitor research, basic analytics, and performance summaries.",
    description:
      "Gathering market insights, monitoring search trends, and compiling clear, straightforward marketing summaries so you can make informed decisions based on real data.",
    deliverables: [
      "Competitor digital presence and content analysis",
      "Google Trends and search seasonality reviews",
      "Monthly performance reporting summaries (Traffic & Social)",
      "Actionable recommendations for next steps",
    ],
    icon: "PieChart",
    suitableFor: "Teams that need clear visibility into what content and channels are driving engagement.",
  },
];

export const TOOLS_DATA: ToolItem[] = [
  {
    name: "Canva",
    category: "Design & Content Creation",
    status: "Practiced in Projects",
    iconName: "Palette",
    description: "Designing multi-slide carousels, blog headers, promotional banners, and branded social media assets.",
    badgeColor: "emerald",
  },
  {
    name: "Google Analytics 4",
    category: "Web & Marketing Analytics",
    status: "Currently Learning",
    iconName: "BarChart3",
    description: "Learning event tracking, traffic acquisition sources, engagement metrics, and basic conversion funnels.",
    badgeColor: "indigo",
  },
  {
    name: "Google Search Console",
    category: "SEO & Performance Monitoring",
    status: "Currently Learning",
    iconName: "Search",
    description: "Studying organic search impressions, query click-through rates, indexing coverage, and sitemaps.",
    badgeColor: "indigo",
  },
  {
    name: "Google Trends",
    category: "Market & Topic Research",
    status: "Practiced in Projects",
    iconName: "TrendingUp",
    description: "Identifying rising search queries, comparing regional interest, and validating seasonal content timing.",
    badgeColor: "emerald",
  },
  {
    name: "Google Keyword Planner",
    category: "Keyword & Search Research",
    status: "Practiced in Projects",
    iconName: "Key",
    description: "Discovering keyword search volumes, competition levels, and related query suggestions for content planning.",
    badgeColor: "emerald",
  },
  {
    name: "Google Ads",
    category: "Paid Search Advertising",
    status: "Currently Learning",
    iconName: "Target",
    description: "Learning search campaign structures, keyword match types, ad copy formulas, and Quality Score factors.",
    badgeColor: "indigo",
  },
  {
    name: "Meta Ads Manager",
    category: "Paid Social Advertising",
    status: "Currently Learning",
    iconName: "Layers",
    description: "Studying audience targeting options, campaign objectives, ad set budgets, and visual creative formats.",
    badgeColor: "indigo",
  },
  {
    name: "WordPress",
    category: "Content Management (CMS)",
    status: "Practiced in Projects",
    iconName: "Globe",
    description: "Publishing blog articles, managing categories and tags, configuring SEO plugins, and formatting media.",
    badgeColor: "emerald",
  },
  {
    name: "ChatGPT",
    category: "AI-Assisted Marketing",
    status: "Practiced in Projects",
    iconName: "Cpu",
    description: "Formulating structured prompts for topic ideation, audience persona outlines, and initial draft research.",
    badgeColor: "emerald",
  },
];

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    stage: "Milestone 1",
    title: "Digital Marketing Fundamentals & Principles",
    description:
      "Began with an intensive, self-driven study of digital marketing foundations: understanding marketing funnels, customer lifecycles, brand positioning, and the digital advertising ecosystem.",
    skillsAcquired: [
      "Inbound vs Outbound Marketing",
      "Marketing Funnel Stages (AIDA)",
      "Digital Consumer Psychology",
      "Channel Attribution Concepts",
    ],
    status: "Completed Milestone",
  },
  {
    stage: "Milestone 2",
    title: "SEO Practice & Keyword Research Mastery",
    description:
      "Deepened practical capability in Search Engine Optimization. Executed hands-on keyword research using Google Keyword Planner and Google Trends, learned search intent classification, and practiced on-page metadata optimization.",
    skillsAcquired: [
      "Search Intent Classification",
      "On-Page Heading Architecture",
      "Meta Title & Description Crafting",
      "Internal Linking Strategies",
    ],
    status: "Completed Milestone",
  },
  {
    stage: "Milestone 3",
    title: "Blog Content Development & Editorial Structure",
    description:
      "Developed a complete portfolio case study centered around a photo and video editing blog. Researched audience pain points, mapped out topic clusters, drafted optimized article frameworks, and designed accompanying graphics in Canva.",
    skillsAcquired: [
      "Content Topic Clustering",
      "SEO-friendly Article Outlines",
      "Canva Graphic Design",
      "Image Alt Text Optimization",
    ],
    status: "Completed Milestone",
  },
  {
    stage: "Milestone 4",
    title: "Social Media Strategy & Paid Ad Concepts",
    description:
      "Expanded skill set into multi-channel social media marketing and paid advertising fundamentals. Built audience personas, structured 7-day multi-pillar posting schedules, and drafted A/B ad copy variations for Google and Meta Ads.",
    skillsAcquired: [
      "4-Pillar Content Frameworks",
      "Engaging Caption Writing & CTAs",
      "A/B Ad Copy Formulation",
      "KPI Metric Planning (CTR, CPC, CPA)",
    ],
    status: "Completed Milestone",
  },
  {
    stage: "Milestone 5",
    title: "Interactive Portfolio & Industry Entry",
    description:
      "Built this comprehensive digital marketing portfolio to showcase practical capabilities, strategic thinking, and passion for continuous learning. Actively seeking entry-level opportunities as a Digital Marketing Executive, SEO Executive, or Social Media Executive.",
    skillsAcquired: [
      "Personal Brand Storytelling",
      "Live Portfolio Showcase",
      "Readiness for Junior Roles & Internships",
    ],
    status: "Active Pursuit",
  },
];
