const JiraClient = require("../clients/jira-client");
const { validateJiraIssue } = require("../models/validators");
const { nowIso, makeOperationMetadata } = require("../models/common");
const jiraData = require("../data/mock-jira-issues.json");

class JiraMockAdapter extends JiraClient {
  constructor() {
    super();
    this.projectKey = jiraData.projectKey;
    this.issues = [...jiraData.issues];
    this.comments = {};
  }

  getIssue(issueKey) {
    const issue = this.issues.find((item) => item.issueKey === issueKey);
    if (!issue) {
      return {
        issue: null,
        metadata: makeOperationMetadata("getIssue", "jira", issueKey, "NOT_FOUND", [])
      };
    }

    return {
      issue,
      metadata: makeOperationMetadata(
        "getIssue",
        "jira",
        issueKey,
        "SUCCESS",
        issue.traceabilityIds
      )
    };
  }

  searchIssues(filters = {}) {
    let results = [...this.issues];

    if (filters.issueType) {
      results = results.filter((item) => item.issueType === filters.issueType);
    }

    if (filters.status) {
      results = results.filter((item) => item.status === filters.status);
    }

    if (filters.label) {
      results = results.filter((item) => item.labels.includes(filters.label));
    }

    if (filters.traceabilityId) {
      results = results.filter((item) => item.traceabilityIds.includes(filters.traceabilityId));
    }

    return {
      issues: results,
      metadata: makeOperationMetadata("searchIssues", "jira", this.projectKey, "SUCCESS", [])
    };
  }

  createIssue(issueDraft) {
    const nextId = (10000 + this.issues.length + 1).toString();
    const now = nowIso();
    const issue = {
      issueId: nextId,
      createdAt: now,
      updatedAt: now,
      linkedIssues: [],
      acceptanceCriteria: [],
      traceabilityIds: [],
      testCaseIds: [],
      testScenarioIds: [],
      evidenceReferences: [],
      ...issueDraft
    };

    validateJiraIssue(issue);
    this.issues.push(issue);

    return {
      issue,
      metadata: makeOperationMetadata("createIssue", "jira", issue.issueKey, "SUCCESS", issue.traceabilityIds)
    };
  }

  updateIssue(issueKey, updates) {
    const index = this.issues.findIndex((item) => item.issueKey === issueKey);
    if (index < 0) {
      return {
        issue: null,
        metadata: makeOperationMetadata("updateIssue", "jira", issueKey, "NOT_FOUND", [])
      };
    }

    const updated = {
      ...this.issues[index],
      ...updates,
      updatedAt: nowIso()
    };

    validateJiraIssue(updated);
    this.issues[index] = updated;

    return {
      issue: updated,
      metadata: makeOperationMetadata("updateIssue", "jira", issueKey, "SUCCESS", updated.traceabilityIds)
    };
  }

  linkIssues(sourceKey, targetKey) {
    const source = this.issues.find((item) => item.issueKey === sourceKey);
    const target = this.issues.find((item) => item.issueKey === targetKey);

    if (!source || !target) {
      return {
        linked: false,
        metadata: makeOperationMetadata("linkIssues", "jira", sourceKey, "NOT_FOUND", [])
      };
    }

    if (!source.linkedIssues.includes(targetKey)) {
      source.linkedIssues.push(targetKey);
      source.updatedAt = nowIso();
    }

    return {
      linked: true,
      metadata: makeOperationMetadata("linkIssues", "jira", sourceKey, "SUCCESS", source.traceabilityIds)
    };
  }

  getComments(issueKey) {
    return {
      comments: this.comments[issueKey] || [],
      metadata: makeOperationMetadata("getComments", "jira", issueKey, "SUCCESS", [])
    };
  }

  addComment(issueKey, text) {
    if (!this.comments[issueKey]) {
      this.comments[issueKey] = [];
    }

    const comment = {
      id: `${issueKey}-COMMENT-${this.comments[issueKey].length + 1}`,
      text,
      createdAt: nowIso()
    };

    this.comments[issueKey].push(comment);

    return {
      comment,
      metadata: makeOperationMetadata("addComment", "jira", issueKey, "SUCCESS", [])
    };
  }

  getProject() {
    return {
      projectKey: this.projectKey,
      issueCount: this.issues.length,
      metadata: makeOperationMetadata("getProject", "jira", this.projectKey, "SUCCESS", [])
    };
  }

  getSprint(sprintName) {
    const issues = this.issues.filter((item) => item.sprint === sprintName);
    return {
      sprintName,
      issues,
      metadata: makeOperationMetadata("getSprint", "jira", sprintName, "SUCCESS", [])
    };
  }

  getRelease(releaseName) {
    const issues = this.issues.filter((item) => item.release === releaseName);
    return {
      releaseName,
      issues,
      metadata: makeOperationMetadata("getRelease", "jira", releaseName, "SUCCESS", [])
    };
  }
}

module.exports = JiraMockAdapter;
