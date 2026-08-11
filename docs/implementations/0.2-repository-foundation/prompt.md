# STEP 0.2 â€” REPOSITORY FOUNDATION + GITHUB CONFIGURATION

Step 0.1 â€” Environment Discovery has been completed.

The Step 0.1 documentation correction should also have been
completed before starting this step.

Now implement ONLY:

STEP 0.2 â€” Repository Foundation

============================================================
GITHUB REPOSITORY
============================================================

The real GitHub repository for this project is:

https://github.com/Satishnjr/healthcare-ai-qa-engineering.git

Configure this repository as:

origin

Do NOT create another GitHub repository.

Do NOT invent another URL.

Do NOT use a different repository.

============================================================
OBJECTIVE
============================================================

Create the initial project foundation and connect the local
repository to the real GitHub repository.

============================================================
IMPORTANT CONSTRAINTS
============================================================

I am using an office laptop without administrator privileges.

Do NOT:

- Install Docker
- Install global packages
- Modify system configuration
- Modify corporate security settings
- Disable security controls
- Bypass authentication
- Store credentials in files
- Hardcode GitHub tokens
- Hardcode passwords

Use the existing Git installation.

============================================================
1. INSPECT CURRENT STATE
============================================================

Before making changes:

Check:

pwd/current directory
git status
existing files
existing .git directory
existing Git remotes

Inspect debug.log before deciding whether it should be kept.

Do not delete it without understanding what it contains.

============================================================
2. INITIALIZE GIT
============================================================

If this directory is not already a Git repository:

git init

Configure the branch as:

main

Do not change global Git configuration.

Use repository-local configuration if required.

============================================================
3. CONFIGURE GITHUB REMOTE
============================================================

Add:

origin

with:

https://github.com/Satishnjr/healthcare-ai-qa-engineering.git

Verify:

git remote -v

Do NOT embed credentials in the URL.

============================================================
4. CREATE PROJECT STRUCTURE
============================================================

Create ONLY the project foundation:

frontend/
automation/
rag/
mcp/
agent/

mock-systems/
    jira/
    confluence/
    jenkins/

knowledge/
    brd/
    prd/
    epics/
    user-stories/
    acceptance-criteria/
    business-rules/
    test-scenarios/
    test-cases/

docs/
    architecture/
    qa/
    rag/
    mcp/
    agent/
    implementations/

.github/

Use .gitkeep only where necessary.

Do NOT implement application functionality yet.

============================================================
5. ROOT DOCUMENTATION
============================================================

Create:

README.md
CHANGELOG.md
docs/IMPLEMENTATION_INDEX.md
docs/INTERVIEW_GUIDE.md
docs/PROJECT_METADATA.md

Documentation must describe the project accurately.

Clearly distinguish:

IMPLEMENTED
PLANNED
BLOCKED

Do not claim future components are already implemented.

============================================================
6. SECURITY .GITIGNORE
============================================================

Create a secure .gitignore covering:

Node.js
Python
Virtual environments
Environment files
Secrets
Logs
Build output
Coverage
Playwright artifacts
OS files
IDE temporary files

Do not ignore source code or project documentation.

============================================================
7. STEP 0.2 DOCUMENTATION
============================================================

Create:

docs/implementations/0.2-repository-foundation/

Inside it:

prompt.md
README.md
implementation-report.pdf
interview-notes.md

------------------------------------------------------------
prompt.md
------------------------------------------------------------

Save the exact Step 0.2 prompt used for this implementation.

------------------------------------------------------------
README.md
------------------------------------------------------------

Include:

- Objective
- Context
- Requirements
- Architecture
- Repository structure
- GitHub configuration
- Files created
- Files modified
- Security
- Validation
- Problems
- Resolution
- Lessons learned
- Next steps
- Status

------------------------------------------------------------
implementation-report.pdf
------------------------------------------------------------

Create a professional PDF documenting the actual
implementation.

Include:

- Objective
- Architecture
- Repository structure
- Git configuration
- GitHub configuration
- Security
- Validation
- Git commit
- Git push
- Lessons learned
- Interview talking points

Do not fabricate results.

------------------------------------------------------------
interview-notes.md
------------------------------------------------------------

Include:

- What was implemented?
- Why?
- Git architecture
- GitHub integration
- Security considerations
- Office laptop constraints
- Interview questions
- Suggested answers
- 30-second explanation
- 1-minute explanation
- 2-minute explanation
- Resume bullet

============================================================
8. VALIDATION
============================================================

Validate:

[ ] Git repository initialized
[ ] Current branch is main
[ ] origin configured correctly
[ ] Project structure exists
[ ] README exists
[ ] CHANGELOG exists
[ ] IMPLEMENTATION_INDEX exists
[ ] INTERVIEW_GUIDE exists
[ ] PROJECT_METADATA exists
[ ] .gitignore exists
[ ] Step 0.2 prompt exists
[ ] Step 0.2 README exists
[ ] Step 0.2 PDF exists
[ ] Step 0.2 interview notes exist
[ ] No secrets
[ ] No credentials
[ ] No PHI
[ ] No unnecessary packages installed

============================================================
9. GIT COMMIT
============================================================

Review:

git status

Stage only intended files.

Commit:

chore(project): initialize healthcare ai qa foundation

Then verify:

git status

============================================================
10. PUSH TO GITHUB
============================================================

Push the main branch:

git push -u origin main

IMPORTANT:

Do NOT claim success unless the command actually succeeds.

If authentication is required:

STOP and report the authentication requirement.

Do NOT ask me to provide a password or token inside Codex.

Do NOT save credentials anywhere in the project.

If the GitHub repository is empty and push succeeds,
verify the remote branch exists.

============================================================
11. UPDATE DOCUMENTATION AFTER PUSH
============================================================

If push succeeds, update the Step 0.2 README/report/notes
with the actual:

- branch
- commit hash
- commit message
- push status

Do not fabricate any of these values.

If updating documentation creates another commit, create a
second clearly named documentation commit and push it.

============================================================
12. DO NOT IMPLEMENT FUTURE STEPS
============================================================

DO NOT create:

React application
Vite application
Healthcare UI
Playwright
Cucumber
BRD
PRD
User Stories
Jira
Confluence
Jenkins
RAG
MCP
LangGraph
AI Agent
Backend
API
API automation

These belong to future steps.

============================================================
13. FINAL RESPONSE
============================================================

Return:

Implementation Status:
PASS / FAIL / BLOCKED / PARTIAL

Step:
STEP 0.2 â€” Repository Foundation

Git:
Repository:
Branch:
Remote:

Commit:
Commit Message:

Push:
SUCCESS / FAILED / BLOCKED

Remote Verification:
SUCCESS / FAILED / BLOCKED

Files Created:

Files Modified:

Documentation:

Prompt:
<path>

README:
<path>

PDF:
<path>

Interview Notes:
<path>

Validation:

Known Issues:

Next Recommended Step:

DO NOT automatically execute Step 0.3.

WAIT FOR MY NEXT PROMPT.
