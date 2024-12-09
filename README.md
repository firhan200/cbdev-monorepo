step to run:
1. `docker compose up`

it'll run the `validator`, `imm` and `common` app in the container.

changes on `common` will rebuild `validator` and `imm`
changes on `validator` or `imm` will only build their own service
