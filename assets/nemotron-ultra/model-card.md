# Nemotron 3 Ultra — reference model card

**Purpose:** compact research reference; not an official NVIDIA model card.

## Identity and architecture

Nemotron 3 Ultra is described by NVIDIA as a 550B-total-parameter, 55B-active-parameter mixture-of-experts model using a hybrid Mamba-2 and attention architecture with LatentMoE and multi-token prediction (MTP). Reported context length reaches 1,048,576 tokens. Verify the active upstream model card and technical report before using these details in a deployment decision.

## Training and post-training

The documented pipeline includes NVFP4 pretraining, supervised fine-tuning (SFT), reinforcement learning with verifiable rewards (RLVR), multi-teacher on-policy distillation (MOPD), and MTP boosting. Do not assume all stages are included in every public recipe or checkpoint.

## Deployment and evaluation caveats

Precision, accelerator generation, serving engine, prompt/output lengths, batch regime, and speculative decoding settings materially affect throughput. Compare benchmark figures only when their measurement conditions align. A base checkpoint should not be described as instruction-aligned unless the source explicitly says so.

## Safety and reproducibility

Treat safety claims as scoped to the reported data, tasks, and evaluation protocol. Public recipe subsets may not reproduce paper results if the paper used additional data, proprietary components, or different compute. Record unresolved details instead of filling gaps with guesses.

## Primary sources

- https://github.com/NVIDIA-NeMo/Nemotron
- https://github.com/NVIDIA-NeMo/Nemotron/tree/main/skills/nemotron-ultra
