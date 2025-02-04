interface Mango  {
    name: string;
    age: number;
    email: string;
    address?: {
        city: string;
        country: string;
    }
};

const poly: Mango = {
    name: 'Mango',
    age: 30,
    email: 'poly@example.com'
};

console.log(poly);