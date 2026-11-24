import express, { Router } from "express";

interface ServerOptions {
    port: number,
    router: Router,
}

export class AppServer {
    private readonly app = express();
    private port: number;
    private router: Router;

    constructor(options: ServerOptions) {
        const { port, router } = options;
        this.router = router;
        this.port = port;
    }

    async start() {
        //* Middlewares

        //* Routes
        this.app.use("/", this.router);

        //* Listen
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }

}