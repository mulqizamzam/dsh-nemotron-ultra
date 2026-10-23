# DSH Nemotron Ultra

**A research-grounded Nemotron 3 Ultra reference skill for DeepSeek Harness (DSH).**

This project adapts NVIDIA's Nemotron Ultra reference workflow to the DSH-native skill-provider and profile-bundle architecture. It is a documentation and research-reference plugin: it does **not** download model weights, train models, or reproduce a full training pipeline.

## Current repository status

This repository currently contains the project README. The validated source package and full research references are being prepared for upload; do not install this repository as a working plugin until `package.json`, `cordis.patch.yml`, `src/index.js`, and `assets/` are present.

## What the plugin is designed to cover

- Model identity, release variants, and architecture: Mamba-Attention MoE, LatentMoE, and Multi-Token Prediction (MTP).
- Pretraining and post-training stages: NVFP4, SFT, RLVR, MOPD, and MTP boosting.
- Quantization, inference/serving, performance claims, evaluation, and safety caveats.
- Source-first technical answers with citations to the exact reference file.
- Clear distinctions between reported research claims and released, reproducible recipe surfaces.

## For beginners

A **skill** is a set of instructions and reference documents that tells DSH how to handle a particular kind of request. A **bundle** is a profile layer that enables the skill provider. This plugin is meant to help answer questions about Nemotron Ultra; it is not a model server.

### Install in DSH

After the complete source tree is committed to this public repository, use a compatible DSH **0.2.1-rc.2** installation:

```bash
dsh plugin --profile web add https://github.com/mulqizamzam/dsh-nemotron-ultra.git
```

Replace `web` with your target profile name if you use a different profile.

Then start DSH with the same profile and ask a specific question, for example:

```text
/nemotron-ultra Explain Nemotron Ultra's LatentMoE architecture and cite the source files.
```

Other useful prompts:

- `/nemotron-ultra Compare MOPD with RLHF and distinguish what the report actually claims.`
- `/nemotron-ultra Explain the difference between NVFP4 pretraining and post-training quantization.`
- `/nemotron-ultra Which Ultra recipe surfaces are publicly available, and what cannot be reproduced exactly?`

Remove it from the profile with:

```bash
dsh plugin --profile web remove dsh-nemotron-ultra
```

### What installation does and does not do

Installation adds the skill/provider to the selected DSH profile. It does **not** fetch NVIDIA model weights or training datasets, allocate GPUs, deploy inference servers, or create missing MOPD checkpoints. Confirm the package contents and trust the source before installing any plugin that executes in your local environment.

## Documentation and scope

The source reference set is based on [NVIDIA-NeMo/Nemotron](https://github.com/NVIDIA-NeMo/Nemotron/tree/main/skills/nemotron-ultra). The DSH integration targets **0.2.1-rc.2** and should be smoke-tested on that exact runtime before being treated as live-host validated.

## Professional repository description

> Research-grounded Nemotron 3 Ultra reference skill for DeepSeek Harness: architecture, NVFP4 training, SFT, RLVR/MOPD, MTP, quantization, inference, evaluation, and reproducibility limits.
