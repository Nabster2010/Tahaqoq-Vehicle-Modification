import { NextApiHandler } from "next";
import puppeteer from "puppeteer";

const Handler: NextApiHandler = async (req, res) => {
  const { id } = req.query;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = `${process.env.HOME_URL}${id}/report`;

  await page.goto(url);

  const pdfBuffer = await page.pdf({ format: "A4" });
  res.send(pdfBuffer);
  await browser.close();
};

export default Handler;
