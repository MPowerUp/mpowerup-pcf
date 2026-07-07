# Custom Dialog Launcher

A PCF control that lets you launch Dataverse dialogs — Custom Pages, Entity Records, Entity Lists, or Web Resources — directly from Canvas Apps and Model-driven Apps, driven entirely by Power Fx.

## Why

Canvas Apps don't natively expose a clean way to open a Custom Page, an entity record form, an entity list, or a web resource as a dialog. This control wraps that capability behind a simple set of bound properties, so you can trigger any of the four dialog types just by setting variables in `OnSelect`.

## Supported apps
- ✅ Canvas Apps
- ✅ Model-driven Apps

## How it works

Bind the control's properties, then flip `Launch Trigger` to `true` to open the dialog. Reset it to `false` afterwards (e.g. in `OnSelect` of the same button, or via a follow-up action) so the next trigger is detected as a change.

### Example (Canvas App, OnSelect of a button)

```powerfx
Set(varLaunchOptions,{pageType:"custom",name:"mpu_test_380d1",entityName:"",recordId:"",title:"Custom Page Opened"});
Set(varLaunchDialog,true);
```

Bind `varLaunchDialog` to **Launch Trigger**, and unpack `varLaunchOptions` fields into the corresponding properties below.

## Properties

| Property | Type | Description |
|---|---|---|
| **PageType** | Enum (Custom Page / Entity Record / Entity List / Web Resource) | Which kind of dialog to launch. |
| **Entity Name** | Text | Logical name of the entity, used for Entity Record and Entity List dialogs. |
| **Custom Page Name** | Text | Logical/unique name of the Custom Page, used when PageType is Custom Page. |
| **Web Resource Name** | Text | Name of the web resource, used when PageType is Web Resource. |
| **Title** | Text | Title shown on the dialog. |
| **Entity Id** | Text | Optional. Id used when opening a specific record context. |
| **Record Id** | Text | Optional. Id of the record to open (Entity Record dialogs). |
| **Launch Trigger** | Boolean | Set to `true` to open the dialog. Control watches for the transition to detect a new trigger. |

## Installation

1. Download the managed solution from the [latest release](https://github.com/praveen0mpowerup/mpowerup-pcf-controls/releases/latest).
2. Import it into your Dataverse environment (Solutions → Import solution).
3. Add **Custom Dialog Launcher** to your Canvas App or Model-driven form from the components picker.
