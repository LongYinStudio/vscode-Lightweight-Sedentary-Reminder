"use strict";
import * as vscode from "vscode";

// 封装得到配置项
export class Utility {
  public constructor() {}
  public static getConfiguration(): vscode.WorkspaceConfiguration {
    return vscode.workspace.getConfiguration("reminder");
  }
}
