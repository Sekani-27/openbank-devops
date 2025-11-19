# openbank-devops
Cloud-native banking simulation - IBM DevOps edition
#  OpenBank DevOps Edition

Cloud-native banking simulation using IBM DevOps principles and modern tooling.

##  Team
- **Ntando** - DevOps Lead  
- **Kagiso** - Lead Developer (Backend)  
- **Mthobisi** - Frontend Developer  
- **Florence** - QA & Documentation  
- **Tumi** - Database & Backend Support

##  Project Overview
A 4-week project to build a full-stack banking application while mastering:
- ✅ Agile methodologies
- ✅ Git workflows & collaboration
- ✅ CI/CD pipelines
- ✅ Docker containerization
- ✅ Kubernetes deployment
- ✅ Monitoring & observability

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React, React Router, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| DevOps | Git, GitHub Actions, Docker, Kubernetes |
| Monitoring | Prometheus, Grafana |

##  Sprint Timeline

###  Week 1: Agile Planning & Code Foundation (Current)
- Set up Agile board with user stories
- Create GitHub repo with branch strategy
- Build backend and frontend skeletons
- Implement code review workflow

### Week 2: Build, Test & Containerize
- Implement backend APIs
- Build frontend components
- Apply Test-Driven Development
- Dockerize services

### Week 3: CI/CD & Deployment
- Configure GitHub Actions pipeline
- Deploy to Kubernetes
- Implement Infrastructure as Code

### Week 4: Monitoring & SRE
- Set up Prometheus & Grafana
- Define SLOs
- Final documentation & demo

## Getting Started

### Prerequisites
```bash
Node.js v16+
MongoDB
Git
```

### Installation
```bash
# Clone repository
git clone https://github.com/Sekani-27/openbank-devops.git
cd openbank-devops

# Backend setup
cd backend
npm install

# Frontend setup
cd ../frontend
npm install
```

### Running Locally
```bash
# Terminal 1: Backend (http://localhost:5000)
cd backend
npm start

# Terminal 2: Frontend (http://localhost:3000)
cd frontend
npm start
```

## Project Structure
```
openbank-devops/
├── backend/              # Express.js API
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── controllers/     # Business logic
│   └── tests/           # Backend tests
├── frontend/            # React app
│   ├── src/
│   │   ├── components/  # React components
│   │   └── services/    # API calls
│   └── public/
├── docs/                # Documentation
├── CONTRIBUTING.md      # Git workflow guide
└── README.md
```

##  Development Workflow
1. **Branch** from `develop` → `feature/your-feature`
2. **Commit** with clear messages: `feat: add login endpoint`
3. **Push** to GitHub
4. **Create PR** to `develop`
5. **Get review** from teammate
6. **Merge** after approval

See [CONTRIBUTING.md](https://github.com/Sekani-27/openbank-devops/blob/main/CONTRIBUTING.md) for detailed guidelines.

## Current Sprint Status
**Sprint 1 - Week 1**  
 [View Project Board](https://github.com/Sekani-27/openbank-devops/projects?query=is%3Aopen)

**User Stories:**
- [ ] User Registration
- [ ] User Login
- [ ] View Dashboard
- [ ] Deposit Money
- [ ] Withdraw Money
- [ ] Transaction History

##  Documentation
- [Contributing Guide](https://github.com/Sekani-27/openbank-devops/blob/main/CONTRIBUTING.md)
- [API Documentation](docs/API.md) - Coming Week 2
- [Testing Plan](docs/TESTING_PLAN.md) - Coming Week 2

## Learning Outcomes
By completing this project, the team will:
- Master Agile sprint planning and execution
- Practice collaborative Git workflows
- Build and deploy cloud-native applications
- Implement automated CI/CD pipelines
- Apply Test-Driven Development
- Set up production monitoring

##  Communication
- **Daily Standup:** 9:00 AM
- **Sprint Reviews:** End of each week
- **Team Chat:** [Whatsapp]

---

**Last Updated:** [Today's Date]  
**Current Sprint:** Week 1 - Agile Planning & Code Foundation
```

5. Scroll down
6. Commit message: `docs: update README with project details`
7. Select: **"Commit directly to the `develop` branch"**
8. Click **"Commit changes"**

---

##  YOUR DAY 1 CHECKLIST

You should now have:
- [x] GitHub repository created
- [x] Team members invited as collaborators
- [x] `main` and `develop` branches created
- [x] `main` branch protected (requires PRs)
- [x] `CONTRIBUTING.md` guide created
- [x] README updated with project info
- [x] Project board created
- [x] 6 user stories created as issues
- [x] All issues added to project board

---


```
 Day 1 Complete! 

GitHub Setup Done ✅

Repository: []

You've all been invited as collaborators - check your email and accept the invitation!

📋 What's Ready:
✅ Project board with 6 user stories
✅ Branch strategy (main → develop → feature branches)
✅ Contributing guide with Git workflow
✅ Updated README

Tomorrow (Day 2) Tasks:
@kagiso - Backend setup (Node.js + Express)
@mthobisi - Frontend setup (React)
@tumi - Database schema design  
@florence - Testing documentation
@ntando - Coordination & reviews

Before tomorrow, everyone:
1. Accept GitHub repo invitation
2. Read CONTRIBUTING.md
3. Clone the repo locally
4. Make sure you have Node.js and MongoDB installed

Daily standup tomorrow at 9:00 AM sharp!
