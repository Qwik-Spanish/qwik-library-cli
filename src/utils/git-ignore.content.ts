export const GIT_IGNORE = `
# Build
/dist
/lib
/types/**/*.d.ts
/server

# Development
node_modules

# Cache
.cache
.mf
.vscode
.rollup.cache
tsconfig.tsbuildinfo

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Editor
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Yarn
.yarn/*
!.yarn/releases

# Library packages
*.tgz
`
