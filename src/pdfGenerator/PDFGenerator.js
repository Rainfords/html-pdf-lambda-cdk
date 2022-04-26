"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFGenerator = void 0;
const Helper_1 = require("./Helper");
const pdf_template_1 = require("./templates/pdf-template");
class PDFGenerator {
}
exports.PDFGenerator = PDFGenerator;
_a = PDFGenerator;
PDFGenerator.getPDF = async (event) => {
    try {
        console.log(event);
        const html = (0, pdf_template_1.getTemplate)({ name: 'Ian' });
        const options = {
            format: 'A4',
            printBackground: true,
            margin: { top: '1in', right: '1in', bottom: '1in', left: '1in' },
        };
        const pdf = await Helper_1.Helper.getPDFBuffer(html, options);
        return {
            headers: {
                'Content-type': 'application/pdf',
            },
            statusCode: 200,
            body: 'TESTING',
            isBase64Encoded: true,
        };
    }
    catch (error) {
        console.error('Error : ', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error,
                message: 'Something went wrong',
            }),
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGR2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUERGR2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQ0FBa0M7QUFFbEMsMkRBQXVEO0FBRXZELE1BQWEsWUFBWTs7QUFBekIsb0NBcUNDOztBQS9CUSxtQkFBTSxHQUFzQixLQUFLLEVBQUMsS0FBSyxFQUFDLEVBQUU7SUFDL0MsSUFBSTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBQSwwQkFBVyxFQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDMUMsTUFBTSxPQUFPLEdBQUc7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7U0FDakUsQ0FBQztRQUVGLE1BQU0sR0FBRyxHQUFHLE1BQU0sZUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFckQsT0FBTztZQUNMLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsaUJBQWlCO2FBQ2xDO1lBQ0QsVUFBVSxFQUFFLEdBQUc7WUFDZixJQUFJLEVBQUUsU0FBUztZQUNmLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUM7S0FDSDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakMsT0FBTztZQUNMLFVBQVUsRUFBRSxHQUFHO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ25CLEtBQUs7Z0JBQ0wsT0FBTyxFQUFFLHNCQUFzQjthQUNoQyxDQUFDO1NBQ0gsQ0FBQztLQUNIO0FBQ0gsQ0FBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVscGVyIH0gZnJvbSAnLi9IZWxwZXInO1xuaW1wb3J0IHsgR2VuZXJhdG9yRnVuY3Rpb24gfSBmcm9tICcuL3R5cGVzL0dlbmVyYXRvclR5cGVzJztcbmltcG9ydCB7IGdldFRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZXMvcGRmLXRlbXBsYXRlJztcblxuZXhwb3J0IGNsYXNzIFBERkdlbmVyYXRvciB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJ1ZmZlciBmb3IgYSBnZW5lcmF0ZWQgUERGIG9mIG1hbnVhbFxuICAgKiBAcGFyYW0ge2FueX0gZXZlbnQgLSBUaGUgb2JqZWN0IHRoYXQgY29tZXMgZm9yIGxhbWJkYSB3aGljaCBpbmNsdWRlcyB0aGUgaHR0cCdzIGF0dHJpYnV0ZXNcbiAgICogQHJldHVybnMge0FycmF5PGFueT59IGFycmF5IG9mIFN0cnVjdHVyZSBJbnN0cnVjdGlvbnNcbiAgICovXG4gIHN0YXRpYyBnZXRQREY6IEdlbmVyYXRvckZ1bmN0aW9uID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICBjb25zdCBodG1sID0gZ2V0VGVtcGxhdGUoeyBuYW1lOiAnSWFuJyB9KTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGZvcm1hdDogJ0E0JyxcbiAgICAgICAgcHJpbnRCYWNrZ3JvdW5kOiB0cnVlLFxuICAgICAgICBtYXJnaW46IHsgdG9wOiAnMWluJywgcmlnaHQ6ICcxaW4nLCBib3R0b206ICcxaW4nLCBsZWZ0OiAnMWluJyB9LFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcGRmID0gYXdhaXQgSGVscGVyLmdldFBERkJ1ZmZlcihodG1sLCBvcHRpb25zKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vcGRmJyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICBib2R5OiAnVEVTVElORycsIC8vcGRmLnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICAgICAgaXNCYXNlNjRFbmNvZGVkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgOiAnLCBlcnJvcik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiA1MDAsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBtZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnLFxuICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuIl19