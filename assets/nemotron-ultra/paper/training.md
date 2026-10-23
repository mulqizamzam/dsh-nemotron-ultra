# Training and post-training synthesis

The documented lifecycle includes NVFP4 pretraining, supervised fine-tuning (SFT), reinforcement learning with verifiable rewards (RLVR), multi-teacher on-policy distillation (MOPD), and MTP boosting.

## Questions to resolve before reproducing

- Which dataset version and subset was used?
- Which stage is covered by the public recipe?
- Are teacher models, reward functions, and RL environments available?
- What are the optimizer, learning-rate schedule, batch/sequence settings, and parallelism strategy?
- Which precision and hardware/software stack were used?

Do not infer undocumented hyperparameters or claim exact reproduction based only on a high-level pipeline description.

Primary source: https://github.com/NVIDIA-NeMo/Nemotron
