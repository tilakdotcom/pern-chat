import { Request, Response, NextFunction } from "express";

/**
 * A wrapper for async route handlers to catch errors and pass them to Express's error handler.
 * @param requestHandler The async function to wrap
 * @returns A request handler
 */
const asyncHandler = (
  requestHandler: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Ensure the async function is executed and handle errors
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

export { asyncHandler };
