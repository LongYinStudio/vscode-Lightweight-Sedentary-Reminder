"use strict";
import * as vscode from "vscode";

// 封装弹框
export class Toast {
  public constructor() {}
  public static show(message: string) {
    return vscode.window.showInformationMessage(message, {
      // 这里第二个参数是可选的按钮选项
      modal: true, // 设为 true 使其变为模态框
    });
  }
}
