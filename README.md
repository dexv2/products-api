# Products API (Item #1)

This is the pseudo-code that returns products with different formats for each company

## Get Started

## Requirements
`MongoDB on local`

### Add pseudo-products to Toy Shop

POST http://localhost:3002/api/toyshop

Request Body:
```json
[
    {
        "name": "Hungry Bear",
        "price": "57"
    },
    {
        "name": "Owl Babies",
        "price": "27"
    },
    {
        "name": "Gingerbread Boy",
        "price": "25"
    },
    {
        "name": "Stuff Toy",
        "price": "22"
    },
]
```

### Add pseudo-products to Kids World

POST http://localhost:3002/api/kidsworld

Request Body:
```json
[
    {
        "name": "Mirror",
        "price": "$30"
    },
    {
        "name": "Natural Ring",
        "price": "$130"
    },
    {
        "name": "Magic Wand",
        "price": "$12"
    }
]
```

### Add pseudo-products to Toy Universe

POST http://localhost:3002/api/toyuniverse

Request Body:
```json
[
  {
    "name": "Grippies Builders",
    "price": 35
  },
  {
    "name": "Motion Stool",
    "price": 55
  },
  {
    "name": "Unit Block Set",
    "price": 100
  },
  {
    "name": "Rubiks Cube",
    "price": 10
  }
]
```

### Get products from Toy Shop

GET http://localhost:3002/api/toyshop

Should return:
```
name,price
Hungry Bear,57
Owl Babies,27
Gingerbread Boy,25
Stuff Toy,22
```

### Get products from Kids World

GET http://localhost:3002/api/kidsworld

Should return:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Products>
    <Product>
        <name>Mirror</name>
        <price>$30</price>
    </Product>
    <Product>
        <name>Natural Ring</name>
        <price>$130</price>
    </Product>
    <Product>
        <name>Magic Wand</name>
        <price>$12</price>
    </Product>
</Products>
```

### Get products from Toy Universe

GET http://localhost:3002/api/toyuniverse

Should return:
```json
[
  {
    "name": "Grippies Builders",
    "price": 35
  },
  {
    "name": "Motion Stool",
    "price": 55
  },
  {
    "name": "Unit Block Set",
    "price": 100
  },
  {
    "name": "Rubiks Cube",
    "price": 10
  }
]
```
