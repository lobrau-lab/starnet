const fs = require('fs');
let code = fs.readFileSync('frontend/app/harness.js', 'utf8');

code = code.replace(
  "return !isOAuthProvider(provider) && provider !== 'ollama' && provider !== 'claude-cli';",
  "return !isOAuthProvider(provider) && provider !== 'ollama' && provider !== 'mlx' && provider !== 'claude-cli';"
);

fs.writeFileSync('frontend/app/harness.js', code);
