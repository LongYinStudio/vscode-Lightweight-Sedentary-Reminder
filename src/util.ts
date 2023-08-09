"use strict";
import * as vscode from "vscode";

export class Utility {
  public constructor() {}
  public static getConfiguration(): vscode.WorkspaceConfiguration {
    return vscode.workspace.getConfiguration("reminder");
  }
}