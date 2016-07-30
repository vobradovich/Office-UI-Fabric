var CommandButtonExampleModel = {
  "props": { 
    "label": "Command",
    "icon": "circleFill",
    "tag": "button",
    "iconColor": "themePrimary"
  },
  "propsDropdown": {
    "label": "New",
    "icon": "circleFill",
    "tag": "button",
    "dropdownIcon": "chevronDown",
    "iconColor": "themePrimary",
    "dropdown": {
      "component": "ContextualMenu",
      "props":  {
        "state": "is-opened",
        "modifier": "hasIcons",
        "items": [
          {
            "title": "Folder",
            "state": "",
            "icon": "folder"
          },
          {
            "modifier": "divider",
            "title": ""
          },
          {
            "title": "Plain Text Document",
            "icon": "document"
          },
          {
            "title": "A Dog",
            "icon": "dogAlt"
          },
          {
            "title": "The Sun",
            "state": "",
            "icon": "sun"
          },
          {
            "title": "Money",
            "icon": "money"
          }
        ]
      }
    }
  },
  "propsSplit": {
    "label": "Reply",
    "icon": "circleFill",
    "splitIcon": "chevronDown",
    "iconColor": "themePrimary",
    "tag": "button",
    "dropdown": {
      "component": "ContextualMenu",
      "props":  {
        "state": "is-opened",
        "items": [
          {
            "title": "Reply",
            "state": ""
          },
          {
            "title": "Reply all",
            "state": ""
          },
          {
            "title": "Forward",
            "state": "is-selected"
          },
          {
            "title": "Flag",
            "state": ""
          },
          {
            "title": "Delete",
            "state": "is-disabled"
          }
        ]
      }
    }
  },
  "propsNoLabel": {
    "icon": "circleFill",
    "modifier": "noLabel",
    "tag": "button",
    "iconColor": "themePrimary"
  },
  "propsNoLabelSplit": {
    "icon": "circleFill",
    "modifier": "noLabel",
    "tag": "button",
    "splitIcon": "chevronDown",
    "iconColor": "themePrimary",
    "dropdown": {
      "component": "ContextualMenu",
      "props":  {
        "state": "",
        "items": [
          {
            "title": "Reply",
            "state": ""
          },
          {
            "title": "Reply all",
            "state": ""
          },
          {
            "title": "Forward",
            "state": "is-selected"
          },
          {
            "title": "Flag",
            "state": ""
          },
          {
            "title": "Delete",
            "state": "is-disabled"
          }
        ]
      }
    }
  },
  "propsInline": {
    "label": "Command",
    "icon": "check",
    "tag": "button",
    "modifier": "inline",
    "iconColor": "green"
  },
  "propsDisabled": {
    "label": "Command",
    "icon": "circleFill",
    "tag": "button",
    "iconColor": "themePrimary",
    "disabled": true
  },
  "propsActionButton": {
    "icon": "circleFill",
    "modifier": "actionButton",
    "tag": "button",
    "iconColor": "themePrimary"
  },
  "propsTextOnly": {
    "modifier": "TextOnly",
    "label": "Command",
    "tag": "button"
  },
  "propsPivot": {
    "label": "New",
    "icon": "circleFill",
    "tag": "button",
    "dropdownIcon": "chevronDown",
    "iconColor": "themePrimary",
    "state": "is-active",
    "modifier": "pivot"
  }
}

module.exports = CommandButtonExampleModel;