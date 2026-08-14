# MCP Security (Step 7)

## Role Model
- Healthcare Administrator: `public + team + admin`
- Doctor/Nurse/Receptionist: `public + team`
- Patient: `public`

## Authorization Enforcement
- Each tool has a required scope.
- Authorization runs before tool execution.
- Unauthorized requests return `ACCESS_DENIED` with safe details.

## RAG Access Consistency
- MCP RAG tools forward role context into Step 5 retrieval/runtime boundary.
- Patient role remains restricted to public-scope context.

## Data Safety Rules
- Synthetic deterministic data only.
- No PHI.
- No credentials/secrets.
- No fabricated evidence for not-found/no-evidence conditions.

## Secure Error Contract
- Controlled error codes and safe details only.
- No stack traces or internal secrets returned to caller.
