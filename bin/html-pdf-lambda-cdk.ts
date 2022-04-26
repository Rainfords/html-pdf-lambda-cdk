#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HtmlPdfLambdaCdkStack } from '../lib/html-pdf-lambda-cdk-stack';

const app = new cdk.App();
new HtmlPdfLambdaCdkStack(app, 'create-pdf', {
  stackName: 'create-pdf-stack',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
