import { HttpStatus } from "../enums/http-status.enum";

export class ManagerError extends Error {
    constructor(
        public message: string,
        public code: number,
        public status: keyof typeof HttpStatus,
    ) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }

    //! 100
    static continue(message: string) {
        return new ManagerError(message, 100, 'CONTINUE');
    }

    static switchingProtocols(message: string) {
        return new ManagerError(message, 101, 'SWITCHING_PROTOCOLS');
    }

    static processing(message: string) {
        return new ManagerError(message, 102, 'PROCESSING');
    }

    static earlyhints(message: string) {
        return new ManagerError(message, 103, 'EARLYHINTS');
    }

    //! 200
    static ok(message: string) {
        return new ManagerError(message, 200, 'OK');
    }

    static created(message: string) {
        return new ManagerError(message, 201, 'CREATED');
    }

    static accepted(message: string) {
        return new ManagerError(message, 202, 'ACCEPTED');
    }

    static nonAuthoritativeInformation(message: string) {
        return new ManagerError(message, 203, 'NON_AUTHORITATIVE_INFORMATION');
    }

    static noContent(message: string) {
        return new ManagerError(message, 204, 'NO_CONTENT');
    }

    static resetContent(message: string) {
        return new ManagerError(message, 205, 'RESET_CONTENT');
    }

    static partialContent(message: string) {
        return new ManagerError(message, 206, 'PARTIAL_CONTENT');
    }

    //! 300
    static ambiguous(message: string) {
        return new ManagerError(message, 300, 'AMBIGUOUS');
    }

    static movedPermanently(message: string) {
        return new ManagerError(message, 301, 'MOVED_PERMANENTLY');
    }

    static found(message: string) {
        return new ManagerError(message, 302, 'FOUND');
    }

    static seeOther(message: string) {
        return new ManagerError(message, 303, 'SEE_OTHER');
    }

    static notModified(message: string) {
        return new ManagerError(message, 304, 'NOT_MODIFIED');
    }

    static temporaryRedirect(message: string) {
        return new ManagerError(message, 307, 'TEMPORARY_REDIRECT');
    }

    static permanentRedirect(message: string) {
        return new ManagerError(message, 308, 'PERMANENT_REDIRECT');
    }

    //! 400
    static badRequest(message: string) {
        return new ManagerError(message, 400, 'BAD_REQUEST');
    }

    static unauthorized(message: string) {
        return new ManagerError(message, 401, 'UNAUTHORIZED');
    }

    static paymentRequired(message: string) {
        return new ManagerError(message, 402, 'PAYMENT_REQUIRED');
    }

    static forbidden(message: string) {
        return new ManagerError(message, 403, 'FORBIDDEN');
    }

    static notFound(message: string) {
        return new ManagerError(message, 404, 'NOT_FOUND');
    }

    static methodNotAllowed(message: string) {
        return new ManagerError(message, 405, 'METHOD_NOT_ALLOWED');
    }

    static notAcceptable(message: string) {
        return new ManagerError(message, 406, 'NOT_ACCEPTABLE');
    }

    static proxyAuthenticationRequired(message: string) {
        return new ManagerError(message, 407, 'PROXY_AUTHENTICATION_REQUIRED');
    }

    static requestTimeout(message: string) {
        return new ManagerError(message, 408, 'REQUEST_TIMEOUT');
    }

    static conflict(message: string) {
        return new ManagerError(message, 409, 'CONFLICT');
    }

    static gone(message: string) {
        return new ManagerError(message, 410, 'GONE');
    }

    static lengthRequired(message: string) {
        return new ManagerError(message, 411, 'LENGTH_REQUIRED');
    }

    static preconditionFailed(message: string) {
        return new ManagerError(message, 412, 'PRECONDITION_FAILED');
    }

    static payloadTooLarge(message: string) {
        return new ManagerError(message, 413, 'PAYLOAD_TOO_LARGE');
    }

    static uriTooLong(message: string) {
        return new ManagerError(message, 414, 'URI_TOO_LONG');
    }

    static unsupportedMediaType(message: string) {
        return new ManagerError(message, 415, 'UNSUPPORTED_MEDIA_TYPE');
    }

    static requestedRangeNotSatisfiable(message: string) {
        return new ManagerError(message, 416, 'REQUESTED_RANGE_NOT_SATISFIABLE');
    }

    static expectationFailed(message: string) {
        return new ManagerError(message, 417, 'EXPECTATION_FAILED');
    }

    static iAmATeapot(message: string) {
        return new ManagerError(message, 418, 'I_AM_A_TEAPOT');
    }

    static misdirected(message: string) {
        return new ManagerError(message, 421, 'MISDIRECTED');
    }

    static unprocessableEntity(message: string) {
        return new ManagerError(message, 422, 'UNPROCESSABLE_ENTITY');
    }

    static failedDependency(message: string) {
        return new ManagerError(message, 424, 'FAILED_DEPENDENCY');
    }

    static preconditionRequired(message: string) {
        return new ManagerError(message, 428, 'PRECONDITION_REQUIRED');
    }

    static tooManyRequests(message: string) {
        return new ManagerError(message, 429, 'TOO_MANY_REQUESTS');
    }

    //! 500
    static internalServerError(message: string = 'Internal Server Error') {
        return new ManagerError(message, 500, 'INTERNAL_SERVER_ERROR');
    }

    static notImplemented(message: string) {
        return new ManagerError(message, 501, 'NOT_IMPLEMENTED');
    }

    static badGateway(message: string) {
        return new ManagerError(message, 502, 'BAD_GATEWAY');
    }

    static serviceUnavailable(message: string) {
        return new ManagerError(message, 503, 'SERVICE_UNAVAILABLE');
    }

    static gatewayTimeout(message: string) {
        return new ManagerError(message, 504, 'GATEWAY_TIMEOUT');
    }

    static httpVersionNotSupported(message: string) {
        return new ManagerError(message, 505, 'HTTP_VERSION_NOT_SUPPORTED');
    }
}