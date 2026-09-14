/**
 * Generates a high-tech cyberpunk / classified behavioral badge PNG using HTML Canvas.
 */

interface BadgeData {
  experimentTitle: string;
  archetypeTitle: string;
  archetypeColor: string;
  contradictionHeadline: string;
  dateStr: string;
  dimensions: { name: string; score: number }[];
}

export function generateBadgeDataUrl(data: BadgeData): string {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 620;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  ctx.fillStyle = '#090d16';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Outer grid lines
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Double border
  ctx.strokeStyle = data.archetypeColor || '#FF003C';
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1;
  ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56);

  // Top Banner
  ctx.fillStyle = '#FF003C';
  ctx.fillRect(40, 40, canvas.width - 80, 40);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('DECISION ANALYSIS RESULT', canvas.width / 2, 65);

  // Title & Metadata
  ctx.fillStyle = '#94a3b8';
  ctx.font = '14px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(`TEST: ${(data.experimentTitle || '').toUpperCase()}`, 50, 120);
  ctx.fillText(`DATE: ${data.dateStr}`, 50, 142);

  // Divider line
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(50, 165);
  ctx.lineTo(canvas.width - 50, 165);
  ctx.stroke();

  // Archetype Box
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(50, 190, canvas.width - 100, 150);
  ctx.strokeStyle = data.archetypeColor || '#FF003C';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, 190, canvas.width - 100, 150);

  ctx.fillStyle = '#64748b';
  ctx.font = '12px sans-serif';
  ctx.fillText('DECISION PROFILE ARCHETYPE', 70, 220);

  ctx.fillStyle = data.archetypeColor || '#FF003C';
  ctx.font = 'bold 32px sans-serif';
  ctx.fillText((data.archetypeTitle || '').toUpperCase(), 70, 265);

  // Stamp Seal
  ctx.strokeStyle = '#FF003C';
  ctx.lineWidth = 3;
  ctx.save();
  ctx.translate(620, 255);
  ctx.rotate(-0.1);
  ctx.strokeRect(-80, -25, 160, 50);
  ctx.fillStyle = '#FF003C';
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('OFFICIAL RESULT', 0, 5);
  ctx.restore();

  // Key Insight Box
  ctx.fillStyle = '#1e1022';
  ctx.fillRect(50, 360, canvas.width - 100, 150);
  ctx.strokeStyle = '#a855f7';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, 360, canvas.width - 100, 150);

  ctx.fillStyle = '#e9d5ff';
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('KEY DECISION INSIGHT:', 70, 395);

  ctx.fillStyle = '#f43f5e';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText(`"${(data.contradictionHeadline || '').toUpperCase()}"`, 70, 435);

  // Footer
  ctx.fillStyle = '#475569';
  ctx.font = '12px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`OFFICIAL DECISION ANALYSIS BADGE`, canvas.width / 2, 570);

  return canvas.toDataURL('image/png');
}
