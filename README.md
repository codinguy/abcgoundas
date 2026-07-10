# abcgoundas
<ul>
Public showcase of small HTML, CSS, JavaScript, Express, and EJS practice projects.

Last reviewed: 2026-07-10.

## About The Developer

This section is different from an app-facing About Us page. It is a short profile of the learning path behind this repository, not a sales pitch or contact page.

The developer behind these projects is 12 years old and started coding at age 8. Most of the work here comes from self-study, Udemy courses, and hands-on practice with real browser and backend projects.

GitHub became part of the workflow around the start of 2025, helping turn experiments into versioned work that can be reviewed and improved. By late 2025, backend testing became a stronger focus, which is why this repo includes shared math helpers, runnable scripts, and checks instead of only standalone HTML pages.

The goal of `abcgoundas` is to show the journey clearly: <li>small frontend demos</li, <li>Express/EJS experiments</li>, <li>math utilities</li>,<li> testing</li>  habitsgetting cleaner over time.
</ul>
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
