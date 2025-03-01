function rgbToHex(rgbColor) {
    const regex = /\d+/g;
    const results = Array.from(rgbColor.matchAll(regex));
    const r = Number.parseInt(results[0][0], 10);
    const g = Number.parseInt(results[1][0], 10);
    const b = Number.parseInt(results[2][0], 10);
    const uint8Array = new Uint8Array([r,g,b]);
    return "#" + uint8Array.toHex();
}

export { rgbToHex };