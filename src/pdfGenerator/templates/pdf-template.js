"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplate = void 0;
const handlebars = __importStar(require("handlebars"));
const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

    .page-break {
      page-break-before: always;
    }
    .custom-font {
      font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
    }
  </style>
  <body>
    <h1>Hello World</h1>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur
      voluptate, aut libero natus aliquid dignissimos! Voluptatem repellat
      quibusdam doloribus impedit quisquam labore molestias, saepe illum,
      assumenda eum voluptate praesentium.
    </div>
    <br /><br />
    <div>
      Hi, My Name is {{name}}, Welcome to PDF generation :)
    </div>
    <div class="page-break">
      This content is in another page thanks to the page-break-before css
      attribute.
    </div>
    <br /><br />
    <div class="custom-font">
      This content has a custom font loaded thanks to the google fonts CDN.
    </div>
    <br /><br />
    <img
      src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
      alt="Placeholder image"
    />
  </body>
</html>
`;
const getTemplate = (context) => {
    return handlebars.compile(html)(context);
};
exports.getTemplate = getTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGRmLXRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXlDO0FBRXpDLE1BQU0sSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkNaLENBQUM7QUFFSyxNQUFNLFdBQVcsR0FBUSxDQUFDLE9BQVksRUFBRSxFQUFFO0lBQy9DLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFGVyxRQUFBLFdBQVcsZUFFdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBoYW5kbGViYXJzIGZyb20gJ2hhbmRsZWJhcnMnO1xuXG5jb25zdCBodG1sID0gYFxuPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbiAgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgPC9oZWFkPlxuICA8c3R5bGU+XG4gICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4gICAgLnBhZ2UtYnJlYWsge1xuICAgICAgcGFnZS1icmVhay1iZWZvcmU6IGFsd2F5cztcbiAgICB9XG4gICAgLmN1c3RvbS1mb250IHtcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8Ym9keT5cbiAgICA8aDE+SGVsbG8gV29ybGQ8L2gxPlxuICAgIDxkaXY+XG4gICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFtIGNvbnNlcXVhdHVyXG4gICAgICB2b2x1cHRhdGUsIGF1dCBsaWJlcm8gbmF0dXMgYWxpcXVpZCBkaWduaXNzaW1vcyEgVm9sdXB0YXRlbSByZXBlbGxhdFxuICAgICAgcXVpYnVzZGFtIGRvbG9yaWJ1cyBpbXBlZGl0IHF1aXNxdWFtIGxhYm9yZSBtb2xlc3RpYXMsIHNhZXBlIGlsbHVtLFxuICAgICAgYXNzdW1lbmRhIGV1bSB2b2x1cHRhdGUgcHJhZXNlbnRpdW0uXG4gICAgPC9kaXY+XG4gICAgPGJyIC8+PGJyIC8+XG4gICAgPGRpdj5cbiAgICAgIEhpLCBNeSBOYW1lIGlzIHt7bmFtZX19LCBXZWxjb21lIHRvIFBERiBnZW5lcmF0aW9uIDopXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtYnJlYWtcIj5cbiAgICAgIFRoaXMgY29udGVudCBpcyBpbiBhbm90aGVyIHBhZ2UgdGhhbmtzIHRvIHRoZSBwYWdlLWJyZWFrLWJlZm9yZSBjc3NcbiAgICAgIGF0dHJpYnV0ZS5cbiAgICA8L2Rpdj5cbiAgICA8YnIgLz48YnIgLz5cbiAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWZvbnRcIj5cbiAgICAgIFRoaXMgY29udGVudCBoYXMgYSBjdXN0b20gZm9udCBsb2FkZWQgdGhhbmtzIHRvIHRoZSBnb29nbGUgZm9udHMgQ0ROLlxuICAgIDwvZGl2PlxuICAgIDxiciAvPjxiciAvPlxuICAgIDxpbWdcbiAgICAgIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDB4NTAwLnBuZz90ZXh0PVBsYWNlaG9sZGVyK0ltYWdlXCJcbiAgICAgIGFsdD1cIlBsYWNlaG9sZGVyIGltYWdlXCJcbiAgICAvPlxuICA8L2JvZHk+XG48L2h0bWw+XG5gO1xuXG5leHBvcnQgY29uc3QgZ2V0VGVtcGxhdGU6IGFueSA9IChjb250ZXh0OiBhbnkpID0+IHtcbiAgcmV0dXJuIGhhbmRsZWJhcnMuY29tcGlsZShodG1sKShjb250ZXh0KTtcbn07XG4iXX0=