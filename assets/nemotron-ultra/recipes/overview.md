# Recipe overview and reproducibility

The high-level Nemotron 3 Ultra lifecycle is commonly described as pretraining → SFT → RLVR → MOPD → MTP boosting. The available open recipe, dataset subset, model checkpoint, and published paper may not cover identical stages or data.

## Practical review workflow

1. Identify the exact checkpoint and recipe revision.
2. Inventory the public dataset subset and filtering/preprocessing steps.
3. Capture model architecture, precision, optimizer, scheduler, sequence length, and parallelism configuration where documented.
4. Record accelerator model, topology, framework versions, and training duration.
5. Verify the evaluation protocol and compare against a baseline under matching conditions.
6. Mark undocumented values as unknown; do not infer them from headline benchmark numbers.

## Boundaries

This reference plugin does not execute training jobs or ship weights/data. Use NVIDIA's upstream repository for runnable recipe configurations and environment-specific setup.
