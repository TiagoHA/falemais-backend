<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

this project created with [Nest framework](https://github.com/nestjs/nest).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API
A api contém três endpoints:

### /rate
endpoint para realizar o cadastro das taxas
```
{
	"prefixOrigin": "011",
	"prefixDestiny": "016",
	"price": "1.90"
}
```

### /phone-plans
endpoint para realizar o cadastro dos planos
```
{
	"name": "FaleMais 30",
	"minutes": 20,
	"initialCost": "0.0"
}
```

### /price-report
endpoint para realizar o cadastro de consulta
```
{
	"minutesSpent": 30,
	"rate": {
		"id": "e94f80c8-3604-4fb1-aea2-e9b08de79348"
	},
	"phonePlan": {
		"id": "bd0a8485-24ac-478b-a51a-15219aa02e2a"
	}
}
```


## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Stay in touch

Author - [Tiago Almeida](https://github.com/tiagoha)

## License

Project is [MIT licensed](LICENSE).
