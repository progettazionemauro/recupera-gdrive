function loadMainForm() {
  const htmlServ=HtmlService.createTemplateFromFile("page");
  const html=htmlServ.evaluate();
  html.setWidth(850).setHeight(650);

  const ui=SpreadsheetApp.getUi(); 
  ui.showModalDialog(html, "Preleva i file da GDrive");
}

function createMenu_ () {

const ui=SpreadsheetApp.getUi();
const menu=ui.createMenu("Menu File");
menu.addItem("Apri il Form", "loadMainForm");
menu.addToUi();

}

function onOpen () {

createMenu_();
}
