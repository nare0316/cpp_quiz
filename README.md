# Picsart Academy 2.5 | C++ Quizzes

## Ամեն նոր դասի համար

1. Պատճենիր `lessons/_template.json`-ը որպես `lessons/lesson-3.json` (հաջորդ համարով)։
2. Փոխիր `id`-ն (պետք է եզակի լինի և հետո չփոխվի, progress-ը պահվում է դրանով), `title`, `subtitle` և լրացրու `questions`։
3. `correct`-ը ճիշտ տարբերակի ինդեքսն է՝ սկսած **0-ից** (A = 0, B = 1, ...)։
4. Deploy։
   - Git + Netlify. `git push`, և `manifest.json`-ը ինքնուրույն կգեներացվի։
   - Drag & drop. նախ աշխատեցրու `node build-manifest.js` (կամ ձեռքով ավելացրու ֆայլի անունը `lessons/manifest.json`-ում), հետո քաշիր ամբողջ թղթապանակը։

## Ձևաչափի կանոններ

- `text`, `explanation`, `title`, `subtitle` → `{ "en": "...", "hy": "..." }` կամ պարզ string, եթե երկու լեզվով նույնն է։
- `options` → `{ "en": [...], "hy": [...] }` կամ պարզ զանգված, եթե երկու լեզվով նույնն է։
- Inline կոդ՝ `` `x` ``, կոդի բլոկ՝ ` ```cpp ... ``` ` (տողադարձը `\n`)։
- JSON-ում վերջին տարրից հետո ստորակետ չի թույլատրվում։

## Լոկալ թեստավորում

`fetch`-ը չի աշխատում `file://`-ով, օգտագործիր `npx serve` կամ VS Code Live Server։
