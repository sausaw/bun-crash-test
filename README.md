# Bun bundler crash example

## Development server

```bash
bun run src/index.ts
```

Open http://localhost:3000/ with your browser to see the result.

## Bundle
To start the development server run:
```bash
bun run src/bundle.ts
```

This fails with the following error
```bash
uh-oh: Internal error: missing asset file
bun will crash now 😭😭😭

----- bun meta -----
Bun v1.0.0 (822a00c4) macOS Silicon 22.6.0
RunCommand:
Elapsed: 35ms | User: 35ms | Sys: 33ms
RSS: 53.92MB | Peak: 53.92MB | Commit: 88.21MB | Faults: 111
----- bun meta -----

0   0x102cfa624 WTFGetBacktrace
1   ??? Bun__crashReportDumpStackTrace
2   ??? src.report.fatal

Crash report saved to:
  ~/.bun/.bun-crash/v1.0.0-1694332848724.crash

Search GitHub issues https://bun.sh/issues or ask for #help in https://bun.sh/discord

thread 354157 panic: Internal error: missing asset file
[1]    25477 abort      bun run src/bundle.ts
```
