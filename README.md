# PackVote Coming Soon Page

This is a temporary landing page for PackVote, an AI-powered travel planning app that helps groups decide on their next destination.

## Setup

1. Clone the repository:
```bash
git clone https://github.com/your-org/packvote-coming-soon.git
cd packvote-coming-soon
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env
```

4. Start development server:
```bash
npm run dev
```

## Deployment

The application is deployed to Vercel automatically through GitHub Actions.

## Development Workflow

This repository follows a structured development workflow with separate development and production environments:

### Branch Structure
- `main` - Production branch, protected from direct pushes
- `dev` - Development branch for testing changes before production

### Branch Protection Setup
To enable branch protection in GitHub:

1. Go to the repository on GitHub
2. Navigate to Settings > Branches
3. Under "Branch protection rules", click "Add rule"
4. For the "main" branch:
   - Check "Require a pull request before merging"
   - Check "Require approvals" (at least 1)
   - Check "Require status checks to pass before merging"
   - Select the CI workflow status checks
   - Check "Include administrators" to apply rules to everyone
   - Click "Create"

### Environment Configuration
- Development environment uses development Supabase project
- Production environment uses production Supabase project
- Environment variables are stored as GitHub Secrets and used by the deployment workflows

### CI/CD Pipeline
- Build verification runs automatically on both `dev` and `main` branches
- Development deployments occur automatically when changes are pushed to `dev`
- Production deployments require passing builds and occur after merging to `main`

### Development Process
1. Create feature branches from `dev`
2. Implement and test your changes locally
3. Submit a pull request to merge into `dev`
4. After testing in the development environment, create a pull request from `dev` to `main`
5. Once approved and merged, changes will be deployed to production
