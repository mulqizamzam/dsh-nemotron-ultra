---
name: nemotron-ultra
description: Research-grounded reference for NVIDIA Nemotron 3 Ultra architecture, training, inference, evaluation, and reproducibility.
---

# Nemotron 3 Ultra — research and engineering reference

Use this skill to answer technical questions about NVIDIA Nemotron 3 Ultra with clear separation between reported facts, documented open recipes, and engineering inference. Prefer the bundled reference documents and cite the relevant section or upstream source when possible.

## Workflow

1. **Scope the question.** Identify whether it concerns architecture, pretraining, post-training, inference, evaluation, safety, or reproducibility.
2. **Retrieve evidence.** Consult `model-card.md`, `context/quick-reference.md`, `paper/`, and `recipes/overview.md` as relevant.
3. **Separate evidence classes.** Distinguish explicit upstream documentation, paper-reported results, local synthesis, and unknowns.
4. **Answer with constraints.** State hardware, precision, context length, benchmark setup, and data assumptions when relevant.
5. **Cite and caveat.** Link the upstream source or section; do not imply that a research description is a runnable recipe.

## Core topics

- Hybrid Mamba-2 and attention architecture with LatentMoE.
- NVFP4 pretraining and precision-aware deployment.
- Supervised fine-tuning (SFT), reinforcement learning with verifiable rewards (RLVR), multi-teacher on-policy distillation (MOPD), and multi-token prediction (MTP).
- Long-context evaluation, quantization, inference throughput, safety, and reproducibility boundaries.

## Important limitations

This is a research-reference skill, not a training runtime. It does not include model weights, datasets, credentials, or GPU jobs. Never invent undisclosed hyperparameters, claim a benchmark is reproducible from a summary alone, or treat throughput numbers as comparable without matching hardware, precision, workload, and serving stack.

## Upstream

- NVIDIA Nemotron repository: https://github.com/NVIDIA-NeMo/Nemotron
- Source skill: https://github.com/NVIDIA-NeMo/Nemotron/tree/main/skills/nemotron-ultra
