import { StatusCodes } from "http-status-codes";

export default class HttpError extends Error {
  public statusCode!: StatusCodes;

  constructor(message: string, status: StatusCodes = 500) {
    super(message);
    this.statusCode = status;
  }
}
