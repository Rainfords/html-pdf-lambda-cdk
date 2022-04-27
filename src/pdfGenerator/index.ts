import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { PDFGenerator } from './PDFGenerator';

export async function createPdfHandler(
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> {
  console.log('event 👉', event);
  return await PDFGenerator.getPDF(event);
}
