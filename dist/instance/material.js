import { GradientTexture2D } from "./types/gen";
export function create_gradient_canvas(gradientData) {
    const canvas = document.createElement("canvas");
    const width = canvas.width = gradientData.width;
    const height = canvas.height = gradientData.height;
    const ctx = canvas.getContext("2d");
    // Convert normalized fill_from and fill_to to actual pixel values
    const [fx, fy] = [gradientData.fill_from.x * width, gradientData.fill_from.y * height];
    const [tx, ty] = [gradientData.fill_to.x * width, gradientData.fill_to.y * height];
    let gradient;
    if (gradientData.fill === GradientTexture2D.Fill.FILL_LINEAR) {
        gradient = ctx.createLinearGradient(fx, fy, tx, ty);
    }
    else if (gradientData.fill === GradientTexture2D.Fill.FILL_RADIAL) {
        const radius = Math.hypot(tx - fx, ty - fy); // Approximate size
        gradient = ctx.createRadialGradient(fx, fy, 0, fx, fy, radius);
    }
    else if (gradientData.fill === GradientTexture2D.Fill.FILL_SQUARE) {
        gradient = ctx.createRadialGradient(fx, fy, 0, fx, fy, Math.min(width, height) / 2);
    }
    else {
        throw new Error("Invalid fill type");
    }
    // Apply color stops
    const g_props = gradientData.gradient.properties;
    g_props.colors.forEach((color, index) => {
        const offset = g_props.offsets[index] ?? (index / (g_props.colors.length - 1));
        const rgba = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${color.a.toFixed(2)})`;
        gradient.addColorStop(offset, rgba);
    });
    ctx.clearRect(0, 0, width, height); // Clears canvas to fully transparent
    ctx.globalCompositeOperation = "source-over"; // Ensures proper alpha blending
    // Apply gradient to canvas
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    return canvas;
}
