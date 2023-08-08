import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "lightweight-sedentary-reminder" is now active!'
  );
  let disposable = vscode.commands.registerCommand(
    "lightweight-sedentary-reminder.toast",
    () => {
      vscode.window.showInformationMessage("提示框");
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
