# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Testing locally

cdk synth create-pdf --no-staging > template.yaml

sam local invoke --no-event

## Single invocation
sam local start-lambda
aws lambda invoke --function-name "create-pdf" --endpoint-url "http://127.0.0.1:3001" --no-verify-ssl out.txt

## Test with api gateway locally
npm run build
cdk synth create-pdf --no-staging > template.yaml
sam local start-api
curl -v -X POST 'http://127.0.0.1:3000/create-pdf' -H 'content-type: application/json' -d '{ "name": "Name" }'
