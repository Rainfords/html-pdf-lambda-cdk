import * as cdk from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class HtmlPdfLambdaCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const api = new apigateway.RestApi(this, 'api', {
      description: 'API gateway for PDF creator',
      deployOptions: {
        stageName: 'dev',
      },
      // 👇 enable CORS
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowMethods: ['POST'],
        allowCredentials: true,
        allowOrigins: ['*'],
      },
    });
    const createPdfLambbda = new NodejsFunction(this, 'create-pdf', {
      memorySize: 1024,
      timeout: cdk.Duration.seconds(20),
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'createPdfHandler',
      entry: path.join(__dirname, `/../src/pdfGenerator/index.ts`),
      bundling: {
        minify: true,
        externalModules: ['aws-sdk'],
        nodeModules: ['chrome-aws-lambda', 'puppeteer-core'],
      },
    });
    const createPdf = api.root.addResource('create-pdf');
    createPdf.addMethod(
      'POST',
      new apigateway.LambdaIntegration(createPdfLambbda, { proxy: true }),
    );

    new cdk.CfnOutput(this, 'apiUrl', { value: api.url });
  }
}
