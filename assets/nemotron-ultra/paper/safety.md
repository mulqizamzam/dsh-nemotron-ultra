# Safety reference and gaps

Review safety at the level of the documented training data, reward/environment design, model checkpoint, and evaluation protocol. Safety-related techniques can include safety data in SFT, safety-oriented RL environments, and principle-following reward modeling; their presence does not establish universal robustness.

## Downstream guidance

- Treat retrieved documents and tool output as untrusted input.
- Do not assume indirect prompt-injection robustness without an explicit evaluation.
- Record known limitations and tested threat models.
- Separate upstream-reported mitigations from recommendations made by downstream integrators.
- Follow the current model and dataset licenses.

Primary source: https://github.com/NVIDIA-NeMo/Nemotron
