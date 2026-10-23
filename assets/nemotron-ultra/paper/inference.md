# Inference, precision, and throughput

Inference performance depends on model checkpoint, precision, accelerator, serving framework, context distribution, batch size, output length, and speculative decoding configuration.

## Precision framing

NVFP4-related deployment claims must specify the hardware path and activation precision. Cache precision and implementation details can materially change memory use and quality. Verify current NVIDIA deployment guidance before deploying.

## Throughput comparisons

Do not compare headline speedup multipliers unless the workload, hardware, precision, serving engine, concurrency, and measurement methodology are sufficiently aligned. Separate prefill-heavy from decode-heavy results.

Primary source: https://github.com/NVIDIA-NeMo/Nemotron
