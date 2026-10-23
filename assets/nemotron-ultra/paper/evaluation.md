# Evaluation interpretation

Benchmark scores are meaningful only with their protocol: dataset/version, split, prompting, number of shots, scoring method, context length, decoding settings, and model checkpoint.

## Long-context and reasoning claims

A model's nominal context limit is not proof of uniform retrieval accuracy across that context. Report task, sequence length, metric, and source. For reasoning-budget comparisons, include both quality and token/latency cost.

## Reproducibility checklist

- Exact checkpoint identifier and precision
- Evaluation harness and version
- Dataset revision and filtering
- Prompt template and decoding settings
- Hardware and serving engine when latency/throughput is reported

Primary source: https://github.com/NVIDIA-NeMo/Nemotron
