const { detectApprovalRequirement } = require("./policies/approval-policy");

function checkApproval({ request }) {
  return detectApprovalRequirement(request);
}

module.exports = {
  checkApproval,
};
