install:
	npm install
brain-games:
	node bin/brain-games.js
lint:
	npx eslint .
publishing:
	npm publish --dry-run
	