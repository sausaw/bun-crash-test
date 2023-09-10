async function bundle() {
  await Bun.build({
    entrypoints: ['./src/index.ts', './src/worker.ts'],
    outdir: "./out",
    target: "bun",
  })
}
try {
  bundle();
} catch (e) {
  console.error({ e })
}
console.log("Bundled")
