import * as vscode from "vscode";

let inactiveTimer: NodeJS.Timeout | undefined;

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.startWork", () => {
      handleStart();
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.stopWork", () => {
      handleStop();
    })
  );
}

const handleStart = () => {
  let time = 30;
  let realTime = time * 60 * 1000;
  inactiveTimer = setInterval(() => {
    vscode.window.showInformationMessage("已经工作30min了");
  }, realTime);
};

const handleStop = () => {
  clearInterval(inactiveTimer);
};

export function deactivate() {}
