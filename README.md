## Quick Start

### Environment

```shell
export MINIMAX_API_KEY="your_key"
export MINIMAX_BASE_URL="https://api.minimaxi.com/anthropic"
export CLAUDE_CODE_USE_MINIMAX="1"
export MINIMAX_MODEL="MiniMax-M2.7-highspeed"
```



### Install & Build

```bash
git clone https://github.com/beita6969/claude-code.git
cd claude-code

# Install dependencies
bun install

# Build
bun build src/entrypoints/cli.tsx --outdir=dist --target=bun --sourcemap
```

### Run

```bash
# Headless print mode
bun dist/cli.js -p "your prompt here" --output-format text --bare

# CLI
bun dist/cli.js

```

