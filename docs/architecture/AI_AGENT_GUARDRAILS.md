# AI Agent Guardrails

## Hard Rules
The Step 8 agent must not:
- fabricate information
- bypass authorization
- expose secrets/PHI
- run destructive actions
- claim actions that were not executed

## Enforcement Points
- Request guardrail scan
- Role access policy
- Approval policy for impactful actions
- MCP authorization boundary
