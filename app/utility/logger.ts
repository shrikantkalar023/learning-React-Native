import Bugsnag from "@bugsnag/expo";

type NotifiableError =
  | Error
  | { errorClass: string; errorMessage: string }
  | { name: string; message: string }
  | string;

// Type guard function to check if an object is a NotifiableError
const isNotifiableError = (error: unknown): error is NotifiableError =>
  error instanceof Error ||
  typeof error === "string" ||
  (error !== null &&
    typeof error === "object" &&
    (("errorClass" in error && "errorMessage" in error) ||
      ("name" in error && "message" in error)));

const logger = {
  log: (error: unknown) => {
    if (isNotifiableError(error)) {
      Bugsnag.notify(error);
    }
  },
  start: () => Bugsnag.start(),
};

export default logger;
