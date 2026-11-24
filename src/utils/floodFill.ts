// Ultra-fast Scanline Flood Fill for HTML5 Canvas coloring
export function floodFill(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  fillColorHex: string,
  tolerance: number = 40
): boolean {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  
  const x = Math.round(startX);
  const y = Math.round(startY);
  if (x < 0 || x >= width || y < 0 || y >= height) return false;

  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;

  // Parse fill color
  const fr = parseInt(fillColorHex.slice(1, 3), 16) || 0;
  const fg = parseInt(fillColorHex.slice(3, 5), 16) || 0;
  const fb = parseInt(fillColorHex.slice(5, 7), 16) || 0;
  const fa = 255;

  const startIndex = (y * width + x) * 4;
  const sr = data[startIndex];
  const sg = data[startIndex + 1];
  const sb = data[startIndex + 2];
  const sa = data[startIndex + 3];

  // If clicked on a dark outline, do not fill
  const startBrightness = (sr * 299 + sg * 587 + sb * 114) / 1000;
  if (startBrightness < 65 && sa > 200) {
    return false;
  }

  // If already the same color, return
  if (
    Math.abs(sr - fr) < 5 &&
    Math.abs(sg - fg) < 5 &&
    Math.abs(sb - fb) < 5 &&
    Math.abs(sa - fa) < 5
  ) {
    return false;
  }

  const colorMatch = (idx: number): boolean => {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3];

    // Don't flood into dark outlines
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    if (brightness < 60 && a > 180) return false;

    // Compare with starting pixel color
    return (
      Math.abs(r - sr) <= tolerance &&
      Math.abs(g - sg) <= tolerance &&
      Math.abs(b - sb) <= tolerance &&
      Math.abs(a - sa) <= tolerance
    );
  };

  // Scanline Flood Fill queue
  const pixelStack: [number, number][] = [[x, y]];
  const visited = new Uint8Array(width * height);

  while (pixelStack.length > 0) {
    const [curX, curY] = pixelStack.pop()!;
    let currentY = curY;
    let pixelPos = (currentY * width + curX) * 4;

    // Move up as far as possible
    while (currentY >= 0 && colorMatch(pixelPos)) {
      currentY--;
      pixelPos -= width * 4;
    }

    pixelPos += width * 4;
    currentY++;

    let reachLeft = false;
    let reachRight = false;

    // Fill downwards and check neighbors
    while (currentY < height && colorMatch(pixelPos)) {
      const coordIndex = currentY * width + curX;
      if (visited[coordIndex]) {
        break;
      }
      visited[coordIndex] = 1;

      // Color current pixel
      data[pixelPos] = fr;
      data[pixelPos + 1] = fg;
      data[pixelPos + 2] = fb;
      data[pixelPos + 3] = fa;

      // Check left
      if (curX > 0) {
        const leftPos = pixelPos - 4;
        if (colorMatch(leftPos)) {
          if (!reachLeft) {
            pixelStack.push([curX - 1, currentY]);
            reachLeft = true;
          }
        } else if (reachLeft) {
          reachLeft = false;
        }
      }

      // Check right
      if (curX < width - 1) {
        const rightPos = pixelPos + 4;
        if (colorMatch(rightPos)) {
          if (!reachRight) {
            pixelStack.push([curX + 1, currentY]);
            reachRight = true;
          }
        } else if (reachRight) {
          reachRight = false;
        }
      }

      currentY++;
      pixelPos += width * 4;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  return true;
}
