export class ErrorHandler extends Error {
    statusCode: number;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
  
      // Ensure the error stack traces point to where the error occurred
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
export  const errorMiddleware = (
    err: ErrorHandler,
    req: any,
    res: any,
    next: any
  ) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
  
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  };
  
