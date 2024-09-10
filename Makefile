.PHONY: infra/develop
infra/develop:
	docker compose -f docker-compose.infra.yaml up

.PHONY: reset
prisma/reset:
	rm -fr prisma/migrations
	npx prisma migrate dev
	make prisma/generate

.PHONY: client/generate
client/generate:
	npx prisma generate

.PHONY: db/seed
db/seed:
	npx prisma db seed

.PHONY: db/push
db/push:
	npx prisma db push
