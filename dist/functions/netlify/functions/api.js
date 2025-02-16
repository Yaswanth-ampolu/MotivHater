import express from 'express';
import serverless from 'serverless-http';
import { registerRoutes } from '../../server/routes';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Register your routes
registerRoutes(app).then(server => {
    // Server is created but we don't need to listen since serverless-http will handle that
    console.log('Routes registered successfully');
}).catch(error => {
    console.error('Failed to register routes:', error);
});
// Export the handler
export const handler = async (event, context) => {
    const handler = serverless(app);
    const result = await handler(event, context);
    return {
        ...result,
        statusCode: result.statusCode || 200
    };
};
