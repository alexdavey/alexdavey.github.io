import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders Alex Davey's academic site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Alex Davey — Reinforcement Learning Researcher<\/title>/i);
  assert.match(html, /Reinforcement learning for/);
  assert.match(html, /Inria/);
  assert.match(html, /Université Paris-Saclay/);
  assert.match(html, /Selected work/);
  assert.match(
    html,
    /Tackling brain signal inter-subject variability with adaptive neural architectures/,
  );
  assert.match(html, /Is Deep RL Reproducible\? State of the art and new tools/);
  assert.match(html, /EWRL 2026/);
  assert.match(html, /Reinforcement Learning Conference 2026/);
  assert.doesNotMatch(html, /EWRL 2025/);
  assert.doesNotMatch(html, /arXiv preprint/);
  assert.doesNotMatch(html, /Inria research report/);
  assert.match(
    html,
    /https:\/\/scholar\.google\.com\/citations\?user=SkKv_68AAAAJ&amp;hl=en&amp;oi=ao/,
  );
  assert.match(html, /Gravity/);
  assert.match(html, /<strong>Alex Davey<\/strong>/);
  assert.equal(html.match(/class="publication-title-link"/g)?.length, 9);
  for (const destination of [
    "https://arxiv.org/abs/2506.13862",
    "https://arxiv.org/abs/2506.13741",
    "https://linklings.s3.amazonaws.com/organizations/WCCI/wcci2026/submissions/stype114/GycdL-ijcnn_pap3256s2.pdf",
    "https://inria.hal.science/hal-05645819/file/RR-9617.pdf",
    "https://arxiv.org/abs/2404.03724",
    "https://arxiv.org/abs/2305.11216",
    "https://arxiv.org/abs/2203.13830",
    "https://arxiv.org/abs/2103.12752",
    "https://arxiv.org/abs/2103.04435",
  ]) {
    assert.ok(html.includes(destination), `missing publication link: ${destination}`);
  }
  assert.equal(
    html.match(/>Email: \{firstname\}\.\{lastname\}@inria\.fr</g)?.length,
    2,
  );
  assert.match(html, /<p class="eyebrow">Contact<\/p>/);
  assert.match(html, /<ul class="research-list">/);
  assert.doesNotMatch(
    html,
    /Get in touch|Complete record|Last updated|Paper ↗|Code ↗|Gravitation|alex\.davey@inria\.fr|orcid\.org|>HAL<|>ORCID</i,
  );
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});
