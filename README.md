# aws-express-lamda-demo
AWS Express and Lamda Example

Reference : https://bitbucket.org/blog/deploy-an-express-js-app-to-aws-lambda-using-the-serverless-framework

#### Install Serverless
```
npm install -g serverless
```

#### Serverless check version
```
serverless --version
```

#### Login to AWS using credentials
```
serverless config credentials --provider aws --key ACCESS_KEY --secret SECRET_KEY
```

#### Deploy to AWS Lamda
```
serverless deploy
```
If everything goes well you should see output like:
```
endpoints:
  ANY - https://uyap2oc095.execute-api.us-east-1.amazonaws.com/dev/
  ANY - https://uyap2oc095.execute-api.us-east-1.amazonaws.com/dev/{proxy+}
```




