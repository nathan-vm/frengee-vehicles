import { Request, Response, NextFunction } from "express";
import HttpError from "../../../error/httpError";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

const errorHandler = (
  err: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  if (err instanceof HttpError) {
    return response.status(err.statusCode).json({
      statusCode: err.statusCode,
      error: getReasonPhrase(err.statusCode),
      message: err.message,
    });
  }

  return response.status(500).json({
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
  });
};

export default errorHandler;
