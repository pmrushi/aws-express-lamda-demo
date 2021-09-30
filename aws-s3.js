const AWS = require('aws-sdk');

const bucketName = 'test-client1';
const s3 = new AWS.S3({
    Bucket: bucketName
});

const uploadFile = (key, fileContent) => {
    console.log('uploadFile');
    console.log(key);
    console.log(fileContent);
    const params = {
        Bucket: bucketName,
        Key: key,
        ContentType: 'json',
        Body: Buffer.from(JSON.stringify(fileContent), "binary"),
        ACL: "public-read"
    };

    return s3.upload(params).promise().catch((error) => console.log(error));
};

const downloadFile = async (key) => {
    const params = {
        Bucket: bucketName,
        Key: key
    };
    const file = await s3.getObject(params).promise();
    console.log(file);
    return file.Body.toString();
};

module.exports = {
    uploadFile,
    downloadFile
}