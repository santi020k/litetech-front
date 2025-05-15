import { ConfigOption, eslintConfig, OptionalOption } from '@santi020k/eslint-config-santi020k'

const config = [
  ...eslintConfig({
    config: [ConfigOption.Ts, ConfigOption.Next],
    optionals: [OptionalOption.Cspell, OptionalOption.Tailwind, OptionalOption.Vitest, OptionalOption.Markdown]
  })
]

export default config
