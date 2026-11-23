#!/usr/bin/env python3
"""Składa projekt z powrotem w jeden plik: dist/index.html.
Wkleja wszystkie <link rel="stylesheet" href="css/..."> i <script src="js/..."> inline,
w tej samej kolejności co w index.html. Użycie:  python3 tools/build.py
"""
import re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
html = (root / 'index.html').read_text(encoding='utf8')

def css(m):
    return '<style>\n' + (root / m.group(1)).read_text(encoding='utf8') + '</style>'
def js(m):
    return '<script>\n' + (root / m.group(1)).read_text(encoding='utf8') + '</script>'

html = re.sub(r'<link rel="stylesheet" href="((?:css)/[^"]+)">', css, html)
html = re.sub(r'<script src="((?:js)/[^"]+)"></script>', js, html)
out = root / 'dist' / 'index.html'
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding='utf8')
print(f'Zapisano {out.relative_to(root)} ({out.stat().st_size/1024:.1f} KB)')
