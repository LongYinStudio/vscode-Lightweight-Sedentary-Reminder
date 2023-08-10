import * as vscode from "vscode";
import { Utility } from "./util";
import { Toast } from "./toast";

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
  let time = Utility.getConfiguration().interval || 30;
  let realTime = time * 60 * 1000;
  Toast.show(`开始工作，时间间隔为${time}min`);
  inactiveTimer = setInterval(() => {
    Toast.show(`已经工作${time}min了`);
  }, realTime);
};

const handleStop = () => {
  clearInterval(inactiveTimer);
};

export function deactivate() {
  clearInterval(inactiveTimer);
}
