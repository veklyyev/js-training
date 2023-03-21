const axios = require('axios');
const Ajv = require('ajv');
const ajv = new Ajv();
const schema = require('./userSchema.json');


describe("my react component", () => {
    test("is working as expected", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(response.status).toBe(200);
        const isValid = ajv.validate(schema, response.data);
        if (!isValid) {
            console.log('API response does not match the JSON schema.');
            console.log(ajv.errors);
        } else {
            console.log('API response matches the JSON schema.');
        }
        const { userId, title, completed } = response.data;
        expect(title).toBe("delectus aut autem");
    });
});
