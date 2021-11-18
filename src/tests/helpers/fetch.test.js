import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";

describe('Pruebas en el helper fetchWithoutToken', () => {

    let token = '';
    
    test('fetchWithoutToken debe dar una respuesta ', async () => {
        
        const resp = await fetchWithoutToken(
            'auth',
            {
                email: "test@gmail.com",
                password: "54321haloO"
            },
            'POST'
        );

        const body = await resp.json();
        token = body.token;

        expect(resp instanceof Response).toBe(true);
        expect(body.ok).toBe(true);

    });

    test('fetchWithToken debe dar una respuesta', async () => {

        localStorage.setItem('calendarAppToken',token);
        
        const resp = await fetchWithToken('auth/revalidate-token',{},'GET');
        const body = await resp.json();

        expect(resp instanceof Response).toBe(true);
        expect(body.ok).toBe(true);

    });

});