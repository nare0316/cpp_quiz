// Generates lessons/manifest.json from all lessons/lesson-<number>.json files.
// Run manually:  node build-manifest.js
// Netlify runs it automatically on every build (see netlify.toml).
const fs = require('fs');
const files = fs.readdirSync('lessons')
  .filter(f => /^lesson-\d+\.json$/.test(f))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

// Fail the build early if any lesson file has invalid JSON
for (const f of files) {
  try { JSON.parse(fs.readFileSync('lessons/' + f, 'utf8')); }
  catch (e) { console.error(`Invalid JSON in lessons/${f}: ${e.message}`); process.exit(1); }
}

fs.writeFileSync('lessons/manifest.json', JSON.stringify(files, null, 2) + '\n');
console.log('manifest.json:', files.join(', '));
