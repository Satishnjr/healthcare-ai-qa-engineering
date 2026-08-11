# Step 0.1 Interview Notes

## What was implemented?
A documentation-backed environment discovery was completed to identify available runtimes, missing tools, repository readiness, and enterprise constraints before any implementation work.

## Why was environment discovery necessary?
It prevents failed setup paths, avoids unauthorized installation on an office laptop, and enables a realistic implementation plan based on actual tool availability.

## What tools were available?
- Git 2.46.0
- Node.js 24.18.0
- npm 11.16.0
- npx 11.16.0
- Python 3.14.6
- pip 26.1.2
- uv 0.11.19
- Java 21.0.8
- Maven 3.9.9
- PowerShell 5.1
- VS Code CLI 1.132.0

## What constraints were identified?
- Current project folder was not a Git repository
- No Git remote configured
- Network-disabled sandbox prevented safe GitHub connectivity test
- Office-laptop constraints require no admin assumptions and no system-wide changes

## Why is Docker not a blocker?
The target roadmap can proceed with local, non-containerized tooling first (frontend, docs, local automation setup), and Docker can remain optional unless later CI/containerization specifically requires it.

## Why should global package installation be avoided?
Global installation is harder to reproduce, can conflict with corporate policies, and introduces environment drift. Project-local dependencies are safer and more deterministic.

## How would you explain this step in an interview?
This step established execution feasibility and risk boundaries. We validated the exact local toolchain, identified missing dependencies, and recorded constraints so subsequent steps are predictable, compliant, and reproducible.

## 30-second explanation
I started by validating the environment before coding. I checked installed runtimes, repository readiness, network constraints, and office-laptop limitations. This reduced setup risk and produced a clear Step 0.2 path without making any system changes.

## 1-minute explanation
Step 0.1 was a controlled discovery pass. I verified versions for Git, Node, Python, Java, Maven, and PowerShell; confirmed missing tools like Docker/Playwright CLI/Cucumber CLI; and assessed repository status. The folder was not a Git repo and had no remote. I also confirmed sandbox network restrictions, meaning GitHub connectivity couldnt be safely validated. This gave us an implementation baseline and compliance-safe plan for Step 0.2.

## 2-minute explanation
Before implementing architecture, I executed environment discovery to avoid false starts. I focused on four areas: toolchain availability, repository readiness, platform constraints, and risk mapping. Toolchain checks confirmed we have strong core runtimes (Node, Python, Java, Maven, PowerShell, Git) and highlighted gaps (Docker, pnpm, yarn, Playwright CLI, Cucumber CLI, pytest). Repository checks showed the directory is not initialized as Git and has no remote, so commit/push workflows must be deferred until Step 0.2. Context checks showed network-disabled sandbox constraints, which block safe GitHub connectivity verification in-session. Finally, I documented risks and blockers and set a constrained next step. This keeps delivery realistic, reproducible, and compliant with office-laptop restrictions.

## Possible Interview Questions
1. Why did you perform environment discovery first?
Answer: To validate feasibility and avoid planning against assumptions that fail under enterprise constraints.

2. How did you handle an office laptop without admin access?
Answer: I avoided any installation or system changes, used only existing tools, and documented blockers instead of bypassing policy.

3. Why did you avoid Docker?
Answer: Docker was not available and is not mandatory for early foundation steps; local-first execution is sufficient initially.

4. How would you handle missing dependencies?
Answer: Identify each dependency, justify need, prefer user/local install, and mark blockers when policy or availability prevents usage.

5. How do you make an AI/QA project reproducible?
Answer: Pin versions, use project-local dependencies, document constraints/decisions per step, and maintain auditable implementation artifacts.

## Future Work Status
- Repository initialization and baseline project files: PLANNED (Step 0.2)
- Git remote/GitHub integration: PLANNED
- Frontend, automation, RAG, MCP, LangGraph components: PLANNED
