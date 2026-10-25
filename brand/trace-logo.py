import sys, colorsys
import numpy as np
from PIL import Image, ImageFilter
import potrace

src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB").crop((266, 54, 504, 332))
SC = 4
im = im.resize((im.width * SC, im.height * SC), Image.LANCZOS)
a = np.asarray(im).astype(float) / 255
r, g, b = a[..., 0], a[..., 1], a[..., 2]
mx, mn = a.max(-1), a.min(-1)
s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
# hue
h = np.zeros_like(mx)
d = np.maximum(mx - mn, 1e-6)
h = np.where(mx == r, ((g - b) / d) % 6, h)
h = np.where(mx == g, (b - r) / d + 2, h)
h = np.where(mx == b, (r - g) / d + 4, h)
h = h / 6
green = (h > 0.28) & (h < 0.52) & (s > 0.3)
gold = (h > 0.05) & (h < 0.17) & (s > 0.42) & ~green

def clean(m):
    img = Image.fromarray((m * 255).astype("uint8"))
    img = img.filter(ImageFilter.MedianFilter(9)).filter(ImageFilter.MedianFilter(7))
    return np.asarray(img) > 127

def trace(m):
    bm = potrace.Bitmap(~m)
    plist = bm.trace(turdsize=60, alphamax=0.9, opticurve=True, opttolerance=0.4)
    parts = []
    for curve in plist:
        sp = curve.start_point
        seg = [f"M{sp.x/SC:.2f},{sp.y/SC:.2f}"]
        for c in curve.segments:
            if c.is_corner:
                seg.append(f"L{c.c.x/SC:.2f},{c.c.y/SC:.2f}L{c.end_point.x/SC:.2f},{c.end_point.y/SC:.2f}")
            else:
                seg.append(f"C{c.c1.x/SC:.2f},{c.c1.y/SC:.2f} {c.c2.x/SC:.2f},{c.c2.y/SC:.2f} {c.end_point.x/SC:.2f},{c.end_point.y/SC:.2f}")
        parts.append("".join(seg) + "Z")
    return "".join(parts)

W, H = im.width // SC, im.height // SC
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
<path fill="#1d5a3a" fill-rule="evenodd" d="{trace(clean(green))}"/>
<path fill="#d29a45" fill-rule="evenodd" d="{trace(clean(gold))}"/>
</svg>'''
open(out, "w").write(svg)
print(W, H, len(svg))
