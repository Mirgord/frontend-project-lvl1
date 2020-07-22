install:
	npm install
brain-games:
	node bin/brain-games.js
even-games:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
brain-prime:
    node bin/brain-progression.js
lint:
	npx eslint .
publishing:
	npm publish --dry-run
	