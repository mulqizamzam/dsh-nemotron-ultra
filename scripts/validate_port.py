#!/usr/bin/env python3
"""Lightweight repository contract checks for dsh-nemotron-ultra."""
from pathlib import Path
import json
import sys

ROOT = Path(__file__).resolve().parents[1]
REQUIRED = [
    "README.md", "README.en.md", "package.json", "cordis.patch.yml",
    "src/index.js", "assets/icon.svg", "assets/nemotron-ultra/SKILL.md",
    "assets/nemotron-ultra/INDEX.md", "assets/nemotron-ultra/model-card.md",
    "assets/nemotron-ultra/context/quick-reference.md",
    "assets/nemotron-ultra/recipes/overview.md",
    "assets/nemotron-ultra/paper/architecture.md",
    "assets/nemotron-ultra/paper/training.md",
    "assets/nemotron-ultra/paper/evaluation.md",
    "assets/nemotron-ultra/paper/inference.md",
    "assets/nemotron-ultra/paper/safety.md",
    "tests/provider.test.mjs",
]
missing = [p for p in REQUIRED if not (ROOT / p).is_file()]
if missing:
    print("MISSING:", ", ".join(missing))
    sys.exit(1)
pkg = json.loads((ROOT / "package.json").read_text(encoding="utf-8"))
assert pkg["name"] == "dsh-nemotron-ultra", "unexpected package name"
assert pkg["version"] == "0.2.1-rc.2", "unexpected target version"
assert pkg["dsh"]["bundle"]["patch"] == "./cordis.patch.yml", "bundle patch path mismatch"
print(f"VALIDATION PASSED ({len(REQUIRED) + 3} checks)")
