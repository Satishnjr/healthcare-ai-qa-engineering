const crypto = require("crypto");

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function checksum(value) {
  return `sha256:${sha256(value)}`;
}

function stableId(prefix, ...parts) {
  return `${prefix}-${sha256(parts.join("::")).slice(0, 16)}`;
}

module.exports = {
  sha256,
  checksum,
  stableId,
};
