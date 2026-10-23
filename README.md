# DSH Nemotron Ultra

**Research-grounded Nemotron 3 Ultra reference skill for DeepSeek Harness (DSH).**

This project adapts NVIDIA's Nemotron Ultra reference workflow to DSH's skill-provider and profile-bundle architecture. It is a technical reference plugin; it does not download model weights, train a model, or reproduce the full training pipeline.

> **Publication status:** the repository has a README and package manifest, but the runtime provider, bundle patch, and reference assets are not yet fully uploaded. Do not install this repository as a working plugin until those files are present.

## Capabilities

- Explain the hybrid Mamba-Attention MoE architecture, LatentMoE, and Multi-Token Prediction (MTP).
- Summarize NVFP4 pretraining, SFT, RLVR, Multi-teacher On-Policy Distillation (MOPD), and MTP boosting.
- Discuss quantization, inference/serving, evaluation results, and safety caveats.
- Ground technical answers in source files and distinguish research claims from reproducible public recipes.

## For beginners

A **skill** is a set of instructions and reference documents that helps DSH answer a particular class of questions. A **bundle** activates its provider as part of a DSH profile. This plugin is a reference assistant for Nemotron Ultra—not a model server or training launcher.

### Installation

Once the full plugin source has been uploaded to this public repo, install it in DSH 0.2.1-rc.2 with:

```bash
dsh plugin --profile web add https://github.com/mulqizamzam/dsh-nemotron-ultra.git
```

Replace `web` with your chosen profile.

### Usage

Start DSH with the same profile and ask a focused question:

```text
/nemotron-ultra Explain Nemotron Ultra's LatentMoE architecture and cite the source files.
```

More examples:

- `/nemotron-ultra Compare MOPD with RLHF and separate paper claims from interpretation.`
- `/nemotron-ultra Explain the difference between NVFP4 pretraining and post-training quantization.`
- `/nemotron-ultra Which Ultra recipe surfaces are public, and what cannot be reproduced exactly?`

To remove it after installation:

```bash
dsh plugin --profile web remove dsh-nemotron-ultra
```

### What it does not do

Installing the plugin does not fetch NVIDIA weights or training datasets, allocate GPUs, deploy an inference server, or generate missing MOPD checkpoints. Review the source before installing plugins that execute in your environment.

## Upstream source

The reference workflow is adapted from [NVIDIA-NeMo/Nemotron — nemotron-ultra](https://github.com/NVIDIA-NeMo/Nemotron/tree/main/skills/nemotron-ultra). Technical claims should remain tied to their source documents and stated benchmark conditions.

## Repository description

Research-grounded Nemotron 3 Ultra reference skill for DeepSeek Harness: architecture, NVFP4 training, SFT, RLVR/MOPD, MTP, quantization, inference, evaluation, and reproducibility limits.
