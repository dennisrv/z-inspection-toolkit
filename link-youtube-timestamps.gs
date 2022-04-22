// collection of links to meeting recordings, with
// an abbreviation to identify them
// identifier must consist of CAPITAL LETTERS and 
// NUMBERS ([A-Z0-9]+), otherwise the 'linkRegex'
// variable in the addLink function needs to be 
// adapted below
var youtubeLinks = {
  'ID1': "https://www.youtube.com/watch?v=<your_video_id>",
};

// searches through the complete document for text
// formatted as [IDENTIFIER,h:mm:ss] and replaces
// the text in the brackets with a link that redirects
// to the youtube link identified by IDENTIFIER at 
// timestamp h:mm:ss
function addLink() {
  const doc = DocumentApp.getActiveDocument();

  let body = DocumentApp.getActiveDocument().getBody();
  
  // regex to identifiy where to insert the link
  let linkRegex = "\\[[A-Z0-9]+,\\d:\\d{2}:\\d{2}\\]"
  
  let foundElement = body.editAsText().findText(linkRegex);
  
  while (foundElement != null) {
    let start = foundElement.getStartOffset();
    let end = foundElement.getEndOffsetInclusive();
    
    let url = getUrl(foundElement.getElement().asText().getText().substring(start, end+1));

    foundElement.getElement().asText().editAsText().setLinkUrl(start, end, url);
    foundElement = body.editAsText().findText(linkRegex, foundElement);
  }
}

// create working url from IDENTIFIER and timestamp (h:mm:ss)
// that points to the video at the timestamp
function getUrl(text) {
  let cleaned = text.replace("[", "").replace("]", "");
  let [reference, timestamp] = cleaned.split(",")
  let [timestamp_h, timestamp_m, timestamp_s]  = timestamp.split(":");

  return youtubeLinks[reference] + "&t=" + timestamp_h + "h" + timestamp_m + "m" + timestamp_s + "s";
}

// create menu item in google docs named 'Custom Scripts'
// with the entry 'Add Link' which executes the addLink 
// function from above to add links at the desired positions
function menu() {
  DocumentApp.getUi().createMenu('Custom Scripts')
  .addItem('Add Link', 'addLink')
  .addToUi();  
}

function onOpen() {
  menu();
}

function onInstall() {
  onOpen();
}