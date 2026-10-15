"""Build the .srt subtitles and narration script from an episode's scene captions.
usage: python3 make_captions.py <episode.html> <out.srt> <narration-script.md> <title>"""
import html, re, sys

src, srt_out, md_out, title = sys.argv[1:5]
s = open(src).read()
scenes = re.findall(r'<section class="scene" data-dur="([\d.]+)".*?<div class="caps">(.*?)</div>', s, re.S)
cues, start = [], 0.0
for dur, caps in scenes:
    dur = float(dur)
    items = [(float(a), html.unescape(t)) for a, t in re.findall(r'<i data-at="([\d.]+)">(.*?)</i>', caps)]
    for k, (at, text) in enumerate(items):
        end = items[k + 1][0] if k + 1 < len(items) else dur
        cues.append((start + at, start + end - 0.15, text))
    start += dur

def ts(x):
    ms = int(round(x * 1000))
    return f"{ms // 3600000:02}:{ms // 60000 % 60:02}:{ms // 1000 % 60:02},{ms % 1000:03}"

open(srt_out, "w").write("\n".join(f"{i + 1}\n{ts(a)} --> {ts(b)}\n{t}\n" for i, (a, b, t) in enumerate(cues)))
lines = [f"# {title}", "", "Narration script. Read each line starting at its timestamp; the on-screen "
         "captions match this text, so you can record a voiceover over the finished video.", ""]
lines += [f"**[{int(a // 60)}:{int(a % 60):02}]** {t}  " for a, _, t in cues]
lines += ["", f"Total length: {int(start // 60)}:{int(start % 60):02}"]
open(md_out, "w").write("\n".join(lines) + "\n")
print(f"{len(cues)} cues, {start:g}s")
