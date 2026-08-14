# LangGraph Checkpointing

## Storage
- Checkpoints: `.tmp/langgraph-runtime/checkpoints/`
- Run snapshots: `.tmp/langgraph-runtime/runs/`

## Operations
- save checkpoint after each node
- load checkpoint by `graphRunId`
- list checkpoints
- cleanup retention
- resume execution from checkpoint context
