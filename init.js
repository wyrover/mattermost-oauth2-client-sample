const { execSync } = require('child_process')
const fs = require('fs')
const { pathToFileURL } = require('url')

function execmd (cmd) {
  const out = execSync(cmd)
  console.log(`${out}`)
}

const babelrc = `{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
            "node": "current"
        }
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
`

fs.writeFileSync('.babelrc', babelrc)

const editorconfig = `# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.js]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true


[package.json]
indent_size = 2
`

fs.writeFileSync('.editorconfig', editorconfig)

const prettierrc = `{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false
}
`

fs.writeFileSync('.prettierrc', prettierrc)

const eslintrc = `module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: ['html'],
  rules: {
    camelcase: 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
`

fs.writeFileSync('.eslintrc.js', eslintrc)

const eslintignore = `bin
public
node_modules
build
config
*-compiled.js
*/*-compiled.js
*/*/*-compiled.js
*/*/*/*-compiled.js
`

fs.writeFileSync('.eslintignore', eslintignore)

if (!fs.existsSync('.vscode')) {
  fs.mkdirSync('.vscode')
}

const vscode_launch_json = `{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
      {
          "type": "node",
          "request": "launch",
          "name": "Launch Program",
          "skipFiles": [
              "<node_internals>/**"
          ],
          "program": "\${workspaceFolder}\\\\src\\\\test-stream.js",
          "outFiles": [
              "\${workspaceFolder}/**/*.js"
          ],
          "runtimeExecutable": "E:\\\\node-v12.13.0-win-x86\\\\node.exe"
      }
  ]
}`

fs.writeFileSync('.vscode/launch.json', vscode_launch_json)

const vscode_settings_json = `{
  // "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  }
}`

fs.writeFileSync('.vscode/settings.json', vscode_settings_json)


const gitignore = `/node_modules
`

fs.writeFileSync('.gitignore', gitignore)



