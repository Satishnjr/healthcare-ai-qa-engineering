export type JiraIssueType =
  | "Epic"
  | "Story"
  | "Task"
  | "Sub-task"
  | "Acceptance Criteria"
  | "Bug"
  | "Test Case"
  | "Test Execution";

export type JiraIssueStatus =
  | "Draft"
  | "Refinement"
  | "Ready"
  | "In Progress"
  | "QA Ready"
  | "QA Testing"
  | "Passed"
  | "Failed"
  | "Done"
  | "Reopened"
  | "Open"
  | "Triaged"
  | "Assigned"
  | "Fixed"
  | "QA Retest"
  | "Verified"
  | "Closed";

export type JiraPriority = "Low" | "Medium" | "High" | "Critical";

export type AiClassification =
  | "DETERMINISTIC_AUTOMATION"
  | "AI_ASSISTED_AUTOMATION"
  | "AI_AGENT_CANDIDATE"
  | "MANUAL"
  | "BACKEND_DEPENDENCY"
  | "UI_GAP"
  | "FUTURE";

export type AiFailureStatus =
  | "NOT_ANALYZED"
  | "ANALYSIS_READY"
  | "AI_ANALYZED"
  | "HUMAN_REVIEW_REQUIRED"
  | "CONFIRMED";

export interface JiraIssue {
  issueId: string;
  issueKey: string;
  issueType: JiraIssueType;
  summary: string;
  description: string;
  status: JiraIssueStatus;
  priority: JiraPriority;
  labels: string[];
  components: string[];
  sprint: string;
  release: string;
  assignee: string;
  reporter: string;
  parentIssue: string | null;
  linkedIssues: string[];
  acceptanceCriteria: string[];
  traceabilityIds: string[];
  testCaseIds: string[];
  testScenarioIds: string[];
  defectSeverity: JiraPriority | null;
  automationStatus: AiClassification;
  aiClassification: AiClassification;
  aiConfidence: number;
  evidenceReferences: string[];
  updatedAt: string;
}

export interface JiraDefect {
  defectId: string;
  summary: string;
  severity: JiraPriority;
  priority: JiraPriority;
  status: JiraIssueStatus;
  environment: string;
  linkedTestCase: string;
  linkedUserStory: string;
  failureArtifact: string;
  rootCause: string;
  aiFailureAnalysisStatus: AiFailureStatus;
  evidence: string[];
}

export interface JiraBoardCard {
  issueKey: string;
  summary: string;
  assignee: string;
  priority: JiraPriority;
  column: "BACKLOG" | "SELECTED" | "IN_PROGRESS" | "IN_REVIEW" | "DONE";
}

export interface ConfluenceSpace {
  spaceKey: string;
  name: string;
  description: string;
  pageCount: number;
  lastUpdated: string;
}

export interface ConfluencePage {
  documentId: string;
  pageId: string;
  spaceKey: string;
  title: string;
  parentPageId: string;
  version: number;
  content: string;
  labels: string[];
  traceabilityIds: string[];
  sourceType: string;
  sourceSystem: string;
  sourceId: string;
  timestamp: string;
  author: string;
  lastModifiedBy: string;
  accessScope: string;
  sensitivity: string;
  checksum: string;
  relatedJiraIssues: string[];
  relatedTestCases: string[];
  relatedTestData: string[];
}

export interface RagKnowledgeDocument {
  documentId: string;
  source: string;
  title: string;
  chunkReadiness: "READY" | "PENDING" | "EXCLUDED" | "FAILED";
  metadataCompleteness: "COMPLETE" | "PARTIAL";
  accessScope: string;
  sensitivity: string;
  traceabilityIds: string[];
  ingestionStatus: "READY" | "PENDING" | "EXCLUDED" | "FAILED";
}

export interface TraceabilityNode {
  type: string;
  id: string;
  label: string;
  linksTo: string[];
}

export interface JiraMetrics {
  totalIssues: number;
  epics: number;
  userStories: number;
  testCases: number;
  defects: number;
  openDefects: number;
  closedDefects: number;
  sprintProgress: number;
  automationCoverage: number;
  regressionCoverage: number;
  aiCandidateTests: number;
  aiAgentCandidateTests: number;
}

export interface AiStatusPanel {
  automationClassification: "ACTIVE" | "FOUNDATION_ONLY";
  aiAnalysisStatus: "FOUNDATION_ONLY" | "ACTIVE";
  ragKnowledgeStatus: "READY_FOR_INGESTION" | "PENDING";
  agentCandidate: "AGENT_CANDIDATE" | "NONE";
  evaluationStatus: "EVALUATION_DATASET_READY" | "PENDING";
  observabilityStatus: "TELEMETRY_READY" | "PENDING";
  mcpStatus: "TOOL_BOUNDARY_DEFINED" | "PENDING";
}

export interface AiConceptStatus {
  concept: string;
  status: "IMPLEMENTED" | "FOUNDATION" | "PLANNED" | "BLOCKED";
  futureStep: string;
  relevance: string;
  interviewExplanation: string;
}
