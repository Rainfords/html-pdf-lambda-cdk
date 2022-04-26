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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const chromium = __importStar(require("chrome-aws-lambda"));
class Helper {
}
exports.Helper = Helper;
_a = Helper;
Helper.getPDFBuffer = async (html, options) => {
    let browser = null;
    try {
        const executablePath = process.env.IS_OFFLINE
            ? undefined
            : await chromium.executablePath;
        browser = await chromium.puppeteer.launch({
            args: chromium.args,
            executablePath,
        });
        const page = await browser.newPage();
        const loaded = page.waitForNavigation({
            waitUntil: 'load',
        });
        await page.setContent(html);
        await loaded;
        return await page.pdf(options);
    }
    catch (error) {
        return error;
    }
    finally {
        if (browser !== null) {
            await browser.close();
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDREQUE4QztBQUk5QyxNQUFhLE1BQU07O0FBQW5CLHdCQTZCQzs7QUE1QlEsbUJBQVksR0FBaUIsS0FBSyxFQUFFLElBQVksRUFBRSxPQUFZLEVBQUUsRUFBRTtJQUN2RSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkIsSUFBSTtRQUNGLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtZQUMzQyxDQUFDLENBQUMsU0FBUztZQUNYLENBQUMsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFDbEMsT0FBTyxHQUFHLE1BQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDeEMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ25CLGNBQWM7U0FDZixDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDcEMsU0FBUyxFQUFFLE1BQU07U0FDbEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLE1BQU0sTUFBTSxDQUFDO1FBRWIsT0FBTyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDaEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7WUFBUztRQUNSLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNwQixNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN2QjtLQUNGO0FBQ0gsQ0FBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWlnbm9yZVxuaW1wb3J0ICogYXMgY2hyb21pdW0gZnJvbSAnY2hyb21lLWF3cy1sYW1iZGEnO1xuXG5pbXBvcnQgeyBHZXRQREZCdWZmZXIgfSBmcm9tICcuL3R5cGVzL0hlbHBlclR5cGVzJztcblxuZXhwb3J0IGNsYXNzIEhlbHBlciB7XG4gIHN0YXRpYyBnZXRQREZCdWZmZXI6IEdldFBERkJ1ZmZlciA9IGFzeW5jIChodG1sOiBzdHJpbmcsIG9wdGlvbnM6IGFueSkgPT4ge1xuICAgIGxldCBicm93c2VyID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhlY3V0YWJsZVBhdGggPSBwcm9jZXNzLmVudi5JU19PRkZMSU5FXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogYXdhaXQgY2hyb21pdW0uZXhlY3V0YWJsZVBhdGg7XG4gICAgICBicm93c2VyID0gYXdhaXQgY2hyb21pdW0ucHVwcGV0ZWVyLmxhdW5jaCh7XG4gICAgICAgIGFyZ3M6IGNocm9taXVtLmFyZ3MsXG4gICAgICAgIGV4ZWN1dGFibGVQYXRoLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBicm93c2VyLm5ld1BhZ2UoKTtcbiAgICAgIGNvbnN0IGxvYWRlZCA9IHBhZ2Uud2FpdEZvck5hdmlnYXRpb24oe1xuICAgICAgICB3YWl0VW50aWw6ICdsb2FkJyxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBwYWdlLnNldENvbnRlbnQoaHRtbCk7XG4gICAgICBhd2FpdCBsb2FkZWQ7XG5cbiAgICAgIHJldHVybiBhd2FpdCBwYWdlLnBkZihvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoYnJvd3NlciAhPT0gbnVsbCkge1xuICAgICAgICBhd2FpdCBicm93c2VyLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19