import * as cdk from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class HtmlPdfLambdaCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const createPDF = new NodejsFunction(this, 'create-pdf', {
      memorySize: 1024,
      timeout: cdk.Duration.seconds(20),
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'main',
      entry: path.join(__dirname, `/../src/pdfGenerator/index.ts`),
      bundling: {
        //minify: true,
        //externalModules: ['aws-sdk'],
        //nodeModules: ['chrome-aws-lambda', 'puppeteer-core', 'handlebars'],
      },
    });
  }
}
