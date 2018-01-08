import {App, Paper, Researcher, SnippetPreview} from "yoastseo"
import {isUndefined} from "util"

export default class SEOChecker {
  constructor() {
    this.body = document.querySelector("body")

    this.init()
  }

  init() {
    this.createWrapperElement()
    this.createOutputElement()
    this.createSnippetElement()
    this.getFocusKeyword()
    this.getContent()
    this.createSnippetPreview()
    this.runApp()
    this.bindEvents()
    this.refreshApp()
  }

  createWrapperElement() {
    const wrapperElement = document.createElement("div")
    wrapperElement.setAttribute("id", "seo-wrapper")
    this.body.prepend(wrapperElement, this.body.firstElementChild)
    return (this.wrapperElement = wrapperElement)
  }

  createOutputElement() {
    const outputElement = document.createElement("div")
    outputElement.setAttribute("id", "output")
    this.wrapperElement.appendChild(outputElement)
    return (this.outputElement = outputElement)
  }

  createSnippetElement() {
    const snippetElement = document.createElement("div")
    this.wrapperElement.appendChild(snippetElement)
    return (this.snippetElement = snippetElement)
  }

  getFocusKeyword() {
    const keywordsElement = (this.keywordsElement = document.querySelector(
      "meta[name=keywords]"
    ))
    let focusKeyword = ""

    if (keywordsElement !== null && !isUndefined(keywordsElement)) {
      focusKeyword = keywords.getAttribute("description")
    }

    return (this.focusKeyword = focusKeyword)
  }

  getContent() {
    let contentElement
    let content = ""

    if (this.body.classList.contains("docs")) {
      contentElement = document.querySelector(".docs-content .container")
      content = contentElement.innerHTML
    } else if (this.body.classList.contains("blog")) {
      contentElement = document.querySelector(".post--content")
      content = contentElement.innerHTML
    } else {
      contentElement = document.querySelector("body")
      content = contentElement.innerHTML
    }

    console.log(contentElement)
    console.log(content)

    this.contentElement = contentElement
    return (this.content = content)
  }

  createSnippetPreview() {
    return (this.snippetPreview = new SnippetPreview({
      targetElement: this.snippetElement
    }))
  }

  runApp() {
    const app = (this.app = new App({
      snippetPreview: this.snippetPreview,
      targets: {
        output: "output",
        contentOutput: "output"
      },
      callbacks: {
        getData: () => {
          return {
            keyword: this.focusKeyword,
            text: this.content
          }
        }
      }
    }))
  }

  bindEvents() {
    if (this.keywordsElement !== null && !isUndefined(this.keywordsElement))
      this.keywordsElement.addEventListener("change", this.refreshApp())
    if (this.contentElement !== null && !isUndefined(this.contentElement))
      this.contentElement.addEventListener("change", this.refreshApp())
  }

  refeshApp() {
    this.app.refresh.bind(this.app)
    this.logData()
  }

  logData() {
    const old = console.log
    const snippet = this.snippetElement.innerHTML
    const output = this.outputElement.innerHTML
    console.log = () => {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "object") {
          logger.innerHTML +=
            (JSON && JSON.stringify
              ? JSON.stringify(arguments[i], undefined, 2)
              : arguments[i]) + "<br />"
        } else {
          logger.innerHTML += arguments[i] + "<br />"
        }
      }
    }

    console.log(snippet)
    console.log(output)

    console.log = old
  }
}
