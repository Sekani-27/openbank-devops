# Contributing to OpenBank DevOps

## Branch Strategy

### Main Branches
- `main` - Production-ready code (protected)
- `develop` - Integration branch for features

### Feature Branches
When working on a new feature:
1. Branch from `develop`
2. Name format: `feature/short-description`

Examples:
- `feature/user-signup`
- `feature/deposit-functionality`
- `feature/transaction-history`

### Branch Naming Rules
- Features: `feature/description`
- Fixes: `fix/description`
- Docs: `docs/description`
- Tests: `test/description`

## Commit Message Format

Use clear, descriptive commit messages:
```
type: short description

Examples:
- feat: add user signup endpoint
- fix: correct balance calculation
- docs: update README with setup instructions
- test: add unit tests for auth controller
```

### Commit Types
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `test` - Adding tests
- `refactor` - Code improvement
- `style` - Formatting changes

## Pull Request Process

1. **Create PR** from your feature branch to `develop`
2. **Title**: Clear description of changes
3. **Description**: 
   - What changed?
   - Why?
   - Link to user story/issue
4. **Request review** from at least 1 team member
5. **Wait for approval** before merging
6. **Delete branch** after merge

## Code Review Checklist
- [ ] Code follows project structure
- [ ] No console.logs or debug code left in
- [ ] Functions have clear names
- [ ] Comments explain "why", not "what"
- [ ] Tests pass (when we have them)
- [ ] No merge conflicts

## Getting Started

1. Clone the repo:
```bash
git clone https://github.com/YOUR-USERNAME/openbank-devops.git
cd openbank-devops
```

2. Create your feature branch:
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

3. Make changes and commit:
```bash
git add .
git commit -m "feat: your descriptive message"
git push origin feature/your-feature-name
```

4. Create Pull Request on GitHub

## Questions?
Ask in the team chat or contact Ntando (DevOps Lead)
