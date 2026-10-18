import sharp from "sharp";

async function makeCleanPortrait() {
  const { data, info } = await sharp("public/images/test-fashion.jpg")
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const outIdx = (y * width + x) * 4;

      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const dx = (x - width * 0.5) / (width * 0.5);
      const dy = (y - height * 0.45) / (height * 0.5);
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Radial background glow matching website #0B1120
      const glow = Math.max(0, 1 - dist * 1.15);
      const bgR = Math.round(11 + 22 * glow);
      const bgG = Math.round(17 + 32 * glow);
      const bgB = Math.round(32 + 65 * glow);

      // 1. Pure background (white)
      if (r >= 246 && g >= 246 && b >= 246) {
        out[outIdx] = bgR;
        out[outIdx + 1] = bgG;
        out[outIdx + 2] = bgB;
        out[outIdx + 3] = 255;
        continue;
      }

      // 2. Black/Dark contour lines
      if (r < 75 && g < 75 && b < 75) {
        out[outIdx] = 17;
        out[outIdx + 1] = 24;
        out[outIdx + 2] = 39; // Slate-900 / dark indigo line
        out[outIdx + 3] = 255;
        continue;
      }

      // 3. Face (peach skin)
      // Original face is around r: 250, g: 210, b: 180
      if (r > 195 && g >= 150 && b >= 120 && (r - g >= 15) && (g - b >= 10)) {
        // Soft warm skin tone with subtle upper lighting
        const lighting = 1.0 - (y / height) * 0.05;
        out[outIdx] = Math.min(255, Math.round(245 * lighting));
        out[outIdx + 1] = Math.min(255, Math.round(200 * lighting));
        out[outIdx + 2] = Math.min(255, Math.round(180 * lighting));
        out[outIdx + 3] = 255;
        continue;
      }

      // 4. Hijab (light green in original: r: 200-240, g: 235-255, b: 170-205)
      if (g >= 155 && r >= 140 && g > r) {
        // Modern Indigo / Violet tone (#6366F1 / #7C3AED)
        const light = (r + g + b) / (3 * 255); // ~0.7 to 0.85
        const norm = Math.max(0, Math.min(1, (light - 0.65) / 0.25));

        // Base: 99, 102, 241 (Indigo) -> Highlight: 139, 92, 246 (Violet)
        const hR = Math.round(99 + 30 * norm);
        const hG = Math.round(102 + 25 * norm);
        const hB = Math.round(241 + 10 * norm);

        out[outIdx] = hR;
        out[outIdx + 1] = hG;
        out[outIdx + 2] = hB;
        out[outIdx + 3] = 255;
        continue;
      }

      // 5. Shirt / Blazer (dark green in original: r: 25-50, g: 50-95, b: 10-35)
      if (g >= 30 && r < 120 && b < 80 && g > r) {
        // Tailored dark navy blazer (#1E1B4B to #1E293B)
        const sLight = Math.max(0.4, Math.min(1.2, g / 80));
        out[outIdx] = Math.round(30 * sLight);
        out[outIdx + 1] = Math.round(35 * sLight);
        out[outIdx + 2] = Math.round(75 * sLight);
        out[outIdx + 3] = 255;
        continue;
      }

      // 6. Anti-aliased transition pixels
      // If it has higher brightness (>160), it's close to background -> blend with background
      if (r > 160 && g > 160 && b > 160) {
        out[outIdx] = bgR;
        out[outIdx + 1] = bgG;
        out[outIdx + 2] = bgB;
        out[outIdx + 3] = 255;
      } else {
        // Darker transition -> blend with contour
        out[outIdx] = 20;
        out[outIdx + 1] = 25;
        out[outIdx + 2] = 45;
        out[outIdx + 3] = 255;
      }
    }
  }

  // Save clean final image directly to public/images/anisa-portrait.jpg
  await sharp(out, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .resize(800, 800, { fit: "cover" })
    .jpeg({ quality: 98 })
    .toFile("public/images/anisa-portrait.jpg");

  console.log("Clean recolored portrait written to public/images/anisa-portrait.jpg");
}

makeCleanPortrait().catch(console.error);
