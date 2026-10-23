# dsh-nemotron-ultra

A DeepSeek Harness (DSH) reference-skill port for NVIDIA Nemotron 3 Ultra. It helps answer engineering and research questions about architecture, NVFP4, SFT, RLVR, MOPD, MTP, inference, evaluation, safety, and reproducibility.

## Install

For DSH **0.2.1-rc.2**, from a terminal where DSH is available:

```sh
dsh plugin --profile web add https://github.com/mulqizamzam/dsh-nemotron-ultra.git
```

Restart the DSH web profile if the skill is not discovered immediately. Check the DSH plugin manager for the installed package.

## Example prompts

- Explain the hybrid Mamba-Attention and LatentMoE architecture.
- Summarize the NVFP4 deployment tradeoffs and required measurement details.
- Compare SFT, RLVR, MOPD, and MTP boosting.
- Identify which Nemotron Ultra results are reproducible from public recipes.
- Build a checklist for evaluating long-context claims.

## Scope and limitations

This is a reference skill, not model weights or a training runtime. It does not launch GPU jobs, provide datasets, or guarantee reproduction of paper results. Always distinguish upstream-reported claims from engineering inference.

## Upstream

- NVIDIA Nemotron: https://github.com/NVIDIA-NeMo/Nemotron
- Original skill: https://github.com/NVIDIA-NeMo/Nemotron/tree/main/skills/nemotron-ultra
