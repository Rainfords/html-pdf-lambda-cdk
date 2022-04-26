import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { PDFGenerator } from './PDFGenerator';

export async function main(
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> {
  console.log('event 👉', event);
  return await PDFGenerator.getPDF(event);
  // return {
  //   body: JSON.stringify({ message: 'Successful lambda invocation' }),
  //   statusCode: 200,
  // };
}
