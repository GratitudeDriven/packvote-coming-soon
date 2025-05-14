# PackVote Coming Soon Page

This is a temporary landing page for PackVote, an AI-powered travel planning app that helps groups decide on their next destination.

## Setup

1. Clone the repository:
```bash
git clone https://github.com/GratitudeDriven/packvote-coming-soon.git
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

The application is deployed to Vercel automatically.

## Development Workflow

This repository follows a structured development workflow with separate development and production environments:

### Branch Structure
- `main` - Production branch, protected from direct pushes
- `dev` - Development branch for testing changes before production

### Development Process
1. Create feature branches from `dev`
2. Implement and test your changes locally
3. Submit a pull request to merge into `dev`
4. After testing in the development environment, create a pull request from `dev` to `main`
5. Once approved and merged, changes will be deployed to production
