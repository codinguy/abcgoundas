# abcgoundas

Public showcase of small HTML, CSS, JavaScript, Express, and EJS practice projects.

Last reviewed: 2026-07-03.

## Projects

| File | What it shows |
| --- | --- |
| `lcm-calculator.html` | Browser-only LCM calculator. |
| `lcm-calculator-apex.html` | Alternate Apex-styled LCM calculator UI. |
| `hcf-calculator.html` | Browser-only HCF calculator. |
| `solar-system-animation.html` | CSS solar-system animation. |
| `timer.html` | Browser timer demo. |
| `lcm-ejs-server.js` | Express/EJS LCM calculator using form POST. |
| `lcm-query-server.js` | Express LCM calculator using query parameters. |
| `lcm-math.js` | Shared, tested LCM validation and math helpers. |

## Requirements

- Node.js `>=22.13.0`
- npm, included with Node.js

## Setup

```bash
npm install
```

On Windows PowerShell, if `npm` is blocked by execution policy, use `npm.cmd` instead:

```powershell
npm.cmd install
npm.cmd run check
```

## Run

| Command | Default URL | Description |
| --- | --- | --- |
| `npm start` | `http://localhost:3040` | Starts the EJS LCM calculator. |
| `npm run start:ejs` | `http://localhost:3040` | Same as `npm start`. |
| `npm run start:query` | `http://localhost:3300` | Starts the query-string LCM calculator. |

Both Express servers support a custom `PORT` value.

PowerShell:

```powershell
$env:PORT = "7000"
npm.cmd start
```

Bash:

```bash
PORT=7000 npm start
```

## Check

```bash
npm run check
```

This runs `npm ls --depth=0` and the Node test suite for the shared LCM math helpers.

## Review Notes

- The Express apps use built-in parsers and `PORT` support.
- LCM logic is shared through `lcm-math.js` instead of copied between servers.
- The browser-only HTML files are intentionally kept as standalone demos.
- Future cleanup can focus on moving inline browser scripts/styles into separate files and improving accessibility labels.
