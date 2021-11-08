const express = require("express");
const {google} = require("googleapis"); 
const { identitytoolkit } = require("googleapis/build/src/apis/identitytoolkit");

const app = express ();
app.use(express.json());

app.listen(3000, () => console.log("Server is running on port 3000"));

const authentication = async() => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
  });
  const client = await auth.getClient();
  const sheets = google.sheets({
    version: 'v4',
    auth: client
  });
  return { sheets };
};
const id  = '1u-uUoCVAlt3yPf6iv9WOnYSAr8eUB0JY_vjPlUkYkRE';
app.get('/', async(req, res) =>{
  try {
    const { sheets } = await authentication();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: id,
      range: 'Sheet1',
    }); 
    res.send(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

app.post('/', async(req, res) => {
  try {
    const { newName, newValue } = req.body;
    const { sheets } = await authentication();

    const writereq = await sheets.spreadsheets.values.append({
      spreadsheetId: id,
      range: "Sheet1",
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[newName, newValue]],
      }
    });
    if (writereq.status === 200) {
      return res.json({msg : 'Spreadsheet updated successfully!'});
    }
    return res.json({msg : 'Something went wrong while updating the spreadsheet.'});
  } catch(e) {
    console.log(e);
    res.status(500).send();
  }
});