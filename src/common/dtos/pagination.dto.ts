export class PaginationDto {
    constructor(
        public page: number,
        public limit: number,
    ){}

    static validate(data: {[key: string]: any}): [string | undefined, PaginationDto | undefined]{
        const { page = 1, limit = 10 } = data

        

        return [undefined, new PaginationDto(page, limit)];
    }
}