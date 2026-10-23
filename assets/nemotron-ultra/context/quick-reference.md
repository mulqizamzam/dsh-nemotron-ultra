# Quick reference

| Topic | What to check | Caveat |
|---|---|---|
| Architecture | Hybrid Mamba-2 + attention; LatentMoE | Do not equate total parameters with active parameters per token |
| Pretraining | NVFP4 and data curriculum | Hardware/software support and exact recipe config matter |
| SFT | Instruction tuning stage | Public subsets may differ from paper data |
| RLVR | Reinforcement learning with verifiable rewards | Environment design and reward verification affect results |
| MOPD | Multi-teacher on-policy distillation | Teacher availability and sampling protocol are critical |
| MTP | Multi-token prediction and speculative decoding | Report draft length and acceptance behavior |
| Inference | Precision, serving stack, KV/SSM cache | Throughput depends on workload and hardware |
| Evaluation | Benchmarks and long-context tests | Compare only matched protocols and versions |

## Answer checklist

- Is the claim directly sourced or inferred?
- Are precision, hardware, and serving stack specified?
- Are dataset/checkpoint availability and license constraints clear?
- Is the result reproducible from the public material, or merely reported?
