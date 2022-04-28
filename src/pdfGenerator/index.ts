import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { PDFGenerator } from './PDFGenerator';

export async function createPdfHandler(
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> {
  return PDFGenerator.createPDF(event);
}
