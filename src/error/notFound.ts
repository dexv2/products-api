import { HttpError } from './http'

export class NotFound extends HttpError {
    constructor(public status: number, message: string) {
        super(404, message)
    }
}
