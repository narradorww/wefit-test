import axios from "axios";
import API from "./api";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('should return a product list', async () => {
    const mockedProducts = [
        {
            id: 1,
            name: 'Product 1',
            price: 10.00
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20.00
        }
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: mockedProducts });

    const response = await API.get('/products');

    expect(response.data).toEqual(mockedProducts);
}
)



