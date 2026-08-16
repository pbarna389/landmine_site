import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

import js from '@eslint/js'
import globals from 'globals'

import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'
import security from 'eslint-plugin-security'

import eslintJs from '@eslint/js'

export default defineConfig([
	...nextVitals,
	...nextTs,
	globalIgnores([
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
		'src/generated/**',
		'eslint.config.mjs'
	]),
	js.configs.recommended,
	eslintJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true
			},
			ecmaVersion: 2022,
			globals: globals.browser
		},
		plugins: {
			'simple-import-sort': simpleImportSort,
			reactHooks,
			unicorn,
			sonarjs,
			security
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-hooks/exhaustive-deps': 'warn',
			'react-hooks/rules-of-hooks': 'error',
			// ✅ TypeScript strictness
			'@typescript-eslint/no-throw-literal': 'off', // Let TS handle
			'@typescript-eslint/adjacent-overload-signatures': 'error',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true
				}
			],
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/array-type': 'error',
			'@typescript-eslint/await-thenable': 'off',
			'@typescript-eslint/method-signature-style': 'error',
			'@typescript-eslint/dot-notation': 'error',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'@typescript-eslint/prefer-find': 'warn',
			'@typescript-eslint/prefer-function-type': 'error',
			'@typescript-eslint/prefer-literal-enum-member': 'error',
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/prefer-string-starts-ends-with': 'error',
			'@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
			'@typescript-eslint/member-ordering': [
				'warn',
				{
					default: {
						memberTypes: ['field', 'signature', 'constructor', 'method'],
						order: 'alphabetically-case-insensitive',
						optionalityOrder: 'required-first'
					}
				}
			],
			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksVoidReturn: { attributes: false }
				}
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					disallowTypeAnnotations: false,
					fixStyle: 'separate-type-imports'
				}
			],

			// ✅ General JS best practices
			'no-shadow': 'off', // handled by TS
			'object-shorthand': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'warn',
			'prefer-rest-params': 'error',
			'prefer-destructuring': ['error', { array: false, object: true }],
			'no-var': 'error',
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-console': 'warn',
			'no-useless-return': 'error',
			'no-nested-ternary': 'error',
			'no-else-return': 'error',
			'array-callback-return': ['error', { allowImplicit: true, checkForEach: false }],
			'default-case': 'error',
			'default-case-last': 'error',
			'default-param-last': 'error',

			// ✅ Import sorting
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^import\\s+type\\s+.*'],
						['^next/*'],
						['^react', '^react-dom', '^react-router', '^react-router-dom', '^react-dom/client'],
						[
							'^@reduxjs',
							'^@tanstack',
							'^styled-components',
							'^nextui',
							'^react-.*',
							'^swiper',
							'^formik',
							'^react-hook-form',
							'@hookform/*',
							'^@react-oauth',
							'^@react-icons'
						],
						['^@*'],
						[
							'^@query',
							'^@services',
							'^@store',
							'^@slices',
							'^@context',
							'^@reducers',
							'^@layout',
							'^@pages',
							'^@components',
							'^@hooks',
							'^@helpers',
							'^@utils',
							'^@constants',
							'^@types'
						],
						[
							'^./query',
							'^./services',
							'^./store',
							'^./slices',
							'^./context',
							'^./reducers',
							'^./components',
							'^./pages',
							'^./hooks',
							'^./helpers',
							'^./utils',
							'^./constants',
							'^./types'
						],
						['^@/actions'],
						['^\\./', '^\\../'],
						['^@storybook', '^@assets', '^./assets/*', '^.*\\.svg$'],
						['^prisma*'],
						['^@/db'],
						['^.*\\.(ts|tsx)$'],
						['^.*\\.(css|scss)$']
					]
				}
			],
			'simple-import-sort/exports': 'error',

			'padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: 'directive', next: 'import' }
			],

			// ✅ Unicorn rules
			'unicorn/prefer-ternary': 'error',
			'unicorn/prefer-switch': 'warn',
			'unicorn/consistent-function-scoping': 'error',
			'unicorn/no-useless-undefined': 'error',
			'unicorn/prefer-modern-math-apis': 'error',
			'unicorn/no-array-reduce': 'off',

			// ✅ SonarJS (cognitive complexity, duplications)
			'sonarjs/no-duplicate-string': 'warn',
			'sonarjs/no-identical-functions': 'error',
			'sonarjs/cognitive-complexity': ['warn', 20],

			// ✅ Security
			'security/detect-object-injection': 'off',
			'security/detect-non-literal-fs-filename': 'error'
		}
	}
])
