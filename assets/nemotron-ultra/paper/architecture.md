# Architecture synthesis

Nemotron 3 Ultra is described as a hybrid Mamba-2 and attention model with a Mixture-of-Experts design and LatentMoE. The hybrid layout combines sequence-processing mechanisms rather than relying exclusively on dense attention at every layer.

## Reading guidance

- Distinguish total parameter count from active parameters per token.
- Verify the exact layer layout and dimensions against the current technical report.
- Treat architecture summaries as explanatory aids, not a substitute for the model configuration.
- For context-length claims, note the evaluation task and whether the number is supported context, tested context, or effective retrieval quality.

Primary source: https://github.com/NVIDIA-NeMo/Nemotron
