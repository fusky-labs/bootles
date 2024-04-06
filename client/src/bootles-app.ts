import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("bootles-app")
export class BootlesApp extends LitElement {
  render() {
    return html`
      <div class="overflow-x-hidden">
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bootles-app": BootlesApp
  }
}
