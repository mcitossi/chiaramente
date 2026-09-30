export function cleanBookName(name) {
 return String(name ?? '')
  .replace(/\([^()]*\b(?:z-library|z-lib|1lib)\b[^()]*\)/gi, '')
  .replace(/\b(?:z-library|z-lib|1lib)(?:\.[a-z]+)+\b/gi, '')
  .replace(/\s+/g, ' ')
  .replace(/\s+\.(pdf)$/i, '.$1')
  .trim() || 'Manuale.pdf';
}
