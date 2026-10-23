/**
 * DeepSeek Harness bundle provider for the Nemotron 3 Ultra reference skill.
 * This package contributes reusable instructions and local reference material;
 * it does not run training jobs, download model weights, or call a model API.
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const PROVIDER_NAME = 'dsh-nemotron-ultra';
const SKILL_NAME = 'nemotron-ultra';
const SKILL_BODY_URL = new URL('../assets/nemotron-ultra/SKILL.md', import.meta.url);
const RESOURCE_BASE = Object.freeze({
  kind: 'directory',
  path: fileURLToPath(new URL('../assets/nemotron-ultra/', import.meta.url)),
});
const INVOCATION = Object.freeze({ modelInvocable: true, userInvocable: true });
const DESCRIPTION = 'Research-grounded reference for NVIDIA Nemotron 3 Ultra: model identity, hybrid Mamba-Attention and LatentMoE architecture, NVFP4 pretraining, SFT, RLVR, MOPD, MTP boosting, reasoning control, quantization, inference, benchmarks, safety, and public-recipe limits. Use for technical questions, evidence-backed comparisons, deployment framing, or checking what is and is not reproducible.';

const CANDIDATE = Object.freeze({
  name: SKILL_NAME,
  description: DESCRIPTION,
  invocation: INVOCATION,
  provider: PROVIDER_NAME,
  source: 'bundled',
  resourceBase: RESOURCE_BASE,
  rank: 600,
  locator: SKILL_BODY_URL,
});

const provider = Object.freeze({
  name: PROVIDER_NAME,
  list: async () => [CANDIDATE],
  async get(candidate) {
    if (!candidate || candidate.name !== SKILL_NAME || candidate.provider !== PROVIDER_NAME) {
      return undefined;
    }
    return {
      name: SKILL_NAME,
      description: DESCRIPTION,
      invocation: INVOCATION,
      provider: PROVIDER_NAME,
      source: 'bundled',
      resourceBase: RESOURCE_BASE,
      content: await readFile(SKILL_BODY_URL, 'utf8'),
    };
  },
});

/** Cordis plugin identifier. */
export const name = SKILL_NAME;
/** The DSH skills service is supplied by the host profile. */
export const inject = ['skills'];

/** Register one bundled skill candidate with the DSH skill registry. */
export function apply(ctx) {
  if (!ctx?.skills || typeof ctx.skills.registerProvider !== 'function') {
    throw new TypeError('dsh-nemotron-ultra requires the DSH skills service (ctx.skills.registerProvider).');
  }
  ctx.skills.registerProvider(() => provider);
}
