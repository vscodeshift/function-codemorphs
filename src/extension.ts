import * as vscode from 'vscode'
import applyTransform from '@vscodeshift/apply-jscodeshift'

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'extension.convertArrowFunctionBodyToBlockStatement',
      async () =>
        await applyTransform(
          require('function-codemorphs/convertArrowFunctionBodyToBlockStatement')
        )
    )
  )
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'extension.convertArrowFunctionBodyToExpression',
      async () =>
        await applyTransform(
          require('function-codemorphs/convertArrowFunctionBodyToExpression')
        )
    )
  )
}

export function deactivate(): void {} // eslint-disable-line @typescript-eslint/no-empty-function
