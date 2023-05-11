import { NextApiHandler } from "next";
import puppeteer from "puppeteer";

const getPdfBuffer = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  return page.goto(url, { waitUntil: "networkidle2" }).then(async () => {
    const pdfBuffer = await page.pdf({
      format: "A4",
    });
    await page.close();
    return pdfBuffer;
  });
};

const Handler: NextApiHandler = async (req, res) => {
  const { id } = req.query;
  const url = `${process.env.HOME_URL}${id}/report`;
  const pdfBuffer = await getPdfBuffer(url);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Length", pdfBuffer.length);
  res.send(pdfBuffer);
};

export default Handler;
