const request = require('supertest');
const app = require('../app');

describe('GET /quote', () => {
  it('should return a JSON object with a quote property', async () => {
    const res = await request(app).get('/quote');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('quote');
    expect(typeof res.body.quote).toBe('string');
  });

  it('should NOT return an empty quote', async () => {
    const res = await request(app).get('/quote');
    expect(res.body.quote.length).toBeGreaterThan(0);
  });
});
