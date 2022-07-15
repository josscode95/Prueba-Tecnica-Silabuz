import { response, request } from 'express';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const getDataScrapSilabuz = async(req = request, res = response) => {
  try {
    const data = [];
    const response = await fetch('https://slides.com/explore');
    const body = await response.text();
    const $ = cheerio.load(body);
    $('.sl-deck-thumbnail').map((i, el) => {
      const titles = $(el).find('.deck-details>.top>.title').text();
      const links = $(el).find('.deck-link').attr('href');
      data.push({titulo: titles, url: links})
    });
    res.json(data)
  } catch (err) {
    console.log(err);
  }
}

export default getDataScrapSilabuz;

