const crypto = require('crypto');

module.exports.calculate = function (cert) {
	const shasum = crypto.createHash('sha1');
	shasum.update(new Buffer.from(cert, 'base64'));

	return shasum.digest('hex');
};
