const featuredDestinations = [
  {
    city: "Los Angeles",
    img: "https://a0.muscache.com/ac/pictures/7bff51c1-3c35-47a5-a86c-5ea75ab6be6c.jpg"
  },
  {
    city: "Florence",
    img: "https://a0.muscache.com/ac/pictures/be1dee1c-2ce7-4efb-aca8-26d47a59514b.jpg"

  },
  {
    city: "London",
    img: "https://a0.muscache.com/ac/pictures/ebbb24af-52d6-490c-89e9-16cc560140e8.jpg"
  },
  {
    city: "Paris",
    img: "https://a0.muscache.com/ac/pictures/d915ce17-d822-426d-b549-0c7b641fec56.jpg"
  },
  {
    city: "Tokyo",
    img: "https://a0.muscache.com/ac/pictures/1d8ecdb4-da01-4d35-9c9e-2ef6ca604eca.jpg"
  },
  {
    city: "Seoul",
    img: "https://a0.muscache.com/ac/pictures/0c79a1b5-333a-421b-b9e3-effb8b9b9958.jpg"
  },
  {
    city: "San Francisco",
    img: "https://a0.muscache.com/ac/pictures/5be8a4f2-0aab-4bb8-b892-61527da7b550.jpg"
  },
  {
    city: "Detroit",
    img: "https://a0.muscache.com/ac/pictures/650757ef-ed35-49b6-a3a0-ce289ab57b42.jpg"
  },
  {
    city: "Miami",
    img: "https://a0.muscache.com/ac/pictures/04598d26-f40d-4c44-8725-99e157fbb7ab.jpg"
  },
  {
    city: "Havana",
    img: "https://a0.muscache.com/ac/pictures/8346a424-a1dc-4c50-921d-a5226b44529f.jpg"
  },
  {
    city: "Nairobi",
    img: "https://a0.muscache.com/ac/pictures/0b5c2ac4-6ce6-4433-ae45-73727bc14ced.jpg"
  },
  {
    city: "Cape Town",
    img: "https://a0.muscache.com/ac/pictures/0e2e4ace-7f04-4895-b7c6-482c99e69908.jpg"
  },
  {
    city: "Queenstown",
    img: "https://a0.muscache.com/ac/pictures/4fc74d30-2a96-451c-ab73-fbb3be2da3f9.jpg"
  },
  {
    city: "Rome",
    img: "https://a0.muscache.com/ac/pictures/10de1294-31b3-4136-95a5-5ac5cf1d1ee8.jpg"
  },
  {
    city: "Dublin",
    img: "https://a0.muscache.com/ac/pictures/b158f548-9087-40e6-8cec-dd2c3d2ce5c1.jpg"
  },
  {
    city: "Provence",
    img: "https://a0.muscache.com/ac/pictures/65138711-50ef-4455-b55d-7d7b3e041b8e.jpg"
  },
  {
    city: "Shanghai",
    img: "https://a0.muscache.com/ac/pictures/1ecdef6a-8713-4d66-9456-5eac2af53429.jpg"
  },
  {
    city: "Seattle",
    img: "https://a0.muscache.com/ac/pictures/fb12894b-44d2-43fc-951f-d3ed310a6b45.jpg"
  },
  {
    city: "Bangkok",
    img: "https://a0.muscache.com/ac/pictures/302251b9-f207-425e-b7e5-e8e0e8a21181.jpg"
  },
  {
    city: "Ho Chi Minh",
    img: "https://a0.muscache.com/ac/pictures/262f7edf-d66c-49af-9574-ffde96aa0af7.jpg"
  },
  {
    city: "Singapore",
    img: "https://a0.muscache.com/ac/pictures/ce4df70a-1969-4c0b-8fce-54ad7ef8da5d.jpg"
  },
  {
    city: "Toronto",
    img: "https://a0.muscache.com/ac/pictures/47eff8df-a396-4963-b84b-1b70af64c3e8.jpg"
  },
  {
    city: "Sydney",
    img: "https://a0.muscache.com/ac/pictures/a0094379-b58a-499f-af01-c73535adfcf1.jpg"
  },
  {
    city: "Harlem",
    img: "https://a0.muscache.com/ac/pictures/64aa4234-c49e-4be2-8b9c-dc89642a19fd.jpg"
  },
  {
    city: "Portland",
    img: "https://a0.muscache.com/ac/pictures/96e4e180-fe4b-41a2-8d14-6b0d0d13f104.jpg"
  },
  {
    city: "Barcelona",
    img: "https://a0.muscache.com/ac/pictures/3ad2a096-54ad-4d93-9bc6-92844771a503.jpg"
  },
  {
    city: "Osaka",
    img: "https://a0.muscache.com/ac/pictures/cd3824a9-d2df-46e7-a56a-2e85ba7932d8.jpg"
  },
  {
    city: "New Delhi",
    img: "https://a0.muscache.com/ac/pictures/dbb55a4e-c8ca-49bf-af6c-e5b37af7aaaf.jpg"
  }
];

class featuredDestinationsApi {
  static getAllFeaturedDestinations() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], featuredDestinations));
    });
  }
}

export default featuredDestinationsApi;
