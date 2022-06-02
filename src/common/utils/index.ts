const crypto = require('crypto');

export function sha256(v) {
  const sha256 = crypto.createHash('sha256');
  sha256.update(v);
  return sha256.digest("hex");
}