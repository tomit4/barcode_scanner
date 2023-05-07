const inputImage = document.getElementById("inputImage");
const result = document.getElementById("result");

inputImage.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return console.error("Failed to retrieve file");

  const image = await readImageFile(file);
  const decoded = await decodeBarcode(image);
  if (decoded) {
    const jsonData = csvToJson(decoded);
    result.textContent = JSON.stringify(jsonData, null, 2);
  } else {
    result.textContent = "No barcode detected";
  }
});

const readImageFile = async (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const image = new Image();
      image.src = event.target.result;
      image.onload = () => resolve(image);
    };
    reader.readAsDataURL(file);
  });
};

const decodeBarcode = async (image) => {
  try {
    const codeReader = new ZXingBrowser.BrowserPDF417Reader();
    const result = await codeReader.decodeFromImageElement(image);
    return result.text;
  } catch (error) {
    console.error("Failed to decode barcode", error);
    return null;
  }
};

const csvToJson = (csvData) => {
  const rows = csvData.split("\n");
  const headers = rows.shift().split(",");

  return rows.map((row) => {
    const rowData = row.split(",");
    return headers.reduce((jsonObj, header, index) => {
      jsonObj[header] = rowData[index];
      return jsonObj;
    }, {});
  });
};
